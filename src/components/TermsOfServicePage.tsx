import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <div className="py-8 px-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors font-mono-tech text-xs tracking-widest uppercase"
        >
          <ArrowLeft size={16} />
          Back to Home
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h1 className="font-serif-display text-5xl mb-8 text-[#1c1c1c]">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using Sanctum Environmental Diagnostics services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Services Description</h2>
            <p className="text-gray-700 mb-4">
              Sanctum Environmental Diagnostics provides comprehensive environmental health assessments for residential and commercial properties. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Atmospheric purity diagnostics (air quality assessment)</li>
              <li>Hydration integrity diagnostics (water quality testing)</li>
              <li>Electromagnetic hygiene diagnostics (EMF measurement)</li>
              <li>Circadian alignment diagnostics (light quality analysis)</li>
              <li>Material toxicity diagnostics (building material assessment)</li>
              <li>Comprehensive environmental reports and recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Account Registration</h2>
            <p className="text-gray-700 mb-4">
              To use our services, you must create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Booking and Payment</h2>
            <p className="text-gray-700 mb-4">
              When you book an assessment:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Payment is required at the time of booking</li>
              <li>All payments are processed securely through Stripe</li>
              <li>Prices are as displayed on our website at the time of booking</li>
              <li>We reserve the right to refuse or cancel orders</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Assessment Process</h2>
            <p className="text-gray-700 mb-4">
              During the assessment:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>You must provide safe and unobstructed access to the property</li>
              <li>You are responsible for ensuring pets are secured</li>
              <li>Assessment times are estimates and may vary based on property conditions</li>
              <li>Additional charges may apply for properties requiring special access or equipment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Reports and Recommendations</h2>
            <p className="text-gray-700 mb-4">
              Our environmental reports:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Are based on measurements and observations at the time of assessment</li>
              <li>Provide recommendations but do not constitute professional medical or construction advice</li>
              <li>Should not be relied upon as the sole basis for major decisions</li>
              <li>Are confidential and intended for your use only</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Cancellation and Refunds</h2>
            <p className="text-gray-700 mb-4">
              Cancellation policy:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Cancellations made 48 hours or more before scheduled assessment: full refund</li>
              <li>Cancellations made 24-48 hours before: 50% refund</li>
              <li>Cancellations made less than 24 hours before: no refund</li>
              <li>We may reschedule due to equipment issues or safety concerns without penalty</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content, reports, methodologies, and materials provided by Sanctum Environmental Diagnostics are protected by intellectual property laws. You may not:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Reproduce or distribute our reports commercially</li>
              <li>Use our methodologies without permission</li>
              <li>Remove or alter copyright notices</li>
              <li>Reverse engineer our proprietary assessment techniques</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law, Sanctum Environmental Diagnostics shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or use</li>
              <li>Decisions made based on our reports</li>
              <li>Conditions that develop after the assessment</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Our total liability shall not exceed the amount paid for the specific assessment service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Warranties Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              Our services are provided "as is" without warranties of any kind. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Services will meet your specific requirements</li>
              <li>Results will be error-free or continuous</li>
              <li>All environmental hazards will be detected</li>
              <li>Implementing recommendations will achieve specific outcomes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold harmless Sanctum Environmental Diagnostics from any claims arising from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Your breach of these Terms</li>
              <li>Your violation of any law or rights of a third party</li>
              <li>Unauthorized access to the property</li>
              <li>Misuse of our reports or recommendations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: legal@sanctum-diagnostics.com<br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
