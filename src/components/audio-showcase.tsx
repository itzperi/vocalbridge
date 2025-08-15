import React from 'react';
import AudioPlayer from './ui/audio-player';
import { Languages, Mic2, Activity } from 'lucide-react';

const AudioShowcase = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tamil & English Voice Showcase</span>
          </div>
          
          <h2 className="text-title mb-6">
            Experience Our <span className="gradient-text">Multilingual Voice Technology</span>
          </h2>
          
          <p className="text-subtitle text-muted-foreground max-w-2xl mx-auto">
            Listen to our cutting-edge AI voice technology in action. Featuring Tamil language support 
            and advanced voice agent capabilities that demonstrate natural quality and linguistic precision.
          </p>
        </div>

        {/* Audio Players Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="slide-up">
            <AudioPlayer
              src="/lovable-uploads/Tamil (1).mp3" 
              title="Tamil Voice Sample"
              language="Tamil (தமிழ்)"
              className="h-full"
            />
          </div>
          
          <div className="slide-up stagger-1">
            <AudioPlayer
              src="/lovable-uploads/Voiceagent.mp3" 
              title="AI Voice Agent"
              language="English"
              className="h-full"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-effect p-8 rounded-xl text-center group hover:shadow-glow transition-all duration-500 slide-up">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Languages className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Multilingual Mastery</h3>
            <p className="text-muted-foreground">
              Our AI understands cultural nuances and linguistic patterns across 50+ languages, 
              delivering authentic communication in every interaction.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-xl text-center group hover:shadow-glow transition-all duration-500 slide-up stagger-1">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Mic2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Natural Voice Quality</h3>
            <p className="text-muted-foreground">
              Advanced neural networks create voices indistinguishable from human speech, 
              with proper intonation, emotion, and clarity.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-xl text-center group hover:shadow-glow transition-all duration-500 slide-up stagger-2">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
            <p className="text-muted-foreground">
              Lightning-fast voice generation with sub-100ms latency ensures seamless 
              conversations and immediate response times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioShowcase;