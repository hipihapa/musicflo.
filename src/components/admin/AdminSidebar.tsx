import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarDays,
  Newspaper,
  Mic2,
  Music,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/admin", end: true, label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/concerts", label: "Concerts", icon: CalendarDays },
  { to: "/admin/articles", label: "Articles", icon: Newspaper },
  { to: "/admin/artists", label: "Artists", icon: Mic2 },
] as const;

const AdminSidebar = () => {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <Music className="h-7 w-7 text-accent-teal" />
        <div>
          <p className="text-sm font-semibold text-foreground">MusicFlo.</p>
          <p className="text-xs text-muted-foreground">Admin</p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {nav.map(({ to, end, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-border p-3 space-y-1">
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground"
          asChild
        >
          <a href="/">
            <ExternalLink className="h-4 w-4" />
            View site
          </a>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start gap-3 text-muted-foreground"
          asChild
        >
          <NavLink to="/admin/login">
            <LogOut className="h-4 w-4" />
            Sign out
          </NavLink>
        </Button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
