interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const updateSEO = (data: SEOData) => {
  // Update title
  document.title = data.title;
  
  // Update meta description
  updateMetaTag('name', 'description', data.description);
  
  // Update keywords if provided
  if (data.keywords) {
    updateMetaTag('name', 'keywords', data.keywords);
  }
  
  // Update Open Graph tags
  updateMetaTag('property', 'og:title', data.title);
  updateMetaTag('property', 'og:description', data.description);
  
  // Update Twitter tags
  updateMetaTag('property', 'twitter:title', data.title);
  updateMetaTag('property', 'twitter:description', data.description);
  
  // Update canonical URL if provided
  if (data.canonical) {
    updateCanonicalLink(data.canonical);
  }
  
  // Update OG URL
  updateMetaTag('property', 'og:url', window.location.href);
  updateMetaTag('property', 'twitter:url', window.location.href);
};

const updateMetaTag = (attribute: string, name: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateCanonicalLink = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (element) {
    element.href = href;
  } else {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.href = href;
    document.head.appendChild(element);
  }
};

// SEO data for different pages
export const seoData = {
  home: {
    title: 'Sanctum - Engineer Your Environment, Optimise Your Health',
    description: 'Transform your home into a sanctuary of health with Sanctum\'s comprehensive bio-environmental diagnostics. Professional testing for air quality, water purity, EMF exposure, and more.',
    keywords: 'home health assessment, environmental testing, air quality testing, water quality analysis, EMF testing, building biology, healthy home, environmental health',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/'
  },
  about: {
    title: 'About Sanctum - Our Mission to Engineer Healthier Homes',
    description: 'Learn about Sanctum\'s journey from personal health challenges to professional environmental diagnostics. Discover our scientific approach to creating healthier living environments.',
    keywords: 'about sanctum, environmental health company, building biology experts, home health specialists, environmental testing professionals',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/about'
  },
  atmosphericPurity: {
    title: 'Atmospheric Purity Diagnostic - Professional Air Quality Testing | Sanctum',
    description: 'Comprehensive indoor air quality analysis including particulates, VOCs, formaldehyde, and allergens. Professional-grade testing to optimise the air you breathe at home.',
    keywords: 'air quality testing, indoor air pollution, VOC testing, formaldehyde testing, particulate matter, atmospheric purity, air quality assessment',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/atmospheric-purity-diagnostic'
  },
  hydrationIntegrity: {
    title: 'Hydration Integrity Diagnostic - Professional Water Quality Testing | Sanctum',
    description: 'Advanced water quality analysis covering contaminants, heavy metals, pH levels, and microbial safety. Ensure pure, safe hydration for your family.',
    keywords: 'water quality testing, water contamination, heavy metals testing, water purity analysis, hydration integrity, water safety assessment',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/hydration-integrity-diagnostic'
  },
  electromagneticHygiene: {
    title: 'Electromagnetic Hygiene Diagnostic - Professional EMF Testing | Sanctum',
    description: 'Comprehensive EMF assessment mapping radiofrequency radiation, dirty electricity, and magnetic fields. Reduce electromagnetic exposure in your home.',
    keywords: 'EMF testing, electromagnetic field assessment, radiofrequency radiation, dirty electricity, EMF exposure, electromagnetic hygiene',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/electromagnetic-hygiene-diagnostic'
  },
  circadianAlignment: {
    title: 'Circadian Alignment Diagnostic - Light Environment Optimisation | Sanctum',
    description: 'Professional light spectrum analysis and circadian rhythm optimisation. Restore natural sleep-wake cycles through strategic lighting assessment.',
    keywords: 'circadian rhythm, light therapy, blue light exposure, circadian alignment, sleep optimisation, light spectrum analysis',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/circadian-alignment-diagnostic'
  },
  materialToxicity: {
    title: 'Material Toxicity Diagnostic - Chemical Safety Assessment | Sanctum',
    description: 'Advanced chemical analysis of building materials and household products. Identify and eliminate toxic compounds and off-gassing in your home.',
    keywords: 'material toxicity, chemical testing, off-gassing assessment, toxic materials, building material safety, chemical exposure',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/material-toxicity-diagnostic'
  },
  sampleReport: {
    title: 'Sample Sanctum Report - See Our Comprehensive Health Assessment | Sanctum',
    description: 'Explore a detailed sample of our comprehensive home health report. See how we translate complex environmental data into actionable health insights.',
    keywords: 'sanctum report, home health report, environmental assessment report, health diagnostic report, sample report',
    canonical: 'https://sanctum-premium-home-ajvx.bolt.host/sample-report'
  }
};