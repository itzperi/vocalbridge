import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, GlobalTech Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5b8?w=400&h=400&fit=crop&crop=face",
      quote: "Vocal Bridge transformed our customer support. The multilingual capabilities are incredible - our international clients feel truly heard.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "VP Operations, International Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      quote: "The AI voice quality is indistinguishable from human speech. Implementation was seamless, and ROI was immediate.",
      rating: 5
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Innovation, MedTech Inc",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      quote: "Vocal Bridge's enterprise features give us the security and scalability we need. The technology is simply groundbreaking.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-title mb-4">
            Trusted by
            <span className="gradient-text"> Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about transforming their global communication with Vocal Bridge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border/50 slide-up hover:shadow-elegant transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Rating Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({length: testimonial.rating}).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;