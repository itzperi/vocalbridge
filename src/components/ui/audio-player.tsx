import React, { useState, useRef, useEffect } from 'react';
import { Button } from './button';
import { Play, Pause, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AudioPlayerProps {
  src: string;
  title: string;
  language: string;
  className?: string;
}

const AudioPlayer = ({ src, title, language, className }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;
    
    setIsLoading(true);
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Audio playback error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className={cn(
      "glass-effect rounded-xl p-6 group hover:shadow-glow transition-all duration-500",
      className
    )}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{language}</p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          disabled={isLoading}
          className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5 text-primary ml-0.5" />
          )}
        </Button>
      </div>

      {/* Audio Visualizer Bars */}
      <div className="flex items-center gap-1 mb-4 h-8">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "w-1 bg-primary/30 rounded-full transition-all duration-300",
              isPlaying ? "audio-bar" : "h-2",
              isPlaying && `h-${Math.floor(Math.random() * 6) + 2}`
            )}
            style={{
              animationDelay: `${i * 0.1}s`,
              height: isPlaying ? `${Math.random() * 20 + 10}px` : '8px'
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span>{formatTime(currentTime)}</span>
        <div className="flex-1 bg-muted rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-gradient-primary transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <span>{formatTime(duration)}</span>
        <Volume2 className="w-4 h-4" />
      </div>
    </div>
  );
};

export default AudioPlayer;