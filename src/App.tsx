import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { updateSEO, seoData } from './utils/seo';
import Header from './components/Header';
import Hero from './components/Hero';
import ScoreSection from './components/ScoreSection';
import FivePillars from './components/FivePillars';
import ProcessSection from './components/ProcessSection';
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
        <FinalCTA />
      </>
    );
  };

  const AboutPageWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.about);
    }, []);
    return <AboutPage />;
  };

  const AtmosphericPurityWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.atmosphericPurity);
    }, []);
    return <AtmosphericPurityDiagnostic />;
  };

  const HydrationIntegrityWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.hydrationIntegrity);
    }, []);
    return <HydrationIntegrityDiagnostic />;
  };

  const ElectromagneticHygieneWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.electromagneticHygiene);
    }, []);
    return <ElectromagneticHygieneDiagnostic />;
  };

  const CircadianAlignmentWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.circadianAlignment);
    }, []);
    return <CircadianAlignmentDiagnostic />;
  };

  const MaterialToxicityWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.materialToxicity);
    }, []);
    return <MaterialToxicityDiagnostic />;
  };

  const SampleReportWithSEO = () => {
    useEffect(() => {
      updateSEO(seoData.sampleReport);
    }, []);
    return <SampleReport />;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <HoverReceiver />
      <Router>
        <div className="min-h-screen bg-[#F9F8F4]">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/atmospheric-purity-diagnostic" element={<AtmosphericPurityWithSEO />} />
            <Route path="/hydration-integrity-diagnostic" element={<HydrationIntegrityWithSEO />} />
            <Route path="/electromagnetic-hygiene-diagnostic" element={<ElectromagneticHygieneWithSEO />} />
            <Route path="/circadian-alignment-diagnostic" element={<CircadianAlignmentWithSEO />} />
            <Route path="/material-toxicity-diagnostic" element={<MaterialToxicityWithSEO />} />
            <Route path="/sample-report" element={<SampleReportWithSEO />} />
            <Route path="/about" element={<AboutPageWithSEO />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;