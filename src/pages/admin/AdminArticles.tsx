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
          <p className={cn("text-sm", adminMuted)}>Homepage “Featured articles” section</p>
          <Dialog open={open} onOpenChange={setOpen}>
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
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className={cn("rounded-full", adminPrimaryBtn)}
                  onClick={() => setOpen(false)}
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
              {rows.map((row) => (
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
                        <DropdownMenuItem className={adminDropdownItem}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className={adminDropdownItem}>Preview</DropdownMenuItem>
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
