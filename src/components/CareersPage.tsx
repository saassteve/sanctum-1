import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

export default function CareersPage() {
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
        <h1 className="font-serif-display text-5xl mb-6 text-[#1c1c1c]">Careers</h1>
        <p className="text-xl text-gray-600 mb-12">Join us in revolutionizing environmental health diagnostics</p>

        <section className="mb-12">
          <h2 className="font-serif-display text-3xl mb-6 text-[#1c1c1c]">Our Mission</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Sanctum Environmental Diagnostics, we're building the future of building health. We believe that every person deserves to live and work in environments that support their wellbeing at the most fundamental level.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our team combines cutting-edge environmental science with practical, actionable diagnostics to help people understand and optimize their living spaces. We're looking for passionate individuals who share our commitment to environmental health and human wellbeing.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-serif-display text-3xl mb-6 text-[#1c1c1c]">Why Join Sanctum?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-semibold text-xl mb-3 text-[#1c1c1c]">Impact</h3>
              <p className="text-gray-700">
                Your work directly improves people's health and quality of life by helping them create safer, healthier living environments.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-semibold text-xl mb-3 text-[#1c1c1c]">Innovation</h3>
              <p className="text-gray-700">
                Work with cutting-edge diagnostic tools and methodologies at the intersection of environmental science and health.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-semibold text-xl mb-3 text-[#1c1c1c]">Growth</h3>
              <p className="text-gray-700">
                Continuous learning opportunities with access to advanced training in environmental diagnostics and assessment techniques.
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-6 rounded-sm">
              <h3 className="font-semibold text-xl mb-3 text-[#1c1c1c]">Culture</h3>
              <p className="text-gray-700">
                Join a team of dedicated professionals who are passionate about environmental health and committed to excellence.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif-display text-3xl mb-6 text-[#1c1c1c]">Open Positions</h2>

          <div className="bg-white border border-gray-200 p-8 rounded-sm mb-6">
            <h3 className="font-semibold text-2xl mb-3 text-[#1c1c1c]">Environmental Assessment Technician</h3>
            <p className="text-gray-600 mb-4 font-mono-tech text-sm uppercase tracking-widest">Full-Time • On-Site</p>
            <p className="text-gray-700 mb-4">
              We're seeking experienced technicians to conduct comprehensive environmental assessments in residential and commercial properties. You'll be responsible for air quality testing, water analysis, EMF measurements, and light quality assessments.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>3+ years experience in environmental testing or building diagnostics</li>
              <li>Strong understanding of air quality, water testing, and EMF measurement</li>
              <li>Excellent attention to detail and documentation skills</li>
              <li>Valid driver's license and ability to travel to client sites</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-sm mb-6">
            <h3 className="font-semibold text-2xl mb-3 text-[#1c1c1c]">Laboratory Analyst</h3>
            <p className="text-gray-600 mb-4 font-mono-tech text-sm uppercase tracking-widest">Full-Time • Laboratory-Based</p>
            <p className="text-gray-700 mb-4">
              Join our laboratory team to analyze environmental samples and provide detailed reports. You'll work with water, air, and material samples to identify contaminants and health hazards.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Bachelor's degree in Environmental Science, Chemistry, or related field</li>
              <li>Experience with laboratory testing and analysis procedures</li>
              <li>Knowledge of environmental health standards and regulations</li>
              <li>Strong analytical and problem-solving skills</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 p-8 rounded-sm mb-6">
            <h3 className="font-semibold text-2xl mb-3 text-[#1c1c1c]">Client Relations Manager</h3>
            <p className="text-gray-600 mb-4 font-mono-tech text-sm uppercase tracking-widest">Full-Time • Hybrid</p>
            <p className="text-gray-700 mb-4">
              Manage client relationships from initial consultation through report delivery. You'll help clients understand their assessment results and guide them through implementing recommendations.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>5+ years experience in customer success or account management</li>
              <li>Excellent communication and interpersonal skills</li>
              <li>Background in environmental health or related field preferred</li>
              <li>Ability to explain technical concepts to non-technical audiences</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="font-serif-display text-3xl mb-6 text-[#1c1c1c]">Benefits</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Competitive salary and performance bonuses</li>
            <li>Comprehensive health insurance</li>
            <li>Professional development and training opportunities</li>
            <li>Modern equipment and tools</li>
            <li>Flexible working arrangements</li>
            <li>25 days holiday plus bank holidays</li>
            <li>Company pension scheme</li>
          </ul>
        </section>

        <section className="bg-white border border-gray-200 p-8 rounded-sm">
          <h2 className="font-serif-display text-3xl mb-6 text-[#1c1c1c]">Apply Now</h2>
          <p className="text-gray-700 mb-6">
            Don't see a position that matches your skills? We're always interested in hearing from talented individuals who are passionate about environmental health.
          </p>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5" />
            <div>
              <p className="font-semibold">Send your CV and cover letter to:</p>
              <a href="mailto:careers@sanctum-diagnostics.com" className="text-emerald-600 hover:text-emerald-700">
                careers@sanctum-diagnostics.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
