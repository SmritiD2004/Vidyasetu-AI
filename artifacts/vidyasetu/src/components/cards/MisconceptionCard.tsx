import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recommendation } from "@/lib/types";

export function MisconceptionCard({ rec }: { rec: Recommendation }) {
  return (
    <Card className="border-l-4 border-l-destructive">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-semibold">{rec.conceptName}</CardTitle>
          <Badge variant={rec.priority === "High" ? "destructive" : "secondary"}>
            {rec.priority} Priority
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Detected Issue</span>
          <p className="text-sm mt-1">{rec.detectedIssue}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-muted/50 p-3 rounded-md">
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Suggested Activity</span>
            <p className="text-sm mt-1 text-primary font-medium">{rec.suggestedActivity}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Teacher Action</span>
            <p className="text-sm mt-1">{rec.teacherAction}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
