import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Animation variants for feature cards
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section id="home" className="relative overflow-hidden padd">
      <div className="bg-gradient-to-r from-arihant-primary/10 to-arihant-light/10 py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <motion.h1
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-arihant-secondary leading-tight"
              >
                Welcome to <br />
                <span className="text-arihant-primary">Arihant Finance Solution</span>
              </motion.h1>
              <motion.h2
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-xl md:text-2xl font-medium text-gray-700"
              >
                Your Trusted Financial Growth Partner
              </motion.h2>
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-600 md:text-lg max-w-2xl mx-auto lg:mx-0"
              >
                At Arihant Finance Solution, we are more than a service provider—we are your dedicated partner in financial progress. We bring you dependable, efficient, and expertly crafted financial services.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    onClick={scrollToContact}
                    className="bg-arihant-primary hover:bg-arihant-secondary text-white font-medium px-8 py-6"
                  >
                    Contact Us
                  </Button>
                </motion.div>
                <motion.div
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="border-arihant-primary text-arihant-primary hover:bg-arihant-primary/10 px-8 py-6"
                  >
                    Explore Our Services
                  </Button>
                </motion.div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-arihant-light/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-arihant-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-arihant-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <img
                    src="./assets/logo.png"
                    alt="Arihant Finance Solution"
                    className="w-full p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="section-title text-center"
          >
            Why Choose Us?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              " End-to-End Financial Services under one roof",
              " Decades of Combined Experience in finance, compliance, and operations",
              " Ethical and Transparent business practices",
              " Strong Network with top financial institutions and banks",
              " On-Site Personalized Support for accurate and reliable service",
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={featureVariants}
                initial="hidden"
                animate="visible"
                className="bg-arihant-gray p-4 rounded-lg"
              >
                <p className="font-medium text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center mt-8 text-gray-700 italic"
          >
            Let us take care of the numbers so you can focus on what matters—growing your business and securing your future.
          </motion.p>
        </div>
      </div>
    </section>
  );
};