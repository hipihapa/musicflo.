import { useState } from "react";
import { Plus, Star } from "lucide-react";
import AdminTopBar from "@/components/admin/AdminTopBar";
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
          <p className="text-sm text-muted-foreground">
            Toggle who appears in the spotlight strip (UI only).
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add artist
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add artist profile</DialogTitle>
                <DialogDescription>Public bio and imagery for the marketing site.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="ar-name">Name</Label>
                  <Input id="ar-name" placeholder="Stage name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-genre">Genre</Label>
                  <Input id="ar-genre" placeholder="Afrobeat" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-bio">Bio</Label>
                  <Textarea id="ar-bio" placeholder="Short paragraph…" rows={4} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-photo">Photo</Label>
                  <Input id="ar-photo" type="file" accept="image/*" className="cursor-pointer" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div>
                    <p className="text-sm font-medium">Featured on home</p>
                    <p className="text-xs text-muted-foreground">Show in spotlight section</p>
                  </div>
                  <Switch defaultChecked aria-label="Featured on home" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={() => setOpen(false)}>
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {artists.map((a) => (
            <Card key={a.id} className="border-border bg-card">
              <CardHeader className="flex flex-row items-start justify-between space-y-0">
                <div>
                  <CardTitle className="text-base">{a.name}</CardTitle>
                  <CardDescription>{a.genre}</CardDescription>
                </div>
                {a.featured ? (
                  <Badge className="gap-1 shrink-0">
                    <Star className="h-3 w-3" />
                    Featured
                  </Badge>
                ) : (
                  <Badge variant="outline">Hidden</Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{a.blurb}</p>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm" type="button">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" type="button">
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
