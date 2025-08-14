import React from 'react';
import HeroSection from '@/components/hero-section';
import FeaturesSection from '@/components/features-section';
import HowItWorksSection from '@/components/how-it-works-section';
import AudioShowcase from '@/components/audio-showcase';
import CTASection from '@/components/cta-section';
import Footer from '@/components/footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <AudioShowcase />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
