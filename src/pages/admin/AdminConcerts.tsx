import { useState } from "react";
import { Plus, Pencil, MoreHorizontal } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const rows = [
  {
    id: "1",
    artist: "Praise Reloaded",
    venue: "Elwak Stadium",
    city: "Accra",
    date: "2025-06-29",
    status: "Published",
  },
  {
    id: "2",
    artist: "Fire Festival",
    venue: "CCB Auditorium KNUST",
    city: "Kumasi",
    date: "2025-06-21",
    status: "Published",
  },
  {
    id: "3",
    artist: "Upper Room Experience",
    venue: "Black and Phamous Lounge",
    city: "Accra",
    date: "2025-06-21",
    status: "Draft",
  },
];

const AdminConcerts = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdminTopBar
        title="Concerts"
        description="Create, edit, and publish concert listings."
      />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={cn("text-sm", adminMuted)}>{rows.length} listings · UI preview only</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className={cn("gap-2 rounded-full", adminPrimaryBtn)}>
                <Plus className="h-4 w-4" />
                Add concert
              </Button>
            </DialogTrigger>
            <DialogContent className={cn("sm:max-w-lg", adminDialog)}>
              <DialogHeader>
                <DialogTitle className={adminDialogTitle}>New concert</DialogTitle>
                <DialogDescription className={adminDialogDesc}>
                  Form layout for Supabase — fields are not saved yet.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="c-artist" className={adminLabel}>
                    Artist / title
                  </Label>
                  <Input id="c-artist" placeholder="e.g. City Worship Night" className={adminInput} />
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="c-venue" className={adminLabel}>
                      Venue
                    </Label>
                    <Input id="c-venue" placeholder="Stadium name" className={adminInput} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-city" className={adminLabel}>
                      City
                    </Label>
                    <Input id="c-city" placeholder="Accra" className={adminInput} />
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="c-date" className={adminLabel}>
                      Date
                    </Label>
                    <Input id="c-date" type="date" className={adminInput} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-time" className={adminLabel}>
                      Time
                    </Label>
                    <Input id="c-time" type="time" className={adminInput} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-poster" className={adminLabel}>
                    Poster image
                  </Label>
                  <Input
                    id="c-poster"
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
                  Save
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className={adminTableWrap}>
          <Table>
            <TableHeader>
              <TableRow className={adminTableRow}>
                <TableHead className={adminTableHead}>Event</TableHead>
                <TableHead className={adminTableHead}>Venue</TableHead>
                <TableHead className={adminTableHead}>City</TableHead>
                <TableHead className={adminTableHead}>Date</TableHead>
                <TableHead className={adminTableHead}>Status</TableHead>
                <TableHead className={cn("w-[70px] text-right", adminTableHead)}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} className={adminTableRow}>
                  <TableCell className="font-medium text-white">{row.artist}</TableCell>
                  <TableCell className={adminMuted}>{row.venue}</TableCell>
                  <TableCell className="text-gray-200">{row.city}</TableCell>
                  <TableCell className="text-gray-200">{row.date}</TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "h-8 min-h-8 px-3 py-0 text-xs font-medium leading-none",
                        row.status === "Published"
                          ? "border-0 bg-gradient-to-r from-accent-teal to-accent-green text-white"
                          : "border border-gray-600 bg-dark-bg/80 text-gray-300"
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
                        <DropdownMenuItem className="text-red-400 focus:bg-red-500/10 focus:text-red-300 data-[highlighted]:bg-red-500/10 data-[highlighted]:text-red-300">
                          Unpublish
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
    </>
  );
};

export default AdminConcerts;
