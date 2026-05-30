import React, { createContext, useContext, useState, ReactNode } from "react";
import { Assignment, Submission } from "../types";
import { mockAssignments } from "../mock-data/assignments";
import { mockSubmissions } from "../mock-data/submissions";

interface AppContextType {
  userRole: "teacher" | "parent" | null;
  setUserRole: (role: "teacher" | "parent" | null) => void;
  assignments: Assignment[];
  setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
  submissions: Submission[];
  setSubmissions: React.Dispatch<React.SetStateAction<Submission[]>>;
  presentationMode: boolean;
  setPresentationMode: (val: boolean) => void;
  developerMode: boolean;
  setDeveloperMode: (val: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<"teacher" | "parent" | null>(
    () => (localStorage.getItem("userRole") as any) || null
  );
  const [assignments, setAssignments] = useState<Assignment[]>(mockAssignments);
  const [submissions, setSubmissions] = useState<Submission[]>(mockSubmissions);
  const [presentationMode, setPresentationMode] = useState(false);
  const [developerMode, setDeveloperMode] = useState(false);

  React.useEffect(() => {
    if (userRole) {
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [userRole]);

  return (
    <AppContext.Provider
      value={{
        userRole,
        setUserRole,
        assignments,
        setAssignments,
        submissions,
        setSubmissions,
        presentationMode,
        setPresentationMode,
        developerMode,
        setDeveloperMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
