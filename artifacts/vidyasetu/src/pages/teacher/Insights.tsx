import { AppLayout } from "@/components/layout/AppLayout";
import { SubmissionBarChart } from "@/components/charts/SubmissionBarChart";
import { ErrorPieChart } from "@/components/charts/ErrorPieChart";
import { TrendLineChart } from "@/components/charts/TrendLineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StudentCard } from "@/components/cards/StudentCard";
import { mockStudents } from "@/lib/mock-data/students";

export default function Insights() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Classroom Insights</h1>
          <p className="text-muted-foreground mt-2">AI-generated analytics based on recent worksheet submissions.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="h-[350px]">
            <SubmissionBarChart />
          </div>
          <div className="h-[350px]">
            <ErrorPieChart />
          </div>
          <div className="h-[350px] md:col-span-2">
            <TrendLineChart />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Student Performance Groups</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-red-50 border-red-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-red-800 text-lg">Needs Support (&lt;60%)</CardTitle>
              </CardHeader>
              <CardContent>
                {mockStudents.slice(0, 3).map(s => <StudentCard key={s.id} student={s} score={55} />)}
              </CardContent>
            </Card>
            <Card className="bg-orange-50 border-orange-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-orange-800 text-lg">Developing (60-80%)</CardTitle>
              </CardHeader>
              <CardContent>
                {mockStudents.slice(3, 6).map(s => <StudentCard key={s.id} student={s} score={72} />)}
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-green-800 text-lg">Proficient (&gt;80%)</CardTitle>
              </CardHeader>
              <CardContent>
                {mockStudents.slice(6, 9).map(s => <StudentCard key={s.id} student={s} score={92} />)}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
