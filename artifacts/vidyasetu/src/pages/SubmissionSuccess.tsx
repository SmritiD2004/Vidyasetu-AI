import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function SubmissionSuccess() {
  return (
    <AppLayout>
      <div className="max-w-md mx-auto py-16 text-center space-y-8">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Successfully Submitted!</h1>
          <p className="text-slate-600">The worksheet has been analyzed and sent to the teacher.</p>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-lg border inline-block text-left w-full max-w-xs">
          <p className="text-sm text-slate-500">Student</p>
          <p className="font-semibold">Aarav Patel</p>
          <p className="text-sm text-slate-500 mt-2">Time</p>
          <p className="font-semibold">{new Date().toLocaleString()}</p>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Link href="/parent">
            <Button className="w-full" size="lg">Submit Another</Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full" size="lg">Back to Home</Button>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
