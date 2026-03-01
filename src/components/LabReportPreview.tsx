import { Link } from "react-router-dom";
import { FileCheck, ExternalLink } from "lucide-react";
import { type LabReport } from "@/data/labReports";

interface LabReportPreviewProps {
  report: LabReport;
  variant?: "default" | "compact";
}

const LabReportPreview = ({ report, variant = "default" }: LabReportPreviewProps) => {
  const passedTests = report.tests.filter(t => t.status === 'pass').length;

  if (variant === "compact") {
    return (
      <Link
        to={`/lab-reports#${report.id}`}
        className="flex items-center gap-3 p-3 rounded-lg bg-sage/10 hover:bg-sage/20 transition-colors"
      >
        <FileCheck className="w-5 h-5 text-sage-dark" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            Lab Report Available
          </p>
          <p className="text-xs text-muted-foreground">
            Batch: {report.batchNumber}
          </p>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground" />
      </Link>
    );
  }

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="bg-sage/10 px-5 py-4">
        <div className="flex items-center gap-3">
          <FileCheck className="w-6 h-6 text-sage-dark" />
          <div>
            <h4 className="font-serif text-lg text-foreground">{report.productName}</h4>
            <p className="text-sm text-muted-foreground">Batch: {report.batchNumber}</p>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="grid grid-cols-2 gap-4 mb-5 text-sm">
          <div>
            <span className="text-muted-foreground">Test Date:</span>
            <span className="ml-2 text-foreground">{report.testDate}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Laboratory:</span>
            <span className="ml-2 text-foreground">{report.laboratory}</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-sage" />
            <span className="text-sm font-medium text-foreground">
              {passedTests}/{report.tests.length} Tests Passed
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Certificate: {report.certificateNumber}
          </span>
        </div>

        <Link
          to={`/lab-reports#${report.id}`}
          className="btn-secondary w-full text-center"
        >
          View Full Report
        </Link>
      </div>
    </div>
  );
};

export default LabReportPreview;
