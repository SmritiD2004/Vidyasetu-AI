import { Card, CardContent } from "@/components/ui/card";
import { Student } from "@/lib/types";

export function StudentCard({ student, score }: { student: Student, score?: number }) {
  return (
    <Card className="mb-2">
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <p className="font-medium text-sm">{student.name}</p>
          <p className="text-xs text-muted-foreground">Grade {student.grade}</p>
        </div>
        {score !== undefined && (
          <div className="font-bold text-sm bg-muted px-2 py-1 rounded">
            {score}%
          </div>
        )}
      </CardContent>
    </Card>
  );
}
