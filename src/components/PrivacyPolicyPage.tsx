import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
        <h1 className="font-serif-display text-5xl mb-8 text-[#1c1c1c]">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Sanctum Environmental Diagnostics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Information We Collect</h2>
            <h3 className="font-semibold text-xl mb-3 text-[#1c1c1c]">Personal Information</h3>
            <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Name, email address, phone number, and contact details</li>
              <li>Property address and assessment details</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Account credentials and preferences</li>
            </ul>

            <h3 className="font-semibold text-xl mb-3 text-[#1c1c1c]">Assessment Data</h3>
            <p className="text-gray-700 mb-4">When conducting environmental assessments, we collect:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Property characteristics and construction details</li>
              <li>Environmental measurements and test results</li>
              <li>Photographs and documentation of your property</li>
              <li>Health concerns and priorities you share with us</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Provide, maintain, and improve our environmental assessment services</li>
              <li>Process your orders and schedule property assessments</li>
              <li>Generate detailed environmental health reports</li>
              <li>Communicate with you about your assessments and results</li>
              <li>Send you important updates about our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Comply with legal obligations and enforce our terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Encrypted data transmission using SSL/TLS protocols</li>
              <li>Secure cloud storage with Supabase</li>
              <li>Regular security assessments and updates</li>
              <li>Restricted access to personal information</li>
              <li>Secure payment processing through Stripe</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Information Sharing</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Service providers who assist in delivering our services (e.g., payment processors, laboratory partners)</li>
              <li>Professional advisors and auditors</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Export your data in a portable format</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Assessment reports and related data are typically retained for 7 years.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can manage your cookie preferences through your browser settings or our cookie consent tool.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif-display text-3xl mb-4 text-[#1c1c1c]">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: privacy@sanctum-diagnostics.com<br />
              Address: [Your Business Address]
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
