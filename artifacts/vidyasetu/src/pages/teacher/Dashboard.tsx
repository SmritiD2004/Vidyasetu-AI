import { AppLayout } from "@/components/layout/AppLayout";
import { StatCard } from "@/components/cards/StatCard";
import { Users, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { useAppContext } from "@/lib/context/AppContext";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Dashboard() {
  const { assignments, submissions } = useAppContext();

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
          <Link href="/teacher/create-assignment">
            <Button>Create Assignment</Button>
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Students" value={25} icon={Users} />
          <StatCard title="Active Assignments" value={assignments.length} icon={FileText} />
          <StatCard title="Submission Rate" value="72%" icon={CheckCircle2} />
          <StatCard title="Needs Support" value={7} icon={AlertTriangle} description="Students below 60%" />
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Assignments</h2>
        <div className="rounded-md border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assignments.slice(0, 5).map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">{a.title}</TableCell>
                  <TableCell>{a.subject}</TableCell>
                  <TableCell className="font-mono text-xs">{a.submissionCode}</TableCell>
                  <TableCell>
                    <Badge variant={a.status === 'active' ? 'default' : 'secondary'}>{a.status}</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AppLayout>
  );
}
