export interface Student {
  id: string;
  name: string;
  grade: number;
}

export interface Assignment {
  id: string;
  title: string;
  subject: "Math" | "Science" | "English" | "Hindi";
  grade: number;
  dueDate: string;
  submissionCode: string;
  status: "active" | "closed";
}

export interface Submission {
  id: string;
  assignmentId: string;
  studentName: string;
  worksheetCode: string;
  status: "pending" | "processing" | "completed";
  submittedAt: string;
  imageUrl?: string;
  score?: number;
}

export interface InsightData {
  totalStudents: number;
  assignmentsCreated: number;
  submissionRate: number;
  studentsNeedingSupport: number;
}

export interface Recommendation {
  id: string;
  conceptName: string;
  detectedIssue: string;
  suggestedActivity: string;
  teacherAction: string;
  priority: "High" | "Medium" | "Low";
}
