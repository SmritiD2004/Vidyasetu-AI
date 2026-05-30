import { Student, Recommendation, Submission } from "../types";

export const extractAnswers = async (imageFile: File | null) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ answers: ["A", "B", "C"], confidence: 0.88 }), 1500);
  });
};

export const detectMisconceptions = async (answers: string[]) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      { misconceptions: ["Confuses multiplication with addition"], severity: "high" }
    ]), 1000);
  });
};

export const groupStudents = async (submissions: Submission[]) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      needsSupport: [{ id: "S01", name: "Aarav Patel", grade: 4 }],
      developing: [{ id: "S02", name: "Vivaan Sharma", grade: 4 }],
      proficient: [{ id: "S03", name: "Aditya Singh", grade: 4 }]
    }), 500);
  });
};

export const generateRecommendations = async (misconceptions: any[]): Promise<Recommendation[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([
      {
        id: "REC01",
        conceptName: "Multiplication",
        detectedIssue: "Confuses multiplication with addition",
        suggestedActivity: "Use grouped addition visually",
        teacherAction: "Use base-10 blocks",
        priority: "High"
      }
    ]), 500);
  });
};
