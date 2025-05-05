
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const ahmedabadOffice1 = {
    name: "Ahmedabad Office 1",
    address: "202, Vrajendra Complex, Opp. Naranpura Post Office, Naranpura, Ahmedabad-380013"
  };

  const ahmedabadOffice2 = {
    name: "Ahmedabad Office 2",
    address: "5th Floor, Anand I Pride, Beside Dwarkesh Business Hub, Visat to Tapovan Circle Road, Motera, Ahmedabad-382424"
  };

  return (
    <section id="contact" className="section-padding bg-arihant-gray/50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Contact Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Office Locations */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-arihant-secondary mb-4">📍 {ahmedabadOffice1.name}</h3>
                <p className="text-gray-700">{ahmedabadOffice1.address}</p>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="text-arihant-primary border-arihant-primary">
                    <a 
                      href={`https://www.google.com/maps/search/${encodeURIComponent(ahmedabadOffice1.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Map
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-arihant-secondary mb-4">📍 {ahmedabadOffice2.name}</h3>
                <p className="text-gray-700">{ahmedabadOffice2.address}</p>
                <div className="mt-4 flex justify-end">
                  <Button variant="outline" className="text-arihant-primary border-arihant-primary">
                    <a 
                      href={`https://www.google.com/maps/search/${encodeURIComponent(ahmedabadOffice2.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Map
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information and Form */}
          <div>
            <Card className="h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="space-y-6 mb-6">
                  <h3 className="text-xl font-semibold text-arihant-secondary">Get in Touch</h3>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-arihant-primary">📧</span>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:Rushabh@arihantfin.com" 
                        className="text-arihant-primary hover:underline"
                      >
                        Rushabh@arihantfin.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-arihant-primary">📞</span>
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href="tel:+919825039289" 
                        className="text-arihant-primary hover:underline"
                      >
                        +91 9825039289
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
