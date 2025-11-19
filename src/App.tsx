import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { updateSEO, seoData } from './utils/seo';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ScoreSection from './components/ScoreSection';
import FivePillars from './components/FivePillars';
import ProcessSection from './components/ProcessSection';
import MissionSection from './components/MissionSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AtmosphericPurityDiagnostic from './components/AtmosphericPurityDiagnostic';
import HydrationIntegrityDiagnostic from './components/HydrationIntegrityDiagnostic';
import ElectromagneticHygieneDiagnostic from './components/ElectromagneticHygieneDiagnostic';
import CircadianAlignmentDiagnostic from './components/CircadianAlignmentDiagnostic';
import MaterialToxicityDiagnostic from './components/MaterialToxicityDiagnostic';
import SampleReport from './components/SampleReport';
import AboutUsIntro from './components/AboutUsIntro';
import AboutPage from './components/AboutPage';
import PricingPage from './components/PricingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import CheckoutPage from './components/CheckoutPage';
import PaymentPage from './components/PaymentPage';
import PropertyFormPage from './components/PropertyFormPage';
import DashboardPage from './components/DashboardPage';
import AdminDashboard from './components/AdminDashboard';
import ReportUpload from './components/ReportUpload';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CareersPage from './components/CareersPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import HoverReceiver from './visual-edits/VisualEditsMessenger';

const queryClient = new QueryClient();

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HomePage = () => {
    useEffect(() => {
      updateSEO(seoData.home);
    }, []);

    return (
      <>
        <Hero />
        <ScoreSection />
        <FivePillars />
        <ProcessSection />
        <MissionSection />
        <FinalCTA />
      </>
    );
  };

  const AboutPageWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.about);
      window.scrollTo(0, 0);
    }, []);
    return <AboutPage />;
  };

  const AtmosphericPurityWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.atmosphericPurity);
      window.scrollTo(0, 0);
    }, []);
    return <AtmosphericPurityDiagnostic />;
  };

  const HydrationIntegrityWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.hydrationIntegrity);
      window.scrollTo(0, 0);
    }, []);
    return <HydrationIntegrityDiagnostic />;
  };

  const ElectromagneticHygieneWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.electromagneticHygiene);
      window.scrollTo(0, 0);
    }, []);
    return <ElectromagneticHygieneDiagnostic />;
  };

  const CircadianAlignmentWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.circadianAlignment);
      window.scrollTo(0, 0);
    }, []);
    return <CircadianAlignmentDiagnostic />;
  };

  const MaterialToxicityWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.materialToxicity);
      window.scrollTo(0, 0);
    }, []);
    return <MaterialToxicityDiagnostic />;
  };

  const SampleReportWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.sampleReport);
      window.scrollTo(0, 0);
    }, []);
    return <SampleReport />;
  };

  const PricingPageWithSEO = () => {
    useEffect(() => {
      updateSEO({
        title: 'Pricing - Sanctum Environmental Diagnostics',
        description: 'Transparent pricing for comprehensive property health assessments. From £750 for Light, Water and Air to premium packages with full environmental analysis.',
        keywords: 'property assessment pricing, home inspection cost, environmental testing price'
      });
      window.scrollTo(0, 0);
    }, []);
    return <PricingPage />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <HoverReceiver />
        <Router>
          <div className="min-h-screen bg-[#F9F8F4]">
            <Routes>
              <Route path="/" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <HomePage />
                  <Footer />
                </>
              } />
              <Route path="/atmospheric-purity-diagnostic" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <AtmosphericPurityWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/hydration-integrity-diagnostic" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <HydrationIntegrityWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/electromagnetic-hygiene-diagnostic" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <ElectromagneticHygieneWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/circadian-alignment-diagnostic" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <CircadianAlignmentWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/material-toxicity-diagnostic" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <MaterialToxicityWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/sample-report" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <SampleReportWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/pricing" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <PricingPageWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/about" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <AboutPageWithSEO />
                  <Footer />
                </>
              } />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/property-form" element={<PropertyFormPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/upload-report" element={<ReportUpload />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="*" element={
                <>
                  <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                  <HomePage />
                  <Footer />
                </>
              } />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
