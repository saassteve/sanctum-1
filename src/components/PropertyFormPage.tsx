import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { ArrowLeft, Home, MapPin, Calendar, AlertCircle, CheckCircle, Phone, Building2, Droplets, Flame, Users } from 'lucide-react';

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
    property_age: '',
    construction_type: '',
    heating_system: '',
    water_supply: '',
    occupancy_status: '',
    preferred_assessment_date: '',
    contact_phone: '',
    alternative_contact: '',
    access_instructions: '',
    building_concerns: '',
    health_priorities: '',
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
        property_address: formData.property_address,
        property_postcode: formData.property_postcode,
        property_type: formData.property_type,
        bedrooms: parseInt(formData.bedrooms),
        property_age: formData.property_age || null,
        construction_type: formData.construction_type || null,
        heating_system: formData.heating_system || null,
        water_supply: formData.water_supply || null,
        occupancy_status: formData.occupancy_status || null,
        preferred_assessment_date: formData.preferred_assessment_date,
        contact_phone: formData.contact_phone || null,
        alternative_contact: formData.alternative_contact || null,
        access_instructions: formData.access_instructions || null,
        building_concerns: formData.building_concerns || null,
        health_priorities: formData.health_priorities || null,
        additional_notes: formData.additional_notes || null
      });

    if (assessmentError) {
      setError(assessmentError.message);
      setSubmitting(false);
      return;
    }

    const { error: orderError } = await supabase
      .from('orders')
      .update({
        status: 'processing',
        stage: 'submitted'
      })
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

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif-display text-4xl lg:text-5xl mb-4 text-[#1c1c1c]">
            Property assessment details
          </h1>
          <p className="text-gray-600 font-light">Provide detailed information to help us conduct a thorough assessment</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-sm p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Location Section */}
            <div>
              <h3 className="font-serif-display text-xl mb-4 pb-2 border-b border-gray-200">Property Location</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="property_address" className="block text-sm font-medium text-gray-700 mb-2">
                    Full property address <span className="text-red-500">*</span>
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

                <div>
                  <label htmlFor="occupancy_status" className="block text-sm font-medium text-gray-700 mb-2">
                    Occupancy status <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="occupancy_status"
                    required
                    value={formData.occupancy_status}
                    onChange={(e) => setFormData({ ...formData, occupancy_status: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select status</option>
                    <option value="vacant">Vacant</option>
                    <option value="occupied_owner">Occupied by owner</option>
                    <option value="occupied_tenant">Occupied by tenant</option>
                    <option value="purchasing">Purchasing (not yet occupied)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Property Characteristics Section */}
            <div>
              <h3 className="font-serif-display text-xl mb-4 pb-2 border-b border-gray-200">Property Characteristics</h3>
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
                    <option value="maisonette">Maisonette</option>
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

                <div>
                  <label htmlFor="property_age" className="block text-sm font-medium text-gray-700 mb-2">
                    Approximate property age
                  </label>
                  <select
                    id="property_age"
                    value={formData.property_age}
                    onChange={(e) => setFormData({ ...formData, property_age: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select age</option>
                    <option value="new_build">New build (0-5 years)</option>
                    <option value="modern">Modern (5-20 years)</option>
                    <option value="recent">Recent (20-40 years)</option>
                    <option value="post_war">Post-war (40-80 years)</option>
                    <option value="pre_war">Pre-war (80-120 years)</option>
                    <option value="victorian">Victorian/Edwardian (120+ years)</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="construction_type" className="block text-sm font-medium text-gray-700 mb-2">
                    Construction type
                  </label>
                  <select
                    id="construction_type"
                    value={formData.construction_type}
                    onChange={(e) => setFormData({ ...formData, construction_type: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="brick">Brick</option>
                    <option value="stone">Stone</option>
                    <option value="concrete">Concrete</option>
                    <option value="timber_frame">Timber frame</option>
                    <option value="mixed">Mixed materials</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Building Systems Section */}
            <div>
              <h3 className="font-serif-display text-xl mb-4 pb-2 border-b border-gray-200">Building Systems</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="heating_system" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Flame size={16} className="text-gray-400" />
                      Heating system
                    </div>
                  </label>
                  <select
                    id="heating_system"
                    value={formData.heating_system}
                    onChange={(e) => setFormData({ ...formData, heating_system: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select system</option>
                    <option value="gas_boiler">Gas combi boiler</option>
                    <option value="gas_central">Gas central heating</option>
                    <option value="electric">Electric heating</option>
                    <option value="heat_pump">Heat pump</option>
                    <option value="underfloor">Underfloor heating</option>
                    <option value="storage_heaters">Storage heaters</option>
                    <option value="mixed">Mixed systems</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="water_supply" className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Droplets size={16} className="text-gray-400" />
                      Water supply
                    </div>
                  </label>
                  <select
                    id="water_supply"
                    value={formData.water_supply}
                    onChange={(e) => setFormData({ ...formData, water_supply: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  >
                    <option value="">Select supply</option>
                    <option value="mains">Mains water</option>
                    <option value="private_well">Private well</option>
                    <option value="borehole">Borehole</option>
                    <option value="shared_supply">Shared supply</option>
                    <option value="unknown">Unknown</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Assessment Scheduling Section */}
            <div>
              <h3 className="font-serif-display text-xl mb-4 pb-2 border-b border-gray-200">Assessment Scheduling</h3>
              <div className="grid md:grid-cols-2 gap-6">
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
                  <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact phone number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="contact_phone"
                      type="tel"
                      required
                      value={formData.contact_phone}
                      onChange={(e) => setFormData({ ...formData, contact_phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="07123 456789"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="alternative_contact" className="block text-sm font-medium text-gray-700 mb-2">
                    Alternative contact (if applicable)
                  </label>
                  <input
                    id="alternative_contact"
                    type="text"
                    value={formData.alternative_contact}
                    onChange={(e) => setFormData({ ...formData, alternative_contact: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Estate agent, property manager, etc."
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="access_instructions" className="block text-sm font-medium text-gray-700 mb-2">
                    Access instructions
                  </label>
                  <textarea
                    id="access_instructions"
                    rows={3}
                    value={formData.access_instructions}
                    onChange={(e) => setFormData({ ...formData, access_instructions: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Key location, gate code, parking instructions, etc."
                  />
                </div>
              </div>
            </div>

            {/* Health & Concerns Section */}
            <div>
              <h3 className="font-serif-display text-xl mb-4 pb-2 border-b border-gray-200">Health Priorities & Concerns</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="health_priorities" className="block text-sm font-medium text-gray-700 mb-2">
                    Specific health priorities
                  </label>
                  <textarea
                    id="health_priorities"
                    rows={3}
                    value={formData.health_priorities}
                    onChange={(e) => setFormData({ ...formData, health_priorities: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="E.g., allergies, respiratory conditions, sleep quality concerns, electromagnetic sensitivity..."
                  />
                </div>

                <div>
                  <label htmlFor="building_concerns" className="block text-sm font-medium text-gray-700 mb-2">
                    Known building concerns
                  </label>
                  <textarea
                    id="building_concerns"
                    rows={3}
                    value={formData.building_concerns}
                    onChange={(e) => setFormData({ ...formData, building_concerns: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="E.g., damp, mould, unusual odours, previous flooding, nearby industrial sites..."
                  />
                </div>

                <div>
                  <label htmlFor="additional_notes" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional notes
                  </label>
                  <textarea
                    id="additional_notes"
                    rows={3}
                    value={formData.additional_notes}
                    onChange={(e) => setFormData({ ...formData, additional_notes: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Any other information that would help us conduct a thorough assessment..."
                  />
                </div>
              </div>
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
