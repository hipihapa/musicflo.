import { CalendarDays, Eye, Newspaper, Users } from "lucide-react";
import AdminTopBar from "@/components/admin/AdminTopBar";
import { cn } from "@/lib/utils";
import { adminCard, adminMuted } from "@/lib/admin-ui";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Published concerts", value: "12", icon: CalendarDays, hint: "3 drafts", iconClass: "text-accent-teal" },
  { label: "Articles", value: "8", icon: Newspaper, hint: "2 scheduled", iconClass: "text-accent-green" },
  { label: "Spotlight artists", value: "5", icon: Users, hint: "Active on home", iconClass: "text-warm-yellow" },
  { label: "Page views (30d)", value: "24.1k", icon: Eye, hint: "Placeholder metric", iconClass: "text-soft-orange" },
] as const;

const activity = [
  { action: "Concert updated", detail: "Praise Reloaded — Elwak Stadium", time: "2h ago" },
  { action: "Article published", detail: "Ghana’s summer lineup", time: "Yesterday" },
  { action: "Artist spotlight", detail: "Switched featured artist", time: "3d ago" },
];

const AdminDashboard = () => {
  return (
    <>
      <AdminTopBar
        title="Dashboard"
        description="Overview of your MusicFlo. content (static preview)."
      />
      <main className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ label, value, icon: Icon, hint, iconClass }) => (
            <Card key={label} className={adminCard}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={cn("text-sm font-medium", adminMuted)}>{label}</CardTitle>
                <Icon className={cn("h-4 w-4", iconClass)} />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className={cn("mt-1 text-xs", adminMuted)}>{hint}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className={adminCard}>
            <CardHeader>
              <CardTitle className="text-base text-white">Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activity.map((row) => (
                <div
                  key={row.detail}
                  className="flex items-start justify-between gap-4 border-b border-gray-800/50 pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-white">{row.action}</p>
                    <p className={cn("text-sm", adminMuted)}>{row.detail}</p>
                  </div>
                  <span className={cn("shrink-0 text-xs", adminMuted)}>{row.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className={adminCard}>
            <CardHeader>
              <CardTitle className="text-base text-white">Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge className="border-gray-700 bg-dark-bg/80 font-medium text-gray-200 hover:bg-white/5">
                Add concert
              </Badge>
              <Badge className="border-gray-700 bg-dark-bg/80 font-medium text-gray-200 hover:bg-white/5">
                New article
              </Badge>
              <Badge className="border-gray-700 bg-dark-bg/80 font-medium text-gray-200 hover:bg-white/5">
                Update hero copy
              </Badge>
              <Badge
                variant="outline"
                className="border-accent-teal/40 bg-transparent font-medium text-accent-teal hover:bg-accent-teal/10"
              >
                Newsletter draft
              </Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
