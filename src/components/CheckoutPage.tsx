import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Check, CreditCard } from 'lucide-react';

const PACKAGES = {
  light_water_air: {
    name: 'Light, Water and Air',
    price: 750,
    features: [
      'Air quality testing (PM2.5, VOCs)',
      'Water quality analysis (heavy metals)',
      'Circadian light analysis',
      'Sanctum Score™ report',
      '48-hour turnaround',
      'Digital report delivery'
    ]
  },
  full_screen: {
    name: 'Full Screen',
    price: 1500,
    features: [
      'Everything in Light, Water and Air',
      'EMF radiation mapping',
      'Material toxicity screening',
      'Extended water analysis (microplastics)',
      'Mould and bacteria sampling',
      'Detailed report',
      '30-min consultation call',
      'Priority scheduling'
    ]
  },
  full_screen_lab: {
    name: 'Full Screen + Lab',
    price: 3000,
    features: [
      'Everything in Full Screen',
      'Comprehensive laboratory testing',
      'Soil and garden contamination testing',
      'Radon gas monitoring (7-day)',
      'Acoustic environment assessment',
      'Custom remediation roadmap',
      'Executive report',
      '1-hour strategy consultation',
      'Extended turnaround (5-7 days for lab analysis)'
    ]
  }
};

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [searchParams] = useSearchParams();
  const packageType = searchParams.get('package') as keyof typeof PACKAGES || 'light_water_air';
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/login?redirect=/checkout?package=' + packageType);
    }
  }, [user, authLoading, navigate, packageType]);

  const selectedPackage = PACKAGES[packageType];

  const handlePayment = async () => {
    if (!user) return;

    setProcessing(true);

    const { data: order, error } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        package_type: packageType,
        price: selectedPackage.price * 100,
        status: 'pending_payment'
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating order:', error);
      setProcessing(false);
      return;
    }

    navigate(`/payment?order_id=${order.id}`);
  };

  if (authLoading) {
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
      <div className="py-8 px-6">
        <button
          onClick={() => navigate('/pricing')}
          className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors font-mono-tech text-xs tracking-widest uppercase"
        >
          <ArrowLeft size={16} />
          Back to Pricing
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif-display text-4xl lg:text-5xl mb-4 text-[#1c1c1c]">
            Complete your order
          </h1>
          <p className="text-gray-600 font-light">Review your package selection and proceed to payment</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-sm p-8">
            <h2 className="font-serif-display text-2xl mb-6 text-[#1c1c1c]">Order Summary</h2>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-lg text-[#1c1c1c]">{selectedPackage.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Property environmental assessment</p>
                </div>
                <span className="font-mono-tech text-xl font-bold text-[#1c1c1c]">
                  £{selectedPackage.price.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <p className="text-sm font-medium text-gray-700 mb-3">Package includes:</p>
              {selectedPackage.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center text-lg font-medium">
                <span>Total</span>
                <span className="font-mono-tech text-2xl">£{selectedPackage.price.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-8">
            <h2 className="font-serif-display text-2xl mb-6 text-[#1c1c1c]">Payment</h2>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-4">
                After payment, you'll be directed to provide your property details and schedule your assessment.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-4">
                <p className="text-sm text-emerald-800">
                  <strong>Secure payment</strong> powered by Stripe. Your payment information is encrypted and secure.
                </p>
              </div>
            </div>

            <button
              onClick={handlePayment}
              disabled={processing}
              className="w-full px-6 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <CreditCard size={18} />
              {processing ? 'PROCESSING...' : 'PROCEED TO PAYMENT'}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              By proceeding, you agree to our terms of service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
