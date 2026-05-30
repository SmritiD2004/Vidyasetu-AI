import { AppLayout } from "@/components/layout/AppLayout";
import { MisconceptionCard } from "@/components/cards/MisconceptionCard";
import { Recommendation } from "@/lib/types";

const mockRecs: Recommendation[] = [
  {
    id: "REC01",
    conceptName: "Multiplication vs Addition",
    detectedIssue: "Students are adding numbers instead of multiplying them when presented with word problems.",
    suggestedActivity: "Visual grouping exercises on board",
    teacherAction: "Use base-10 blocks or physical counters to demonstrate grouping",
    priority: "High"
  },
  {
    id: "REC02",
    conceptName: "Fraction Denominators",
    detectedIssue: "Adding denominators together when adding fractions.",
    suggestedActivity: "Pizza slice coloring activity",
    teacherAction: "Review common denominators concept before moving on",
    priority: "High"
  },
  {
    id: "REC03",
    conceptName: "Decimal Point Placement",
    detectedIssue: "Ignoring the decimal point in addition.",
    suggestedActivity: "Place value chart lining up",
    teacherAction: "Emphasize vertical alignment of decimals",
    priority: "Medium"
  }
];

export default function Remediation() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Remediation Plan</h1>
          <p className="text-muted-foreground mt-2">AI-suggested interventions based on detected learning gaps.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {mockRecs.map(rec => (
            <MisconceptionCard key={rec.id} rec={rec} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
