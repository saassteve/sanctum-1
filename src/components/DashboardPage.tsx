import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase, Order, PropertyAssessment, Report, ReportMetric } from '../lib/supabase';
import { LogOut, Package, Home, Clock, CheckCircle, XCircle, ChevronRight, AlertCircle, FileText, Download } from 'lucide-react';

type OrderWithAssessment = Order & {
  property_assessment?: PropertyAssessment;
};

type ReportWithMetrics = Report & {
  metrics?: ReportMetric[];
  order?: Order;
};

const STATUS_CONFIG = {
  pending_payment: { label: 'Pending Payment', icon: Clock, color: 'text-yellow-600 bg-yellow-50' },
  pending_info: { label: 'Pending Information', icon: AlertCircle, color: 'text-blue-600 bg-blue-50' },
  processing: { label: 'Processing', icon: Clock, color: 'text-purple-600 bg-purple-50' },
  completed: { label: 'Completed', icon: CheckCircle, color: 'text-green-600 bg-green-50' },
  cancelled: { label: 'Cancelled', icon: XCircle, color: 'text-red-600 bg-red-50' }
};

const STAGE_CONFIG = {
  submitted: { label: 'Submitted', progress: 16 },
  scheduled: { label: 'Scheduled', progress: 33 },
  assessment_in_progress: { label: 'Assessment in Progress', progress: 50 },
  lab_analysis: { label: 'Lab Analysis', progress: 66 },
  report_generation: { label: 'Report Generation', progress: 83 },
  completed: { label: 'Completed', progress: 100 }
};

const PACKAGE_NAMES = {
  light_water_air: 'Light, Water and Air',
  full_screen: 'Full Screen',
  full_screen_lab: 'Full Screen + Lab'
};

const METRIC_COLORS = {
  excellent: 'text-green-600 bg-green-50',
  good: 'text-emerald-600 bg-emerald-50',
  fair: 'text-yellow-600 bg-yellow-50',
  poor: 'text-orange-600 bg-orange-50',
  critical: 'text-red-600 bg-red-50'
};

const CATEGORY_NAMES = {
  air_quality: 'Air Quality',
  water_quality: 'Water Quality',
  emf: 'EMF Hygiene',
  light: 'Circadian Light',
  materials: 'Material Toxicity'
};

export default function DashboardPage() {
  const navigate = useNavigate();
  const { user, signOut, loading: authLoading } = useAuth();
  const [searchParams] = useSearchParams();
  const showSuccess = searchParams.get('success');
  const [activeTab, setActiveTab] = useState<'orders' | 'reports'>('orders');

  const [orders, setOrders] = useState<OrderWithAssessment[]>([]);
  const [reports, setReports] = useState<ReportWithMetrics[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login');
      return;
    }

    if (user) {
      fetchData();
    }
  }, [user, authLoading, navigate]);

  const fetchData = async () => {
    await Promise.all([fetchOrders(), fetchReports()]);
    setLoading(false);
  };

  const fetchOrders = async () => {
    const { data: ordersData, error: ordersError } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', user!.id)
      .order('created_at', { ascending: false });

    if (ordersError) {
      console.error('Error fetching orders:', ordersError);
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
  };

  const fetchReports = async () => {
    const { data: reportsData, error: reportsError } = await supabase
      .from('reports')
      .select('*')
      .eq('user_id', user!.id)
      .order('created_at', { ascending: false });

    if (reportsError) {
      console.error('Error fetching reports:', reportsError);
      return;
    }

    const reportsWithMetrics = await Promise.all(
      (reportsData || []).map(async (report) => {
        const { data: metrics } = await supabase
          .from('report_metrics')
          .select('*')
          .eq('report_id', report.id);

        const { data: order } = await supabase
          .from('orders')
          .select('*')
          .eq('id', report.order_id)
          .maybeSingle();

        return {
          ...report,
          metrics: metrics || [],
          order: order || undefined
        };
      })
    );

    setReports(reportsWithMetrics);
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

          <div className="flex gap-4 mt-6 border-b border-gray-200">
            <button
              onClick={() => setActiveTab('orders')}
              className={`pb-3 px-2 font-mono-tech text-xs tracking-widest uppercase transition-colors ${
                activeTab === 'orders'
                  ? 'text-emerald-600 border-b-2 border-emerald-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`pb-3 px-2 font-mono-tech text-xs tracking-widest uppercase transition-colors ${
                activeTab === 'reports'
                  ? 'text-emerald-600 border-b-2 border-emerald-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Reports ({reports.length})
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

        {activeTab === 'orders' && (
          <>
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
                  const stageConfig = order.stage ? STAGE_CONFIG[order.stage] : null;

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

                      {stageConfig && order.status === 'processing' && (
                        <div className="mb-4 pb-4 border-b border-gray-100">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-700">{stageConfig.label}</span>
                            <span className="text-xs text-gray-500">{stageConfig.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-emerald-600 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${stageConfig.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      )}

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
          </>
        )}

        {activeTab === 'reports' && (
          <>
            <div className="mb-8">
              <h2 className="font-serif-display text-2xl text-[#1c1c1c]">Your reports</h2>
              <p className="text-gray-600 text-sm mt-1">View and download your environmental assessment reports</p>
            </div>

            {reports.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-sm p-12 text-center">
                <FileText size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="font-serif-display text-xl text-[#1c1c1c] mb-2">No reports yet</h3>
                <p className="text-gray-600">Your reports will appear here once assessments are completed</p>
              </div>
            ) : (
              <div className="space-y-6">
                {reports.map((report) => (
                  <div key={report.id} className="bg-white border border-gray-200 rounded-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-serif-display text-xl text-[#1c1c1c]">
                              {report.order ? PACKAGE_NAMES[report.order.package_type] : 'Assessment Report'}
                            </h3>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              report.report_type === 'final' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {report.report_type === 'final' ? 'Final Report' : 'Preliminary Report'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            Generated {new Date(report.uploaded_at).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </p>
                        </div>
                        {report.sanctum_score !== null && (
                          <div className="text-center">
                            <div className="font-mono-tech text-4xl font-bold text-[#1c1c1c]">
                              {report.sanctum_score}
                            </div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Sanctum Score</div>
                          </div>
                        )}
                      </div>

                      {report.summary && (
                        <div className="mt-4 p-4 bg-white rounded border border-gray-200">
                          <p className="text-sm text-gray-700 leading-relaxed">{report.summary}</p>
                        </div>
                      )}
                    </div>

                    {report.metrics && report.metrics.length > 0 && (
                      <div className="p-6">
                        <h4 className="text-sm font-medium text-gray-700 mb-4">Category Breakdown</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {report.metrics.map((metric) => (
                            <div key={metric.id} className="flex items-start gap-3 p-4 border border-gray-200 rounded">
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-sm font-medium text-gray-900">
                                    {CATEGORY_NAMES[metric.category]}
                                  </span>
                                  {metric.score !== null && (
                                    <span className="font-mono-tech text-sm font-bold text-gray-900">
                                      {metric.score}
                                    </span>
                                  )}
                                </div>
                                {metric.status && (
                                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${METRIC_COLORS[metric.status]}`}>
                                    {metric.status.charAt(0).toUpperCase() + metric.status.slice(1)}
                                  </span>
                                )}
                                {metric.key_findings && (
                                  <p className="text-xs text-gray-600 mt-2">{metric.key_findings}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {report.report_url && (
                      <div className="p-6 border-t border-gray-200 bg-gray-50">
                        <a
                          href={report.report_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all"
                        >
                          <Download size={16} />
                          DOWNLOAD FULL REPORT
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
