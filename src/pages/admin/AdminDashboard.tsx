import { CalendarDays, Eye, Newspaper, Users } from "lucide-react";
import AdminTopBar from "@/components/admin/AdminTopBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Published concerts", value: "12", icon: CalendarDays, hint: "3 drafts" },
  { label: "Articles", value: "8", icon: Newspaper, hint: "2 scheduled" },
  { label: "Spotlight artists", value: "5", icon: Users, hint: "Active on home" },
  { label: "Page views (30d)", value: "24.1k", icon: Eye, hint: "Placeholder metric" },
];

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
          {stats.map(({ label, value, icon: Icon, hint }) => (
            <Card key={label} className="border-border bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {label}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{hint}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-base">Recent activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activity.map((row) => (
                <div
                  key={row.detail}
                  className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{row.action}</p>
                    <p className="text-sm text-muted-foreground">{row.detail}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{row.time}</span>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-base">Quick actions</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge variant="secondary">Add concert</Badge>
              <Badge variant="secondary">New article</Badge>
              <Badge variant="secondary">Update hero copy</Badge>
              <Badge variant="outline">Newsletter draft</Badge>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
