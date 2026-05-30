import { ReactNode, useEffect, useState } from "react";
import { TopNav } from "./TopNav";
import { TeacherSidebar } from "./TeacherSidebar";
import { useLocation } from "wouter";
import { useAppContext } from "@/lib/context/AppContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Download } from "lucide-react";

const PRESENTATION_FLOW = [
  "/",
  "/teacher",
  "/teacher/create-assignment",
  "/teacher/insights",
  "/teacher/remediation",
  "/parent",
  "/submission-success",
  "/developer"
];

export function AppLayout({ children }: { children: ReactNode }) {
  const [location, setLocation] = useLocation();
  const { presentationMode, userRole, setUserRole } = useAppContext();
  const [showRolePicker, setShowRolePicker] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    if (!userRole && location !== "/") {
      setShowRolePicker(true);
    } else {
      setShowRolePicker(false);
    }
  }, [userRole, location]);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBanner(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallBanner(false);
      }
      setDeferredPrompt(null);
    }
  };

  const currentIndex = PRESENTATION_FLOW.indexOf(location);

  const goNext = () => {
    if (currentIndex < PRESENTATION_FLOW.length - 1) {
      setLocation(PRESENTATION_FLOW[currentIndex + 1]);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setLocation(PRESENTATION_FLOW[currentIndex - 1]);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showInstallBanner && (
        <div className="bg-primary text-primary-foreground px-4 py-2 flex items-center justify-between text-sm">
          <span>Install Vidyasetu for a better experience</span>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" onClick={handleInstall} className="h-8">
              <Download className="w-4 h-4 mr-2" /> Install
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setShowInstallBanner(false)} className="h-8 hover:bg-primary-foreground/20">
              Dismiss
            </Button>
          </div>
        </div>
      )}
      <TopNav />
      <div className="flex-1 flex overflow-hidden">
        {location.startsWith("/teacher") && <TeacherSidebar />}
        <main className="flex-1 overflow-y-auto relative">
          <div className="container mx-auto py-6 px-4 md:px-6">
            {children}
          </div>
        </main>
      </div>

      {presentationMode && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur border-t z-50 flex justify-between items-center">
          <Button variant="outline" onClick={goPrev} disabled={currentIndex <= 0}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Previous
          </Button>
          <span className="text-sm font-medium">Presentation Mode ({currentIndex + 1}/{PRESENTATION_FLOW.length})</span>
          <Button onClick={goNext} disabled={currentIndex >= PRESENTATION_FLOW.length - 1}>
            Next Step <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      )}

      {showRolePicker && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur z-50 flex items-center justify-center">
          <div className="bg-card p-8 rounded-xl shadow-lg border max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-6">Who are you?</h2>
            <div className="grid gap-4">
              <Button size="lg" className="h-24 text-lg" onClick={() => {
                setUserRole("teacher");
                setLocation("/teacher");
                setShowRolePicker(false);
              }}>
                I am a Teacher
              </Button>
              <Button variant="outline" size="lg" className="h-24 text-lg" onClick={() => {
                setUserRole("parent");
                setLocation("/parent");
                setShowRolePicker(false);
              }}>
                I am a Parent / Guardian
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
