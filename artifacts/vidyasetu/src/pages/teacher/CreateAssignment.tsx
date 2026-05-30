import { AppLayout } from "@/components/layout/AppLayout";
import { AssignmentForm } from "@/components/forms/AssignmentForm";

export default function CreateAssignment() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Assignment</h1>
          <p className="text-muted-foreground mt-2">Generate a unique code for a new worksheet assignment.</p>
        </div>
        <div className="bg-card border rounded-xl p-6 md:p-8">
          <AssignmentForm />
        </div>
      </div>
    </AppLayout>
  );
}
