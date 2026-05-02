import { useEffect, useState } from "react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

type Artist = {
  id: string;
  name: string;
  genre: string;
  featured: boolean;
  blurb: string;
};

const INITIAL_ARTISTS: Artist[] = [
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

type ArtistDraft = {
  name: string;
  genre: string;
  blurb: string;
  featured: boolean;
};

const emptyDraft = (): ArtistDraft => ({
  name: "",
  genre: "",
  blurb: "",
  featured: false,
});

const AdminArtists = () => {
  const [artists, setArtists] = useState<Artist[]>(INITIAL_ARTISTS);
  const [addOpen, setAddOpen] = useState(false);
  const [newArtist, setNewArtist] = useState<ArtistDraft>(emptyDraft);
  const [editId, setEditId] = useState<string | null>(null);
  const [editDraft, setEditDraft] = useState<ArtistDraft | null>(null);
  const [removeSpotlightTarget, setRemoveSpotlightTarget] = useState<Artist | null>(null);

  const editingArtist = editId ? artists.find((a) => a.id === editId) : null;

  useEffect(() => {
    if (addOpen) setNewArtist(emptyDraft());
  }, [addOpen]);

  const openEdit = (artist: Artist) => {
    setEditId(artist.id);
    setEditDraft({
      name: artist.name,
      genre: artist.genre,
      blurb: artist.blurb,
      featured: artist.featured,
    });
  };

  const closeEdit = () => {
    setEditId(null);
    setEditDraft(null);
  };

  const saveAdd = () => {
    const id = String(Date.now());
    setArtists((prev) => {
      const created: Artist = {
        id,
        name: newArtist.name.trim() || "Untitled artist",
        genre: newArtist.genre.trim() || "—",
        blurb: newArtist.blurb.trim() || "",
        featured: newArtist.featured,
      };
      const list = [...prev, created];
      if (newArtist.featured) {
        return list.map((a) => (a.id === id ? a : { ...a, featured: false }));
      }
      return list;
    });
    setAddOpen(false);
  };

  const saveEdit = () => {
    if (!editId || !editDraft) return;
    setArtists((prev) => {
      let next = prev.map((a) =>
        a.id === editId
          ? {
              ...a,
              name: editDraft.name.trim() || a.name,
              genre: editDraft.genre.trim() || a.genre,
              blurb: editDraft.blurb.trim(),
              featured: editDraft.featured,
            }
          : a
      );
      if (editDraft.featured) {
        next = next.map((a) => (a.id === editId ? a : { ...a, featured: false }));
      }
      return next;
    });
    closeEdit();
  };

  const setSpotlight = (artist: Artist) => {
    setArtists((prev) =>
      prev.map((a) => ({ ...a, featured: a.id === artist.id }))
    );
  };

  const confirmRemoveSpotlight = () => {
    if (!removeSpotlightTarget) return;
    setArtists((prev) =>
      prev.map((a) =>
        a.id === removeSpotlightTarget.id ? { ...a, featured: false } : a
      )
    );
    setRemoveSpotlightTarget(null);
  };

  return (
    <>
      <AdminTopBar
        title="Artists"
        description="Artist spotlight cards for the homepage."
      />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={cn("text-sm", adminMuted)}>Choose who appears in the homepage spotlight.</p>
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
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
                  <Input
                    id="ar-name"
                    placeholder="Stage name"
                    className={adminInput}
                    value={newArtist.name}
                    onChange={(e) => setNewArtist((d) => ({ ...d, name: e.target.value }))}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-genre" className={adminLabel}>
                    Genre
                  </Label>
                  <Input
                    id="ar-genre"
                    placeholder="Afrobeat"
                    className={adminInput}
                    value={newArtist.genre}
                    onChange={(e) => setNewArtist((d) => ({ ...d, genre: e.target.value }))}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ar-bio" className={adminLabel}>
                    Bio
                  </Label>
                  <Textarea
                    id="ar-bio"
                    placeholder="Short paragraph…"
                    rows={4}
                    className={adminInput}
                    value={newArtist.blurb}
                    onChange={(e) => setNewArtist((d) => ({ ...d, blurb: e.target.value }))}
                  />
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
                  <Switch
                    checked={newArtist.featured}
                    onCheckedChange={(checked) =>
                      setNewArtist((d) => ({ ...d, featured: checked }))
                    }
                    aria-label="Featured on home"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  type="button"
                  className={cn("rounded-full border-gray-600", adminOutlineBtn)}
                  onClick={() => setAddOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="button" className={cn("rounded-full", adminPrimaryBtn)} onClick={saveAdd}>
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
                    onClick={() => openEdit(a)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    type="button"
                    className="rounded-full border-accent-teal/40 font-medium text-accent-teal hover:bg-accent-teal/10"
                    onClick={() =>
                      a.featured ? setRemoveSpotlightTarget(a) : setSpotlight(a)
                    }
                  >
                    {a.featured ? "Remove spotlight" : "Set spotlight"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Dialog
        open={editId !== null && editDraft !== null}
        onOpenChange={(open) => {
          if (!open) closeEdit();
        }}
      >
        {editDraft && editingArtist ? (
          <DialogContent className={adminDialog}>
            <DialogHeader>
              <DialogTitle className={adminDialogTitle}>Edit artist</DialogTitle>
              <DialogDescription className={adminDialogDesc}>
                Update profile for {editingArtist.name}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <Label htmlFor="edit-ar-name" className={adminLabel}>
                  Name
                </Label>
                <Input
                  id="edit-ar-name"
                  className={adminInput}
                  value={editDraft.name}
                  onChange={(e) => setEditDraft((d) => (d ? { ...d, name: e.target.value } : d))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-ar-genre" className={adminLabel}>
                  Genre
                </Label>
                <Input
                  id="edit-ar-genre"
                  className={adminInput}
                  value={editDraft.genre}
                  onChange={(e) => setEditDraft((d) => (d ? { ...d, genre: e.target.value } : d))}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-ar-bio" className={adminLabel}>
                  Bio
                </Label>
                <Textarea
                  id="edit-ar-bio"
                  rows={4}
                  className={adminInput}
                  value={editDraft.blurb}
                  onChange={(e) => setEditDraft((d) => (d ? { ...d, blurb: e.target.value } : d))}
                />
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-800/50 bg-dark-bg/50 p-3">
                <div>
                  <p className="text-sm font-medium text-white">Featured on home</p>
                  <p className={cn("text-xs", adminMuted)}>Show in spotlight section</p>
                </div>
                <Switch
                  checked={editDraft.featured}
                  onCheckedChange={(checked) =>
                    setEditDraft((d) => (d ? { ...d, featured: checked } : d))
                  }
                  aria-label="Featured on home"
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                className={cn("rounded-full border-gray-600", adminOutlineBtn)}
                onClick={closeEdit}
              >
                Cancel
              </Button>
              <Button type="button" className={cn("rounded-full", adminPrimaryBtn)} onClick={saveEdit}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        ) : null}
      </Dialog>

      <AlertDialog
        open={removeSpotlightTarget !== null}
        onOpenChange={(next) => {
          if (!next) setRemoveSpotlightTarget(null);
        }}
      >
        <AlertDialogContent className={cn(adminDialog, "max-w-md")}>
          <AlertDialogHeader>
            <AlertDialogTitle className={adminDialogTitle}>Remove spotlight?</AlertDialogTitle>
            <AlertDialogDescription className={adminDialogDesc}>
              {removeSpotlightTarget ? (
                <>
                  <span className="text-gray-300">{removeSpotlightTarget.name}</span> will no longer
                  appear as the featured artist on the homepage. You can set spotlight again anytime.
                </>
              ) : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className={cn("rounded-full border-gray-600 sm:mt-0", adminOutlineBtn)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="rounded-full border-0 bg-red-600 font-semibold text-white hover:bg-red-600/90 focus:ring-red-600"
              onClick={confirmRemoveSpotlight}
            >
              Remove spotlight
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AdminArtists;
