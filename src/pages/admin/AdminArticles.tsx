import { useState } from "react";
import { Plus, MoreHorizontal, Pencil } from "lucide-react";
import AdminTopBar from "@/components/admin/AdminTopBar";
import { cn } from "@/lib/utils";
import {
  adminDialog,
  adminDialogDesc,
  adminDialogTitle,
  adminDropdown,
  adminDropdownItem,
  adminInput,
  adminLabel,
  adminMuted,
  adminOutlineBtn,
  adminPrimaryBtn,
  adminTableHead,
  adminTableRow,
  adminTableWrap,
} from "@/lib/admin-ui";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ArticleStatus = "Published" | "Scheduled" | "Draft";

type Article = {
  id: string;
  title: string;
  author: string;
  updated: string;
  status: ArticleStatus;
  excerpt: string;
};

const INITIAL_ARTICLES: Article[] = [
  {
    id: "1",
    title: "The rise of Afro-gospel in Accra",
    author: "Editorial",
    updated: "2025-05-28",
    status: "Published",
    excerpt: "How a new wave of artists is reshaping Sunday playlists and festival stages.",
  },
  {
    id: "2",
    title: "Summer festivals you cannot miss",
    author: "Editorial",
    updated: "2025-05-20",
    status: "Scheduled",
    excerpt: "Dates, venues, and tickets for the biggest outdoor shows this season.",
  },
  {
    id: "3",
    title: "Interview: backstage at Fire Festival",
    author: "Guest",
    updated: "2025-05-18",
    status: "Draft",
    excerpt: "Conversations with producers and headliners the night before doors open.",
  },
];

type ArticleDraft = {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  updated: string;
  status: ArticleStatus;
};

