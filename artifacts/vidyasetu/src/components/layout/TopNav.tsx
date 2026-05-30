import { Link, useLocation } from "wouter";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/lib/context/AppContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function TopNav() {
  const { userRole, setUserRole, presentationMode, setPresentationMode, developerMode, setDeveloperMode } = useAppContext();
  const [location, setLocation] = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-semibold">Home</Link>
                {userRole === "teacher" && (
                  <>
                    <Link href="/teacher">Dashboard</Link>
                    <Link href="/teacher/create-assignment">Create Assignment</Link>
                    <Link href="/teacher/insights">Insights</Link>
                    <Link href="/teacher/remediation">Remediation</Link>
                  </>
                )}
                {userRole === "parent" && (
                  <Link href="/parent">Upload</Link>
                )}
                <Link href="/developer">Developer</Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight text-primary">VIDYASETU</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {userRole && (
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-muted-foreground capitalize">{userRole} Mode</span>
              <Button variant="outline" size="sm" onClick={() => {
                setUserRole(null);
                setLocation("/");
              }}>Switch Role</Button>
            </div>
          )}
          
          <div className="flex items-center gap-4 border-l pl-4">
            <div className="flex items-center gap-2">
              <Switch id="dev-mode" checked={developerMode} onCheckedChange={setDeveloperMode} />
              <Label htmlFor="dev-mode" className="text-xs">Dev</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="pres-mode" checked={presentationMode} onCheckedChange={setPresentationMode} />
              <Label htmlFor="pres-mode" className="text-xs">Present</Label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
