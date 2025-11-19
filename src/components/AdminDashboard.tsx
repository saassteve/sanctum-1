import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Users, FileText, Package, ChevronDown, ChevronUp, Shield, Upload } from 'lucide-react';

interface User {
  id: string;
  email: string;
  full_name: string | null;
  role: string;
  created_at: string;
}

interface Order {
  id: string;
  user_id: string;
  package_type: string;
  price: number;
  status: string;
  stage: string;
  created_at: string;
  profiles: {
    email: string;
    full_name: string | null;
  };
}

interface Report {
  id: string;
  order_id: string;
  user_id: string;
  report_type: string;
  sanctum_score: number | null;
  created_at: string;
  profiles: {
    email: string;
    full_name: string | null;
  };
}

export default function AdminDashboard() {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'users' | 'orders' | 'reports'>('users');
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);

  useEffect(() => {
    if (!user || profile?.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchData();
  }, [user, profile, navigate]);

  const fetchData = async () => {
    setLoading(true);
    await Promise.all([fetchUsers(), fetchOrders(), fetchReports()]);
    setLoading(false);
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching users:', error);
    } else {
      setUsers(data || []);
    }
  };

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
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching orders:', error);
    } else {
      setOrders(data || []);
    }
  };

  const fetchReports = async () => {
    const { data, error } = await supabase
      .from('reports')
      .select(`
        *,
        profiles (
          email,
          full_name
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reports:', error);
    } else {
      setReports(data || []);
    }
  };

  const updateOrderStage = async (orderId: string, newStage: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ stage: newStage, updated_at: new Date().toISOString() })
      .eq('id', orderId);

    if (error) {
      console.error('Error updating order stage:', error);
      alert('Failed to update order stage');
    } else {
      await fetchOrders();
    }
  };

  const updateUserRole = async (userId: string, newRole: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId);

    if (error) {
      console.error('Error updating user role:', error);
      alert('Failed to update user role');
    } else {
      await fetchUsers();
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPackageType = (type: string) => {
    const labels: Record<string, string> = {
      'light_water_air': 'Light, Water & Air',
      'full_screen': 'Full Screen',
      'full_screen_lab': 'Full Screen + Lab'
    };
    return labels[type] || type;
  };

  const getStageColor = (stage: string) => {
    const colors: Record<string, string> = {
      'submitted': 'bg-blue-100 text-blue-800',
      'scheduled': 'bg-purple-100 text-purple-800',
      'assessment_in_progress': 'bg-yellow-100 text-yellow-800',
      'lab_analysis': 'bg-orange-100 text-orange-800',
      'report_generation': 'bg-indigo-100 text-indigo-800',
      'completed': 'bg-green-100 text-green-800'
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'pending_payment': 'bg-yellow-100 text-yellow-800',
      'pending_info': 'bg-blue-100 text-blue-800',
      'processing': 'bg-purple-100 text-purple-800',
      'completed': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-gray-900" />
                <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              </div>
              <p className="text-gray-600">Manage users, orders, and reports</p>
            </div>
            <button
              onClick={() => navigate('/admin/upload-report')}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              <Upload className="w-5 h-5" />
              Upload Report
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('users')}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'users'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Users className="w-5 h-5" />
                Users ({users.length})
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'orders'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Package className="w-5 h-5" />
                Orders ({orders.length})
              </button>
              <button
                onClick={() => setActiveTab('reports')}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'reports'
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <FileText className="w-5 h-5" />
                Reports ({reports.length})
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'users' && (
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Email</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Role</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Joined</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700">{user.email}</td>
                          <td className="py-3 px-4 text-gray-700">{user.full_name || '-'}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {user.role}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-gray-600 text-sm">{formatDate(user.created_at)}</td>
                          <td className="py-3 px-4">
                            <select
                              value={user.role}
                              onChange={(e) => updateUserRole(user.id, e.target.value)}
                              className="text-sm border border-gray-300 rounded px-2 py-1"
                              disabled={user.id === profile?.id}
                            >
                              <option value="customer">Customer</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="border border-gray-200 rounded-lg">
                    <div
                      className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1 grid grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-gray-600">Customer</p>
                            <p className="font-medium text-gray-900">{order.profiles.full_name || order.profiles.email}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Package</p>
                            <p className="font-medium text-gray-900">{formatPackageType(order.package_type)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Status</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status.replace('_', ' ')}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Stage</p>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStageColor(order.stage)}`}>
                              {order.stage.replace('_', ' ')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {expandedOrder === order.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>

                    {expandedOrder === order.id && (
                      <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="grid grid-cols-2 gap-6 mb-4">
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Order ID</p>
                            <p className="text-sm font-mono text-gray-900">{order.id}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Created</p>
                            <p className="text-sm text-gray-900">{formatDate(order.created_at)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Price</p>
                            <p className="text-sm text-gray-900">£{order.price}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 mb-1">Payment ID</p>
                            <p className="text-sm font-mono text-gray-900">{order.stripe_payment_id || '-'}</p>
                          </div>
                        </div>

                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Update Stage
                          </label>
                          <select
                            value={order.stage}
                            onChange={(e) => updateOrderStage(order.id, e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2"
                          >
                            <option value="submitted">Submitted</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="assessment_in_progress">Assessment in Progress</option>
                            <option value="lab_analysis">Lab Analysis</option>
                            <option value="report_generation">Report Generation</option>
                            <option value="completed">Completed</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Customer</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Score</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Created</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Order ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports.map((report) => (
                        <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-gray-700">
                            {report.profiles.full_name || report.profiles.email}
                          </td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {report.report_type}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {report.sanctum_score !== null ? (
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                report.sanctum_score >= 80 ? 'bg-green-100 text-green-800' :
                                report.sanctum_score >= 60 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {report.sanctum_score}
                              </span>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-gray-600 text-sm">{formatDate(report.created_at)}</td>
                          <td className="py-3 px-4 text-gray-600 text-sm font-mono">{report.order_id.substring(0, 8)}...</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
