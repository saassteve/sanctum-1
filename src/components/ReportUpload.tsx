import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Upload, FileText, CheckCircle, AlertCircle, LogOut, ArrowLeft } from 'lucide-react';

interface Order {
  id: string;
  user_id: string;
  package_type: string;
  status: string;
  stage: string;
  profiles: {
    email: string;
    full_name: string | null;
  };
}

export default function ReportUpload() {
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<string>('');
  const [reportType, setReportType] = useState<'preliminary' | 'final'>('final');
  const [sanctumScore, setSanctumScore] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [reportUrl, setReportUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user || profile?.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchOrders();
  }, [user, profile, navigate]);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        profiles (
          email,
          full_name
        )
      `)
      .neq('status', 'cancelled')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching orders:', error);
    } else {
      setOrders(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!selectedOrder) {
      setError('Please select an order');
      return;
    }

    const score = parseInt(sanctumScore);
    if (isNaN(score) || score < 0 || score > 100) {
      setError('Sanctum score must be between 0 and 100');
      return;
    }

    setLoading(true);

    try {
      const order = orders.find(o => o.id === selectedOrder);
      if (!order) {
        throw new Error('Order not found');
      }

      const { error: insertError } = await supabase
        .from('reports')
        .insert({
          order_id: selectedOrder,
          user_id: order.user_id,
          report_url: reportUrl || null,
          report_type: reportType,
          sanctum_score: score,
          summary: summary || null,
          uploaded_by: user?.id
        });

      if (insertError) throw insertError;

      await supabase
        .from('orders')
        .update({
          status: 'completed',
          stage: 'completed',
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedOrder);

      setSuccess(true);
      setSelectedOrder('');
      setSanctumScore('');
      setSummary('');
      setReportUrl('');
      await fetchOrders();

      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error uploading report:', err);
      setError(err instanceof Error ? err.message : 'Failed to upload report');
    } finally {
      setLoading(false);
    }
  };

  const formatPackageType = (type: string) => {
    const labels: Record<string, string> = {
      'light_water_air': 'Light, Water & Air',
      'full_screen': 'Full Screen',
      'full_screen_lab': 'Full Screen + Lab'
    };
    return labels[type] || type;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Upload className="w-8 h-8 text-gray-900" />
                <h1 className="text-3xl font-bold text-gray-900">Upload Report</h1>
              </div>
              <p className="text-gray-600">Create and upload assessment reports for orders</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/admin')}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Dashboard
              </button>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        </div>

        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900">Report uploaded successfully</h3>
              <p className="text-sm text-green-700">The report has been created and the order has been marked as completed.</p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900">Error</h3>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Select Order
              </label>
              <select
                value={selectedOrder}
                onChange={(e) => setSelectedOrder(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              >
                <option value="">Choose an order...</option>
                {orders.map((order) => (
                  <option key={order.id} value={order.id}>
                    {order.profiles.full_name || order.profiles.email} - {formatPackageType(order.package_type)} - {order.stage.replace('_', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Report Type
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="preliminary"
                    checked={reportType === 'preliminary'}
                    onChange={(e) => setReportType(e.target.value as 'preliminary' | 'final')}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Preliminary</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="final"
                    checked={reportType === 'final'}
                    onChange={(e) => setReportType(e.target.value as 'preliminary' | 'final')}
                    className="mr-2"
                  />
                  <span className="text-gray-700">Final</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Sanctum Score (0-100)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={sanctumScore}
                onChange={(e) => setSanctumScore(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Report URL (optional)
              </label>
              <input
                type="url"
                value={reportUrl}
                onChange={(e) => setReportUrl(e.target.value)}
                placeholder="https://..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              <p className="mt-1 text-sm text-gray-600">Link to the report PDF or document</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Summary (optional)
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Brief summary of the assessment findings..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" />
                  Upload Report
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
