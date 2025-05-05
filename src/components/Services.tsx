
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const loanServices = [
    "Home Loans",
    "Mortgages",
    "Business Loans",
    "Loans Against Property (LAP)",
    "Loans Against Equity Shares",
    "Project Finance",
  ];

  const loanProcessingServices = [
    "Documentation and verification",
    "Credit profile assessments",
    "Liaison with financial institutions",
    "Loan disbursal coordination",
    "Compliance and regulatory support",
  ];

  const accountingServices = [
    "Bookkeeping & ledger management",
    "GST returns & filing",
    "Income Tax planning and compliance",
    "TDS management",
    "Profit & Loss Statements",
    "Balance Sheets and cash flow analysis",
  ];

  const advisoryServices = [
    "Investment planning",
    "Loan and credit structuring",
    "Business expansion strategy",
    "Budgeting and forecasting",
    "Financial risk evaluation",
  ];

  return (
    <section id="services" className="section-padding bg-arihant-gray/50">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Loan Processing Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-arihant-primary text-white rounded-t-lg">
              <CardTitle>Loan Processing & Back Office Operations</CardTitle>
              <CardDescription className="text-white/90">
                From document collection to final disbursement
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h4 className="font-semibold text-arihant-secondary mb-2">Retail Loans We Handle:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {loanServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-arihant-secondary mb-2">Services Include:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {loanProcessingServices.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
          
          {/* Accounting Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-arihant-primary text-white rounded-t-lg">
              <CardTitle>Accounting & Taxation</CardTitle>
              <CardDescription className="text-white/90">
                Clear, compliant, and accurate financial records
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-arihant-secondary mb-2">Our Expertise:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {accountingServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Financial Advisory Card */}
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-arihant-primary text-white rounded-t-lg">
              <CardTitle>Financial Advisory</CardTitle>
              <CardDescription className="text-arihant-white/90">
                Personalized, data-driven consulting
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <h4 className="font-semibold text-arihant-secondary mb-2">We Offer:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {advisoryServices.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
