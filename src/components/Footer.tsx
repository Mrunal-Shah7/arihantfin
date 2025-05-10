
import React from "react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-arihant-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="./public/logo.png" 
                alt="Arihant Finance Solution Logo" 
                className="h-12 bg-white p-1 rounded-md"
              />
            </div>
            <p className="text-sm text-gray-200 mt-4">
              Your trusted financial growth partner, providing end-to-end financial services under one roof.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-gray-200 hover:text-white transition-colors"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="text-gray-200 hover:text-white transition-colors"
                  onClick={() => scrollToSection("services")}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  className="text-gray-200 hover:text-white transition-colors"
                  onClick={() => scrollToSection("about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  className="text-gray-200 hover:text-white transition-colors"
                  onClick={() => scrollToSection("careers")}
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <a href="tel:+919825039289" className="text-gray-200 hover:text-white transition-colors">
                  +91 9825039289
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📧</span>
                <a href="mailto:Rushabh@arihantfin.com" className="text-gray-200 hover:text-white transition-colors">
                  Rushabh@arihantfin.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Offices</h3>
            <p className="text-sm text-gray-200">
              Naranpura, Ahmedabad-380013
            </p>
            <p className="text-sm text-gray-200 mt-2">
              Motera, Ahmedabad-382424
            </p>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Arihant Finance Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
