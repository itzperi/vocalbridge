import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/5d697393-1ae4-4e20-9958-98a26d5ef919.png" 
                alt="Vocal Bridge Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">VOCAL BRIDGE</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors font-medium tracking-wide">HOME</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors font-medium tracking-wide">WHY CHOOSE US</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors font-medium tracking-wide">SERVICES</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors font-medium tracking-wide">TEAM</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors font-medium tracking-wide">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Hero Layout - Matching reference design */}
      <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
        {/* Left Side - Large Text Section */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Main Content */}
          <div className="relative bg-primary/95 flex flex-col justify-center px-8 lg:px-16">
            {/* Large Bold Text */}
            <div className="relative z-10">
              <h1 className="text-8xl lg:text-9xl font-black text-white leading-none mb-8 tracking-tight">
                VOICE
                <br />
                <span className="block text-6xl lg:text-7xl">with</span>
                <span className="block text-white/90">AI</span>
              </h1>
              
              <div className="max-w-md">
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Delivering quality craftsmanship, on time 
                  and with integrity — from foundation to finish.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Background Tech Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 right-10 w-32 h-32 border border-white/30 rotate-12" />
              <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-white/20 rotate-45" />
            </div>
          </div>

          {/* Right Column - Split Sections */}
          <div className="relative bg-secondary flex flex-col">
            {/* Top Right - Team Section */}
            <div className="flex-1 relative bg-gradient-to-br from-secondary to-secondary/80 p-8 lg:p-12">
              <div className="absolute top-8 right-8">
                <h2 className="text-white text-4xl lg:text-5xl font-black tracking-wider">
                  OUR TEAM
                </h2>
              </div>
              
              {/* Team Images Grid */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4">
                  <div className="aspect-square bg-white/10 rounded-lg" />
                  <div className="aspect-square bg-white/10 rounded-lg" />
                  <div className="aspect-square bg-white/10 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Large Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h3 className="text-[12rem] lg:text-[16rem] font-black text-white/10 leading-none tracking-tighter">
                DEEPER
              </h3>
            </div>

            {/* Bottom Right - Services Grid */}
            <div className="flex-1 grid grid-cols-2 gap-px bg-white/10">
              <div className="bg-secondary p-6 flex flex-col justify-between">
                <h4 className="text-white font-bold text-sm tracking-wider mb-2">SERVICES</h4>
                <div className="text-white/70 text-xs leading-relaxed">
                  We offer a comprehensive range of services designed to meet your unique needs and bring your vision to life.
                </div>
              </div>
              
              <div className="bg-secondary/80 p-6 flex flex-col justify-between">
                <h4 className="text-white font-bold text-sm tracking-wider mb-2">MANAGEMENT</h4>
                <div className="aspect-square bg-white/10 rounded" />
              </div>
              
              <div className="bg-secondary/90 p-6 flex flex-col justify-between">
                <h4 className="text-white font-bold text-sm tracking-wider mb-2">OVATIONS</h4>
                <div className="aspect-video bg-white/10 rounded" />
              </div>
              
              <div className="bg-secondary p-6 flex flex-col justify-between">
                <h4 className="text-white font-bold text-sm tracking-wider mb-2">GENERAL CONTRACTING</h4>
                <div className="aspect-square bg-white/10 rounded" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Commitment */}
        <div className="absolute bottom-0 left-0 right-0 bg-secondary/95 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl lg:text-3xl font-black mb-4 leading-tight">
                OUR COMMITMENT TO
                <br />
                QUALITY, SAFETY, AND
                <br />
                <span className="text-primary">LONG-TERM VALUE</span>
              </h3>
            </div>
            
            <div className="text-white/80 text-sm leading-relaxed">
              At the heart of every project we take on is a dedication to delivering
              exceptional quality. We don't just build structures — we build trust,
              reliability, and partnerships that stand the test of time.
            </div>

            <div className="text-[8rem] lg:text-[12rem] font-black text-white/10 leading-none text-center">
              ABOUT
              <br />
              US
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;