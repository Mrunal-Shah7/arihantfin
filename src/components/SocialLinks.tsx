
import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", ariaLabel: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", ariaLabel: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", ariaLabel: "Facebook" },
    { icon: <Linkedin size={20} />, href: "#", ariaLabel: "LinkedIn" },
    { icon: <Github size={20} />, href: "#", ariaLabel: "GitHub" },
  ];

  return (
    <div 
      className="flex justify-center space-x-6 mt-12 opacity-0 animate-fade-in"
      style={{ animationDelay: '0.8s' }}
    >
    </div>
  );
};

export default SocialLinks;
