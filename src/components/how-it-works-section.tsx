import React from 'react';
import { Mic, Brain, Volume2, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Mic,
      title: "Voice Input",
      description: "Capture audio input in any supported language with advanced noise cancellation and clarity optimization."
    },
    {
      number: "02", 
      icon: Brain,
      title: "AI Processing",
      description: "Our neural networks process speech patterns, context, and intent with millisecond response times."
    },
    {
      number: "03",
      icon: Volume2,
      title: "Voice Output",
      description: "Generate natural, human-like responses in the target language with perfect pronunciation and intonation."
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Continuous Learning",
      description: "Self-improving algorithms learn from each interaction to enhance accuracy and personalization."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-title mb-4">
            How Our
            <span className="gradient-text"> AI Voice Technology</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A seamless four-step process that transforms multilingual communication with cutting-edge AI.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group slide-up" style={{animationDelay: `${index * 0.15}s`}}>
                {/* Step Number */}
                <div className="text-6xl font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-border/50 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;