import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Brain, Network, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const TechnologySection = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced Neural Architecture",
      description: "State-of-the-art transformer models trained on massive multilingual datasets for unparalleled voice quality."
    },
    {
      icon: Network,
      title: "Real-time Processing Engine",
      description: "Optimized inference pipeline delivering sub-100ms response times for seamless voice interactions."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption and privacy-first design ensuring your voice data remains secure."
    },
    {
      icon: Zap,
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture supporting millions of concurrent voice agent conversations."
    }
  ];

  const capabilities = [
    "Natural language understanding in 50+ languages",
    "Emotion-aware voice synthesis",
    "Context-preserving conversations",
    "Real-time language switching",
    "Custom voice cloning capabilities",
    "Industry-specific terminology support"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cutting-Edge Technology</span>
          </div>
          
          <h2 className="text-title mb-6">
            Powered by <span className="gradient-text">Next-Generation AI</span>
          </h2>
          
          <p className="text-subtitle text-muted-foreground max-w-3xl mx-auto">
            Our revolutionary voice technology combines advanced machine learning, 
            neural speech synthesis, and linguistic intelligence to create the most 
            natural and responsive AI voice agents available.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 glass-effect border-primary/20 hover:shadow-glow transition-all duration-500 slide-up group" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h3 className="text-2xl font-semibold mb-6">Core Capabilities</h3>
            <div className="space-y-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{capability}</span>
                </div>
              ))}
            </div>
            <Button variant="hero" className="mt-8 group">
              Explore Technical Documentation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="slide-up stagger-2">
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20" />
              
              {/* Main content card */}
              <Card className="relative glass-effect p-8 border-primary/30">
                <h4 className="text-xl font-semibold mb-4">Performance Metrics</h4>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Voice Quality Score</span>
                      <span className="text-sm font-semibold">99.7%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '99.7%'}} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Response Latency</span>
                      <span className="text-sm font-semibold">Sub-100ms</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '95%'}} />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Language Accuracy</span>
                      <span className="text-sm font-semibold">99.9%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full" style={{width: '99.9%'}} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;