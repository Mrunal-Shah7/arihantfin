
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Careers = () => {
  const openings = [
    "Back Office Operations",
    "Accountants",
    "Marketing Executives"
  ];

  return (
    <section id="careers" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Careers</h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="shadow-lg">
            <CardHeader className="bg-arihant-primary text-white rounded-t-lg">
              <CardTitle className="text-center">Join Our Team</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <p className="text-gray-700 text-center">
                Looking to build a career in finance? Arihant Finance Solution is the perfect place for 
                aspiring professionals to learn, grow, and make a meaningful impact.
              </p>
              
              <div>
                <h3 className="font-semibold text-arihant-secondary text-xl mb-4 text-center">
                  📌 Current Openings:
                </h3>
                <ul className="list-disc list-inside space-y-2 max-w-md mx-auto">
                  {openings.map((opening, index) => (
                    <li key={index} className="text-gray-700">{opening}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-arihant-gray/50 p-6 rounded-lg text-center space-y-2">
                <p className="font-medium text-gray-700">📧 Email Your Resume: <a href="mailto:Rushabh@arihantfin.com" className="text-arihant-primary hover:underline">Rushabh@arihantfin.com</a></p>
                <p className="font-medium text-gray-700">📞 Call Us: <a href="tel:+919825039289" className="text-arihant-primary hover:underline">+91 9825039289</a></p>
              </div>
              
              <div className="flex justify-center">
                <Button className="bg-arihant-primary hover:bg-arihant-secondary">
                  <a href="mailto:Rushabh@arihantfin.com">Apply Now</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
