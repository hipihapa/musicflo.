import { useState } from "react";
import { Plus, Star } from "lucide-react";
import AdminTopBar from "@/components/admin/AdminTopBar";
import { cn } from "@/lib/utils";
import {
  adminCard,
  adminDialog,
  adminDialogDesc,
  adminDialogTitle,
  adminInput,
  adminLabel,
  adminMuted,
  adminOutlineBtn,
  adminPrimaryBtn,
} from "@/lib/admin-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const artists = [
  {
    id: "1",
    name: "Ama Serwah",
    genre: "Afro-fusion",
    featured: true,
    blurb: "Accra-based vocalist breaking into Europe this season.",
  },
  {
    id: "2",
    name: "Kojo Miles",
    genre: "Hip-life",
    featured: false,
    blurb: "Producer and performer with two viral singles.",
  },
  {
    id: "3",
    name: "The Collective",
    genre: "Gospel",
    featured: false,
    blurb: "Choir-led live sessions every month.",
  },
];

const AdminArtists = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdminTopBar
        title="Artists"
        description="Artist spotlight cards for the homepage."
      />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={cn("text-sm", adminMuted)}>Toggle who appears in the spotlight strip (UI only).</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className={cn("gap-2 rounded-full", adminPrimaryBtn)}>
                <Plus className="h-4 w-4" />
                Add artist
              </Button>
            </DialogTrigger>
            <DialogContent className={adminDialog}>
              <DialogHeader>
                <DialogTitle className={adminDialogTitle}>Add artist profile</DialogTitle>
                <DialogDescription className={adminDialogDesc}>
                  Public bio and imagery for the marketing site.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="ar-name" className={adminLabel}>
                    Name
                  </Label>
                  <Input id="ar-name" placeholder="Stage name" className={adminInput} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-genre" className={adminLabel}>
                    Genre
                  </Label>
                  <Input id="ar-genre" placeholder="Afrobeat" className={adminInput} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-bio" className={adminLabel}>
                    Bio
                  </Label>
                  <Textarea id="ar-bio" placeholder="Short paragraph…" rows={4} className={adminInput} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-photo" className={adminLabel}>
                    Photo
                  </Label>
                  <Input
                    id="ar-photo"
                    type="file"
                    accept="image/*"
                    className={cn("cursor-pointer", adminInput)}
                  />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-gray-800/50 bg-dark-bg/50 p-3">
                  <div>
                    <p className="text-sm font-medium text-white">Featured on home</p>
                    <p className={cn("text-xs", adminMuted)}>Show in spotlight section</p>
                  </div>
                  <Switch defaultChecked aria-label="Featured on home" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  type="button"
                  className={cn("rounded-full border-gray-600", adminOutlineBtn)}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className={cn("rounded-full", adminPrimaryBtn)}
                  onClick={() => setOpen(false)}
                >
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {artists.map((a) => (
            <Card key={a.id} className={adminCard}>
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-base text-white">{a.name}</CardTitle>
                  <CardDescription className={adminMuted}>{a.genre}</CardDescription>
                </div>
                {a.featured ? (
                  <Badge
                    className={cn(
                      "shrink-0 gap-1 border-0 bg-gradient-to-r from-accent-teal to-accent-green font-medium text-white"
                    )}
                  >
                    <Star className="h-3 w-3" />
                    Featured
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="shrink-0 border-gray-600 bg-transparent font-medium text-gray-400"
                  >
                    Hidden
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                <p className={cn("text-sm", adminMuted)}>{a.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    type="button"
                    className="border border-gray-600 bg-dark-bg/80 text-gray-200 hover:bg-white/10"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="rounded-full border-accent-teal/40 font-medium text-accent-teal hover:bg-accent-teal/10"
                  >
                    {a.featured ? "Remove spotlight" : "Set spotlight"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default AdminArtists;
