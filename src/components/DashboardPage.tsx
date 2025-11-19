import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase, Order, PropertyAssessment } from '../lib/supabase';
import { LogOut, Package, Home, Clock, CheckCircle, XCircle, ChevronRight, AlertCircle } from 'lucide-react';

type OrderWithAssessment = Order & {
  property_assessment?: PropertyAssessment;
};

const STATUS_CONFIG = {
  pending_payment: { label: 'Pending Payment', icon: Clock, color: 'text-yellow-600 bg-yellow-50' },
  pending_info: { label: 'Pending Information', icon: AlertCircle, color: 'text-blue-600 bg-blue-50' },
  processing: { label: 'Processing', icon: Clock, color: 'text-purple-600 bg-purple-50' },
  completed: { label: 'Completed', icon: CheckCircle, color: 'text-green-600 bg-green-50' },
  cancelled: { label: 'Cancelled', icon: XCircle, color: 'text-red-600 bg-red-50' }
};

const PACKAGE_NAMES = {
  light_water_air: 'Light, Water and Air',
  full_screen: 'Full Screen',
  full_screen_lab: 'Full Screen + Lab'
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, signOut, loading: authLoading } = useAuth();
  const [searchParams] = useSearchParams();
  const showSuccess = searchParams.get('success');

  const [orders, setOrders] = useState<OrderWithAssessment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
      return;
    }

    if (user) {
      fetchOrders();
    }
  }, [user, authLoading, navigate]);

  const fetchOrders = async () => {
    const { data: ordersData, error: ordersError } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user!.id)
      .order('created_at', { ascending: false });

    if (ordersError) {
      console.error('Error fetching orders:', ordersError);
      setLoading(false);
      return;
    }

    const ordersWithAssessments = await Promise.all(
      (ordersData || []).map(async (order) => {
        const { data: assessment } = await supabase
          .from('property_assessments')
          .select('*')
          .eq('order_id', order.id)
          .maybeSingle();

        return {
          ...order,
          property_assessment: assessment || undefined
        };
      })
    );

    setOrders(ordersWithAssessments);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#F9F8F4] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif-display text-3xl text-[#1c1c1c]">Dashboard</h1>
              <p className="text-sm text-gray-600 mt-1">{user?.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors font-mono-tech text-xs tracking-widest uppercase"
            >
              <LogOut size={16} />
              Sign Out
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {showSuccess && (
          <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-sm flex items-start gap-3">
            <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-900 mb-1">Assessment request submitted!</h3>
              <p className="text-sm text-green-800">
                We've received your property details and will contact you shortly to confirm your assessment date.
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif-display text-2xl text-[#1c1c1c]">Your orders</h2>
          <button
            onClick={() => navigate('/pricing')}
            className="px-6 py-3 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all"
          >
            NEW ASSESSMENT
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-sm p-12 text-center">
            <Package size={48} className="text-gray-300 mx-auto mb-4" />
            <h3 className="font-serif-display text-xl text-[#1c1c1c] mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">Get started with your first property assessment</p>
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-3 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all inline-flex items-center gap-2"
            >
              VIEW PACKAGES
              <ChevronRight size={16} />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => {
              const statusConfig = STATUS_CONFIG[order.status];
              const StatusIcon = statusConfig.icon;

              return (
                <div key={order.id} className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-lg text-[#1c1c1c]">
                          {PACKAGE_NAMES[order.package_type]}
                        </h3>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                          <StatusIcon size={14} />
                          {statusConfig.label}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Ordered {new Date(order.created_at).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono-tech text-xl font-bold text-[#1c1c1c]">
                        £{(order.price / 100).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {order.property_assessment && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-start gap-3">
                        <Home size={18} className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{order.property_assessment.property_address}</p>
                          <p className="text-sm text-gray-500">{order.property_assessment.property_postcode}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            Preferred date: {new Date(order.property_assessment.preferred_assessment_date).toLocaleDateString('en-GB')}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {order.status === 'pending_info' && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => navigate(`/property-form?order_id=${order.id}`)}
                        className="px-6 py-2 bg-emerald-600 text-white font-mono-tech text-xs rounded hover:bg-emerald-700 transition-all inline-flex items-center gap-2"
                      >
                        COMPLETE PROPERTY DETAILS
                        <ChevronRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
