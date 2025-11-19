import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Home, MapPin, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

export default function PropertyFormPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('order_id');

  const [formData, setFormData] = useState({
    property_address: '',
    property_postcode: '',
    property_type: '',
    bedrooms: '',
    preferred_assessment_date: '',
    additional_notes: ''
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!user || !orderId) {
      navigate('/');
      return;
    }

    const verifyOrder = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .eq('id', orderId)
        .eq('user_id', user.id)
        .single();

      if (error || !data || data.status !== 'pending_info') {
        navigate('/dashboard');
        return;
      }

      setLoading(false);
    };

    verifyOrder();
  }, [user, orderId, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const { error: assessmentError } = await supabase
      .from('property_assessments')
      .insert({
        order_id: orderId,
        user_id: user!.id,
        ...formData,
        bedrooms: parseInt(formData.bedrooms)
      });

    if (assessmentError) {
      setError(assessmentError.message);
      setSubmitting(false);
      return;
    }

    const { error: orderError } = await supabase
      .from('orders')
      .update({ status: 'processing' })
      .eq('id', orderId);

    if (orderError) {
      setError(orderError.message);
      setSubmitting(false);
      return;
    }

    navigate('/dashboard?success=true');
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

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <div className="py-8 px-6">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors font-mono-tech text-xs tracking-widest uppercase"
        >
          <ArrowLeft size={16} />
          Back to Dashboard
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif-display text-4xl lg:text-5xl mb-4 text-[#1c1c1c]">
            Property details
          </h1>
          <p className="text-gray-600 font-light">Tell us about the property you'd like us to assess</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-sm p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="property_address" className="block text-sm font-medium text-gray-700 mb-2">
                Property address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Home size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="property_address"
                  type="text"
                  required
                  value={formData.property_address}
                  onChange={(e) => setFormData({ ...formData, property_address: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="45 Chelsea Gardens, London"
                />
              </div>
            </div>

            <div>
              <label htmlFor="property_postcode" className="block text-sm font-medium text-gray-700 mb-2">
                Postcode <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="property_postcode"
                  type="text"
                  required
                  value={formData.property_postcode}
                  onChange={(e) => setFormData({ ...formData, property_postcode: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="SW3 4HY"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Property type <span className="text-red-500">*</span>
                </label>
                <select
                  id="property_type"
                  required
                  value={formData.property_type}
                  onChange={(e) => setFormData({ ...formData, property_type: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select type</option>
                  <option value="flat">Flat</option>
                  <option value="terrace">Terrace house</option>
                  <option value="semi_detached">Semi-detached house</option>
                  <option value="detached">Detached house</option>
                  <option value="bungalow">Bungalow</option>
                </select>
              </div>

              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of bedrooms <span className="text-red-500">*</span>
                </label>
                <input
                  id="bedrooms"
                  type="number"
                  required
                  min="1"
                  max="10"
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  placeholder="3"
                />
              </div>
            </div>

            <div>
              <label htmlFor="preferred_assessment_date" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred assessment date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="preferred_assessment_date"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={formData.preferred_assessment_date}
                  onChange={(e) => setFormData({ ...formData, preferred_assessment_date: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <p className="mt-1 text-xs text-gray-500">We'll contact you to confirm availability</p>
            </div>

            <div>
              <label htmlFor="additional_notes" className="block text-sm font-medium text-gray-700 mb-2">
                Additional notes (optional)
              </label>
              <textarea
                id="additional_notes"
                rows={4}
                value={formData.additional_notes}
                onChange={(e) => setFormData({ ...formData, additional_notes: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Any specific concerns or areas you'd like us to focus on..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-4 bg-[#1c1c1c] text-white font-mono-tech text-sm rounded hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <CheckCircle size={18} />
              {submitting ? 'SUBMITTING...' : 'SUBMIT ASSESSMENT REQUEST'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
