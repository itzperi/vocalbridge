import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Mail, Phone, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-tech text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent/20 rounded-full floating-animation blur-2xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-primary/20 rounded-full floating-animation blur-2xl" style={{animationDelay: '3s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-title mb-6 slide-up">
            Ready to Transform Your
            <br />
            <span className="text-accent">Voice Experience?</span>
          </h2>
          
          <p className="text-subtitle opacity-90 mb-8 slide-up stagger-1">
            Join the next generation of businesses leveraging AI voice technology. 
            Experience the power of multilingual voice agents that understand, engage, 
            and deliver results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 slide-up stagger-2">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50">
              <Calendar className="w-4 h-4" />
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto slide-up stagger-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 text-sm">hello@vocalbridge.ai</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 text-sm">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Book Demo</h3>
              <p className="text-white/80 text-sm">30-minute consultation</p>
            </div>
          </div>

          {/* Investment Notice */}
          <div className="mt-16 p-6 bg-white/5 rounded-xl border border-white/20 slide-up stagger-4">
            <p className="text-white/90 font-medium mb-2">Investment Opportunity</p>
            <p className="text-white/70 text-sm">
              Vocal Bridge is actively seeking strategic investors and partners. 
              Join us in revolutionizing the future of AI voice technology.
            </p>
            <Button variant="outline" className="mt-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:border-white/50">
              Investor Information
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;