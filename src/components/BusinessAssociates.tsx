import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const BusinessAssociates = () => {
  const associates = [
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "SIDBI (Small Industries Development Bank of India)",
    "All Nationalized Banks",
    "Leading Non-Banking Financial Companies (NBFCs)"
  ];

  return (
    <section id="associates" className="p-4 sm:p-8 bg-arihant-gray/50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Business Associates</h2>
        
        <div className="max-w-3xl mx-auto mt-4 sm:mt-8 text-center">
          <p className="text-gray-700">
            We proudly collaborate with some of the most respected names in the banking and financial sector. 
            These partnerships enable us to deliver faster, more reliable, and better-informed services.
          </p>
        </div>
        
        <div className="mt-6 sm:mt-12 max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="pt-4 sm:pt-8 pb-4 sm:pb-8">
              <h3 className="text-xl font-semibold text-arihant-secondary mb-4 sm:mb-6 text-center">
                Our Associate Network Includes:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
                {/* Associate 1 */}
                <div className="bg-white border border-gray-200 rounded-md p-2 sm:p-4 text-center shadow-sm hover:border-arihant-primary hover:shadow-md transition-all">
                  <img
                    src="./assets/hdfc.jpeg"
                    alt="HDFC Bank Icon"
                    className="w-8 h-8 mx-auto mb-2 object-contain"
                  />
                  <p className="font-medium text-gray-700">HDFC Bank</p>
                </div>

                {/* Associate 2 */}
                <div className="bg-white border border-gray-200 rounded-md p-2 sm:p-4 text-center shadow-sm hover:border-arihant-primary hover:shadow-md transition-all">
                  <img
                    src="./assets/icici.png"
                    alt="ICICI Bank Icon"
                    className="w-8 h-8 mx-auto mb-2 object-contain"
                  />
                  <p className="font-medium text-gray-700">ICICI Bank</p>
                </div>

                {/* Associate 3 */}
                <div className="bg-white border border-gray-200 rounded-md p-2 sm:p-4 text-center shadow-sm hover:border-arihant-primary hover:shadow-md transition-all">
                  <img
                    src="./assets/axis.png"
                    alt="Axis Bank Icon"
                    className="w-8 h-8 mx-auto mb-2 object-contain"
                  />
                  <p className="font-medium text-gray-700">Axis Bank</p>
                </div>

                {/* Associate 4 */}
                <div className="bg-white border border-gray-200 rounded-md p-2 sm:p-4 flex items-center justify-center shadow-sm hover:border-arihant-primary hover:shadow-md transition-all">
                  <p className="font-medium text-gray-700">SIDBI (Small Industries Development Bank of India)</p>
                </div>

                {/* Associate 5 */}
                <div className="bg-white border border-gray-200 rounded-md p-2 sm:p-4 flex items-center justify-center shadow-sm hover:border-arihant-primary hover:shadow-md transition-all">
                  <p className="font-medium text-gray-700">All Nationalized Banks</p>
                </div>

                {/* Associate 6 */}
                <div className="bg-white border border-gray-200 rounded-md p-2 sm:p-4 flex items-center justify-center shadow-sm hover:border-arihant-primary hover:shadow-md transition-all">
                  <p className="font-medium text-gray-700">Leading Non-Banking Financial Companies (NBFCs)</p>
                </div>
              </div>

              <p className="text-gray-700 mt-4 sm:mt-8 text-center">
                These strategic alliances allow us to secure the best possible financial products and services for our clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};