const AdminArticles = () => {
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [createOpen, setCreateOpen] = useState(false);
  const [editDraft, setEditDraft] = useState<ArticleDraft | null>(null);

  const openEdit = (row: Article) => {
    setEditDraft({
      id: row.id,
      title: row.title,
      author: row.author,
      excerpt: row.excerpt,
      updated: row.updated,
      status: row.status,
    });
  };

  const saveEdit = () => {
    if (!editDraft) return;
    setArticles((prev) =>
      prev.map((a) =>
        a.id === editDraft.id
          ? {
              ...a,
              title: editDraft.title,
              author: editDraft.author,
              excerpt: editDraft.excerpt,
              updated: editDraft.updated,
              status: editDraft.status,
            }
          : a
      )
    );
    setEditDraft(null);
  };

  return (
    <>
      <AdminTopBar title="Articles" description="Featured stories and editorial content." />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={cn("text-sm", adminMuted)}>Homepage “Featured articles” section</p>
          <Dialog open={createOpen} onOpenChange={setCreateOpen}>
            <DialogTrigger asChild>
              <Button className={cn("gap-2 rounded-full", adminPrimaryBtn)}>
                <Plus className="h-4 w-4" />
                New article
              </Button>
            </DialogTrigger>
            <DialogContent className={cn("sm:max-w-lg", adminDialog)}>
              <DialogHeader>
                <DialogTitle className={adminDialogTitle}>Create article</DialogTitle>
                <DialogDescription className={adminDialogDesc}>
                  Rich text editor can replace this textarea later.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="a-title" className={adminLabel}>
                    Title
                  </Label>
                  <Input id="a-title" placeholder="Headline" className={adminInput} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="a-excerpt" className={adminLabel}>
                    Excerpt
                  </Label>
                  <Textarea
                    id="a-excerpt"
                    placeholder="Short blurb for cards…"
                    rows={3}
                    className={adminInput}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="a-cover" className={adminLabel}>
                    Cover image
                  </Label>
                  <Input
                    id="a-cover"
                    type="file"
                    accept="image/*"
                    className={cn("cursor-pointer", adminInput)}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  type="button"
                  className={cn("rounded-full border-gray-600", adminOutlineBtn)}
                  onClick={() => setCreateOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className={cn("rounded-full", adminPrimaryBtn)}
                  onClick={() => setCreateOpen(false)}
                >
                  Save draft
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className={adminTableWrap}>
          <Table>
            <TableHeader>
              <TableRow className={adminTableRow}>
                <TableHead className={adminTableHead}>Title</TableHead>
                <TableHead className={adminTableHead}>Author</TableHead>
                <TableHead className={adminTableHead}>Updated</TableHead>
                <TableHead className={adminTableHead}>Status</TableHead>
                <TableHead className={cn("w-[70px] text-right", adminTableHead)}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {articles.map((row) => (
                <TableRow key={row.id} className={adminTableRow}>
                  <TableCell className="max-w-[240px] truncate font-medium text-white">
                    {row.title}
                  </TableCell>
                  <TableCell className={adminMuted}>{row.author}</TableCell>
                  <TableCell className="text-gray-200">{row.updated}</TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "h-8 min-h-8 px-3 py-0 text-xs font-medium leading-none",
                        row.status === "Published" &&
                          "border-0 bg-gradient-to-r from-accent-teal to-accent-green text-white",
                        row.status === "Scheduled" &&
                          "border border-accent-teal/50 bg-transparent text-accent-teal",
                        row.status === "Draft" &&
                          "border border-gray-600 bg-dark-bg/80 text-gray-300"
                      )}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          type="button"
                          className="text-gray-400 hover:bg-white/10 hover:text-white"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className={adminDropdown}>
                        <DropdownMenuItem className={adminDropdownItem} onSelect={() => openEdit(row)}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <Dialog
        open={editDraft !== null}
        onOpenChange={(open) => {
          if (!open) setEditDraft(null);
        }}
      >
        {editDraft ? (
          <DialogContent className={cn("sm:max-w-lg", adminDialog)}>
            <DialogHeader>
              <DialogTitle className={adminDialogTitle}>Edit article</DialogTitle>
              <DialogDescription className={adminDialogDesc}>
                Update fields below. Changes apply to this table until you connect Supabase.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-2">
              <div className="grid gap-2">
                <Label htmlFor="edit-title" className={adminLabel}>
                  Title
                </Label>
                <Input
                  id="edit-title"
                  value={editDraft.title}
                  onChange={(e) => setEditDraft((d) => (d ? { ...d, title: e.target.value } : d))}
                  className={adminInput}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-author" className={adminLabel}>
                  Author
                </Label>
                <Input
                  id="edit-author"
                  value={editDraft.author}
                  onChange={(e) => setEditDraft((d) => (d ? { ...d, author: e.target.value } : d))}
                  className={adminInput}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-excerpt" className={adminLabel}>
                  Excerpt
                </Label>
                <Textarea
                  id="edit-excerpt"
                  rows={3}
                  value={editDraft.excerpt}
                  onChange={(e) => setEditDraft((d) => (d ? { ...d, excerpt: e.target.value } : d))}
                  className={adminInput}
                />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="edit-updated" className={adminLabel}>
                    Last updated
                  </Label>
                  <Input
                    id="edit-updated"
                    type="date"
                    value={editDraft.updated}
                    onChange={(e) => setEditDraft((d) => (d ? { ...d, updated: e.target.value } : d))}
                    className={adminInput}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className={adminLabel}>Status</Label>
                  <Select
                    value={editDraft.status}
                    onValueChange={(value) =>
                      setEditDraft((d) =>
                        d ? { ...d, status: value as ArticleStatus } : d
                      )
                    }
                  >
                    <SelectTrigger className={cn(adminInput, "h-10")}>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent className={adminDropdown}>
                      <SelectItem value="Published" className={adminDropdownItem}>
                        Published
                      </SelectItem>
                      <SelectItem value="Scheduled" className={adminDropdownItem}>
                        Scheduled
                      </SelectItem>
                      <SelectItem value="Draft" className={adminDropdownItem}>
                        Draft
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                type="button"
                className={cn("rounded-full border-gray-600", adminOutlineBtn)}
                onClick={() => setEditDraft(null)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                className={cn("rounded-full", adminPrimaryBtn)}
                onClick={saveEdit}
              >
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
};

export default AdminArticles;
