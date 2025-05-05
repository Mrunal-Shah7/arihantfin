import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavBarProps {
  activeSection: string;
}

export const NavBar = ({ activeSection }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
    { id: "associates", label: "Business Associates" },
    { id: "careers", label: "Careers" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#home" className="flex items-center" onClick={() => scrollToSection("home")}>
            <img src="https://github.com/Mrunal-Shah7/arihantfin/blob/main/public/logo.png?raw=true" alt="Arihant Finance Solution" className="h-12" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "text-arihant-primary"
                  : "text-gray-600 hover:text-arihant-primary"
              )}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <Button
          variant="ghost"
          className="md:hidden hover:scale-110 active:scale-95 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              "h-6 w-6 transition-all duration-300",
              isMenuOpen ? "text-arihant-primary" : "text-gray-600 hover:text-arihant-primary",
              "hamburger-icon"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <>
                <path
                  className="hamburger-line hamburger-line-1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6"
                />
                <path
                  className="hamburger-line hamburger-line-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 6l12 12"
                />
              </>
            ) : (
              <>
                <path
                  className="hamburger-line hamburger-line-1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16"
                />
                <path
                  className="hamburger-line hamburger-line-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 12h16"
                />
                <path
                  className="hamburger-line hamburger-line-3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 18h16"
                />
              </>
            )}
          </svg>
        </Button>

        <style jsx>{`
          .hamburger-icon .hamburger-line {
            transition: all 0.3s ease;
          }

          /* Hamburger to X animation */
          .hamburger-icon .hamburger-line-1 {
            transform-origin: center;
          }
          .hamburger-icon .hamburger-line-2 {
            transform-origin: center;
          }
          .hamburger-icon .hamburger-line-3 {
            opacity: 1;
          }

          /* When menu is open, animate to X */
          .hamburger-icon:has(.hamburger-line-1[d="M6 18L18 6"]) .hamburger-line-1 {
            transform: rotate(45deg);
          }
          .hamburger-icon:has(.hamburger-line-2[d="M6 6l12 12"]) .hamburger-line-2 {
            transform: rotate(-45deg);
          }
          .hamburger-icon:has(.hamburger-line-1[d="M6 18L18 6"]) .hamburger-line-3 {
            opacity: 0;
          }

          /* When menu is closed, animate back to hamburger */
          .hamburger-icon:has(.hamburger-line-1[d="M4 6h16"]) .hamburger-line-1 {
            transform: rotate(0deg);
          }
          .hamburger-icon:has(.hamburger-line-2[d="M4 12h16"]) .hamburger-line-2 {
            transform: rotate(0deg);
          }
        `}</style>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-3 sm:px-4 py-1 sm:py-2 shadow-lg">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start px-3 py-2 text-sm font-medium my-0.5 sm:my-1 transition-colors text-left",
                activeSection === item.id
                  ? "text-arihant-primary"
                  : "text-gray-600 hover:text-arihant-primary"
              )}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      )}
    </header>
  );
};