import { AppLayout } from "@/components/layout/AppLayout";
import { SubmissionForm } from "@/components/forms/SubmissionForm";
import { ProcessingPipeline } from "@/components/ai/ProcessingPipeline";
import { useState } from "react";

export default function Upload() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleUpload = (data: any) => {
    setIsProcessing(true);
  };

  return (
    <AppLayout>
      <div className="max-w-md mx-auto py-8">
        {!isProcessing ? (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Submit Worksheet</h1>
              <p className="text-muted-foreground mt-2">Enter the code from your teacher and upload a clear photo.</p>
            </div>
            <div className="bg-card border rounded-2xl p-6 shadow-sm">
              <SubmissionForm onSubmitStart={handleUpload} />
            </div>
          </div>
        ) : (
          <div className="py-12">
            <ProcessingPipeline />
          </div>
        )}
      </div>
    </AppLayout>
  );
}
