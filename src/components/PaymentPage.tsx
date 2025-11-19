import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { ArrowLeft, CreditCard, AlertCircle } from 'lucide-react';

export default function PaymentPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || !orderId) {
      navigate('/');
      return;
    }

    const fetchOrder = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .eq('user_id', user.id)
        .single();

      if (error || !data) {
        navigate('/');
        return;
      }

      setOrder(data);
      setLoading(false);
    };

    fetchOrder();
  }, [user, orderId, navigate]);

  const handlePayment = async () => {
    setProcessing(true);
    setError('');

    const stripeKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

    if (!stripeKey || stripeKey === 'your_stripe_publishable_key_here') {
      await supabase
        .from('orders')
        .update({
          status: 'pending_info',
          stripe_payment_id: 'demo_payment_' + Date.now()
        })
        .eq('id', orderId);

      navigate(`/property-form?order_id=${orderId}`);
      return;
    }

    setError('Stripe integration not yet configured. Contact support.');
    setProcessing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F9F8F4] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const packagePrice = order.price / 100;

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <div className="py-8 px-6">
        <button
          onClick={() => navigate('/checkout')}
          className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors font-mono-tech text-xs tracking-widest uppercase"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif-display text-4xl lg:text-5xl mb-4 text-[#1c1c1c]">
            Complete payment
          </h1>
          <p className="text-gray-600 font-light">Secure payment processing</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-sm p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <div className="mb-8 pb-8 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount to pay</span>
              <span className="font-mono-tech text-3xl font-bold text-[#1c1c1c]">
                £{packagePrice.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Demo Mode:</strong> This is a demonstration. Click the button below to simulate payment and continue to the property details form.
            </p>
          </div>

          <button
            onClick={handlePayment}
            disabled={processing}
            className="w-full px-6 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <CreditCard size={18} />
            {processing ? 'PROCESSING...' : 'COMPLETE PAYMENT (DEMO)'}
          </button>

          <p className="text-xs text-gray-500 text-center mt-6">
            To enable real Stripe payments, add your Stripe publishable key to the .env file
          </p>
        </div>
      </div>
    </div>
  );
}
