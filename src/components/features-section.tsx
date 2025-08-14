import React from 'react';
import { Globe, MessageCircle, Building } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Support for 50+ languages with natural voice synthesis and real-time translation capabilities."
    },
    {
      icon: MessageCircle,
      title: "Seamless AI Conversations",
      description: "Advanced AI that understands context, intent, and nuance for natural conversation flow."
    },
    {
      icon: Building,
      title: "Enterprise Ready",
      description: "Scalable infrastructure with enterprise security, compliance, and custom integration support."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-title mb-4">
            Powerful Features for
            <span className="gradient-text"> Global Communication</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our cutting-edge AI voice technology delivers exceptional results across languages and industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center group slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;