import { useState } from "react";
import { Plus, MoreHorizontal, Pencil } from "lucide-react";
import AdminTopBar from "@/components/admin/AdminTopBar";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const rows = [
  {
    id: "1",
    title: "The rise of Afro-gospel in Accra",
    author: "Editorial",
    updated: "2025-05-28",
    status: "Published",
  },
  {
    id: "2",
    title: "Summer festivals you cannot miss",
    author: "Editorial",
    updated: "2025-05-20",
    status: "Scheduled",
  },
  {
    id: "3",
    title: "Interview: backstage at Fire Festival",
    author: "Guest",
    updated: "2025-05-18",
    status: "Draft",
  },
];

const AdminArticles = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdminTopBar title="Articles" description="Featured stories and editorial content." />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground">Homepage “Featured articles” section</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                New article
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Create article</DialogTitle>
                <DialogDescription>Rich text editor can replace this textarea later.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="a-title">Title</Label>
                  <Input id="a-title" placeholder="Headline" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="a-excerpt">Excerpt</Label>
                  <Textarea id="a-excerpt" placeholder="Short blurb for cards…" rows={3} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="a-cover">Cover image</Label>
                  <Input id="a-cover" type="file" accept="image/*" className="cursor-pointer" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={() => setOpen(false)}>
                  Save draft
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Updated</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="max-w-[240px] font-medium truncate">{row.title}</TableCell>
                  <TableCell className="text-muted-foreground">{row.author}</TableCell>
                  <TableCell>{row.updated}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        row.status === "Published"
                          ? "default"
                          : row.status === "Scheduled"
                            ? "outline"
                            : "secondary"
                      }
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" type="button">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem>Preview</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
};

export default AdminArticles;
