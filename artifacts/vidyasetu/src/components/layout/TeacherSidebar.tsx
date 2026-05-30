import { Link, useLocation } from "wouter";
import { BookOpen, LayoutDashboard, PlusCircle, BarChart3, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppContext } from "@/lib/context/AppContext";

export function TeacherSidebar() {
  const [location] = useLocation();
  const { presentationMode } = useAppContext();

  if (presentationMode) return null;

  const links = [
    { href: "/teacher", label: "Dashboard", icon: LayoutDashboard },
    { href: "/teacher/create-assignment", label: "Create Assignment", icon: PlusCircle },
    { href: "/teacher/insights", label: "Insights", icon: BarChart3 },
    { href: "/teacher/remediation", label: "Remediation", icon: ShieldAlert },
  ];

  return (
    <aside className="w-64 border-r bg-card flex flex-col h-full sticky top-16 hidden md:flex">
      <div className="p-4 flex-1">
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const active = location === link.href;
            return (
              <Link key={link.href} href={link.href} className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"
              )}>
                <Icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
