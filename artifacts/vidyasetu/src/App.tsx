import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { AppProvider } from "@/lib/context/AppContext";

import Landing from "@/pages/Landing";
import Dashboard from "@/pages/teacher/Dashboard";
import CreateAssignment from "@/pages/teacher/CreateAssignment";
import Insights from "@/pages/teacher/Insights";
import Remediation from "@/pages/teacher/Remediation";
import ParentUpload from "@/pages/parent/Upload";
import SubmissionSuccess from "@/pages/SubmissionSuccess";
import Developer from "@/pages/Developer";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/teacher" component={Dashboard} />
      <Route path="/teacher/create-assignment" component={CreateAssignment} />
      <Route path="/teacher/insights" component={Insights} />
      <Route path="/teacher/remediation" component={Remediation} />
      <Route path="/parent" component={ParentUpload} />
      <Route path="/submission-success" component={SubmissionSuccess} />
      <Route path="/developer" component={Developer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
