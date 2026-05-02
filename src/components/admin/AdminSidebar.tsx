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
import { adminGhost, adminMuted, adminNavActive, adminSidebar } from "@/lib/admin-ui";
import { Button } from "@/components/ui/button";

/** Same order as the public site after the hero: articles → artists → concerts; dashboard is the admin hub */
const nav = [
  { to: "/admin", end: true, label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/articles", end: false, label: "Articles", icon: Newspaper },
  { to: "/admin/artists", end: false, label: "Artists", icon: Mic2 },
  { to: "/admin/concerts", end: false, label: "Concerts", icon: CalendarDays },
] as const;

const AdminSidebar = () => {
  return (
    <aside className={cn("flex w-64 shrink-0 flex-col", adminSidebar)}>
      <div className="flex h-16 items-center gap-2 border-b border-gray-800/40 px-6">
        <Music className="h-7 w-7 text-accent-teal" />
        <div>
          <p className="text-sm font-semibold text-white">MusicFlo.</p>
          <p className={cn("text-xs", adminMuted)}>Admin</p>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-2 px-3 py-4">
        {nav.map(({ to, end, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors",
                isActive ? adminNavActive : adminGhost
              )
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="space-y-2 border-t border-gray-800/40 p-3">
        <Button variant="ghost" className={cn("w-full justify-start gap-3", adminGhost)} asChild>
          <a href="/">
            <ExternalLink className="h-4 w-4" />
            View site
          </a>
        </Button>
        <Button variant="ghost" className={cn("w-full justify-start gap-3", adminGhost)} asChild>
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
