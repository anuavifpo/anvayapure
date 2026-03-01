import { Link } from "react-router-dom";
import { ChevronRight, FileCheck, Download, Search, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { labReports } from "@/data/labReports";

const LabReports = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <nav className="container-wide py-4 border-b border-border">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-foreground">Lab Reports</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <span className="inline-block text-caption uppercase tracking-widest text-primary mb-4">
            Trust & Verification
          </span>
          <h1 className="font-serif text-display-sm md:text-display text-foreground mb-6">
            Lab Reports
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            We believe transparency builds trust. Every batch of our products is tested 
            at NABL-accredited laboratories, and we publish the complete results here.
          </p>
        </div>
      </section>

      {/* Search by Batch */}
      <section className="pb-12">
        <div className="container-narrow">
          <div className="bg-muted rounded-xl p-6 md:p-8">
            <h2 className="font-serif text-xl text-foreground mb-4 text-center">
              Find Your Batch Report
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Enter the batch number from your product label to view its specific lab report.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="e.g., GHEE-2024-001"
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Testing Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-12 text-center">
            Our Testing Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Sample Collection",
                description: "Samples from every production batch are collected and documented."
              },
              {
                step: "02",
                title: "Lab Submission",
                description: "Samples sent to NABL-accredited third-party laboratories."
              },
              {
                step: "03",
                title: "Comprehensive Testing",
                description: "Tests for purity, adulteration, nutritional content, and safety."
              },
              {
                step: "04",
                title: "Report Publication",
                description: "All results published online for complete transparency."
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-xl text-sage-dark">{item.step}</span>
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Reports List */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="font-serif text-heading text-foreground mb-8">
            Recent Lab Reports
          </h2>

          <div className="space-y-8">
            {labReports.map((report) => (
              <div
                key={report.id}
                id={report.id}
                className="border border-border rounded-xl overflow-hidden scroll-mt-24"
              >
                {/* Report Header */}
                <div className="bg-sage/10 px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center">
                      <FileCheck className="w-6 h-6 text-sage-dark" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-foreground">{report.productName}</h3>
                      <p className="text-sm text-muted-foreground">
                        Batch: {report.batchNumber} • Tested: {report.testDate}
                      </p>
                    </div>
                  </div>
                  <button className="btn-secondary flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>

                {/* Report Details */}
                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-sm text-muted-foreground">Testing Laboratory</p>
                      <p className="text-foreground font-medium">{report.laboratory}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Certificate Number</p>
                      <p className="text-foreground font-medium">{report.certificateNumber}</p>
                    </div>
                  </div>

                  {/* Test Results Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 text-sm font-medium text-muted-foreground">Parameter</th>
                          <th className="text-left py-3 text-sm font-medium text-muted-foreground">Result</th>
                          <th className="text-left py-3 text-sm font-medium text-muted-foreground">Standard</th>
                          <th className="text-center py-3 text-sm font-medium text-muted-foreground">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {report.tests.map((test, index) => (
                          <tr key={index} className="border-b border-border/50">
                            <td className="py-3 text-sm text-foreground">{test.parameter}</td>
                            <td className="py-3 text-sm font-medium text-foreground">{test.result}</td>
                            <td className="py-3 text-sm text-muted-foreground">{test.standard}</td>
                            <td className="py-3 text-center">
                              <span className="inline-flex items-center gap-1 text-sm text-sage-dark font-medium">
                                <Check className="w-4 h-4" />
                                Pass
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 p-4 rounded-lg bg-sage/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      All {report.tests.length} tests passed. This batch meets all quality standards.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Test */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-wide">
          <h2 className="font-serif text-heading md:text-display-sm mb-12 text-center">
            What We Test For
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "A1/A2 Protein Content",
                description: "We verify that our ghee contains only A2 beta-casein protein from indigenous cow breeds."
              },
              {
                title: "Purity & Adulteration",
                description: "Tests for presence of vegetable oils, animal fats, or any foreign substances."
              },
              {
                title: "Moisture Content",
                description: "Low moisture ensures longer shelf life and indicates proper cooking."
              },
              {
                title: "Fat Content & Acid Value",
                description: "High fat content and low acid value indicate freshness and quality."
              },
              {
                title: "Heavy Metals",
                description: "Tested for lead, arsenic, cadmium, and mercury to ensure safety."
              },
              {
                title: "Microbial Safety",
                description: "Tests for harmful bacteria and pathogens to ensure food safety."
              }
            ].map((item, index) => (
              <div key={index} className="p-6 border border-background/20 rounded-lg">
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-background/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Try Our Tested Products?"
        description="Experience the purity you can verify."
        primaryAction={{ label: "Shop Now", href: "/collections/ghee" }}
        secondaryAction={{ label: "Learn Our Process", href: "/our-process" }}
      />

      <Footer />
    </div>
  );
};

export default LabReports;
