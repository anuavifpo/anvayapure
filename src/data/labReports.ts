export interface LabTest {
  parameter: string;
  result: string;
  standard: string;
  status: 'pass' | 'info';
}

export interface LabReport {
  id: string;
  productId: string;
  productName: string;
  batchNumber: string;
  testDate: string;
  laboratory: string;
  certificateNumber: string;
  tests: LabTest[];
  pdfUrl: string;
}

export const labReports: LabReport[] = [
  {
    id: "lab-001",
    productId: "1",
    productName: "A2 Desi Ghee",
    batchNumber: "GHEE-2024-001",
    testDate: "2024-01-15",
    laboratory: "SGS India Pvt. Ltd.",
    certificateNumber: "SGS/IND/2024/GH001",
    tests: [
      { parameter: "A1 Beta Casein", result: "Not Detected", standard: "Should be Absent", status: "pass" },
      { parameter: "A2 Beta Casein", result: "Detected", standard: "Should be Present", status: "pass" },
      { parameter: "Moisture Content", result: "0.12%", standard: "Max 0.5%", status: "pass" },
      { parameter: "Fat Content", result: "99.8%", standard: "Min 99%", status: "pass" },
      { parameter: "Peroxide Value", result: "0.8 meq/kg", standard: "Max 3 meq/kg", status: "pass" },
      { parameter: "Acid Value", result: "0.4 mg KOH/g", standard: "Max 1.0 mg KOH/g", status: "pass" },
      { parameter: "Adulterants", result: "Not Detected", standard: "Should be Absent", status: "pass" },
      { parameter: "Heavy Metals", result: "Below Detection Limit", standard: "As per FSSAI", status: "pass" },
    ],
    pdfUrl: "/reports/ghee-lab-report.pdf"
  },
  {
    id: "lab-002",
    productId: "2",
    productName: "Cold-Pressed Groundnut Oil",
    batchNumber: "OIL-GN-2024-001",
    testDate: "2024-01-10",
    laboratory: "SGS India Pvt. Ltd.",
    certificateNumber: "SGS/IND/2024/OIL002",
    tests: [
      { parameter: "Free Fatty Acid", result: "0.8%", standard: "Max 1.5%", status: "pass" },
      { parameter: "Peroxide Value", result: "3.2 meq/kg", standard: "Max 10 meq/kg", status: "pass" },
      { parameter: "Iodine Value", result: "92", standard: "86-107", status: "pass" },
      { parameter: "Saponification Value", result: "189", standard: "188-196", status: "pass" },
      { parameter: "Aflatoxin B1", result: "Not Detected", standard: "Max 5 ppb", status: "pass" },
      { parameter: "Heavy Metals", result: "Below Detection Limit", standard: "As per FSSAI", status: "pass" },
    ],
    pdfUrl: "/reports/groundnut-oil-lab-report.pdf"
  },
  {
    id: "lab-003",
    productId: "3",
    productName: "Cold-Pressed Mustard Oil",
    batchNumber: "OIL-MUS-2024-001",
    testDate: "2024-01-12",
    laboratory: "SGS India Pvt. Ltd.",
    certificateNumber: "SGS/IND/2024/OIL003",
    tests: [
      { parameter: "Free Fatty Acid", result: "0.6%", standard: "Max 2.0%", status: "pass" },
      { parameter: "Erucic Acid", result: "42%", standard: "Max 50%", status: "pass" },
      { parameter: "Allyl Isothiocyanate", result: "0.7%", standard: "Min 0.5%", status: "pass" },
      { parameter: "Argemone Oil", result: "Not Detected", standard: "Should be Absent", status: "pass" },
      { parameter: "Heavy Metals", result: "Below Detection Limit", standard: "As per FSSAI", status: "pass" },
    ],
    pdfUrl: "/reports/mustard-oil-lab-report.pdf"
  }
];

export const getLabReportById = (id: string): LabReport | undefined => {
  return labReports.find(r => r.id === id);
};

export const getLabReportByProductId = (productId: string): LabReport | undefined => {
  return labReports.find(r => r.productId === productId);
};
