import React from 'react';
import { Separator } from './ui/separator';
import { Globe, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary/95 border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/5d697393-1ae4-4e20-9958-98a26d5ef919.png" 
                alt="Vocal Bridge Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-semibold text-white">Vocal Bridge</span>
            </div>
            <p className="text-white/90 mb-4 max-w-md">
              Leading the future of AI voice technology with multilingual voice agents 
              that bridge communication gaps across languages and cultures.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Mail className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Voice Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Multilingual AI</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Enterprise Integration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:vocalbridgeai@gmail.com" className="hover:text-white transition-colors">vocalbridgeai@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href="tel:+919444420367" className="hover:text-white transition-colors">+919444420367</a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <div className="flex flex-col md:flex-row gap-4">
            <p>© 2024 Vocal Bridge. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-white" />
            <span>Available in 50+ languages</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;