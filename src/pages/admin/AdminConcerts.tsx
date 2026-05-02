import { useState } from "react";
import { Plus, Pencil, MoreHorizontal } from "lucide-react";
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
          <p className="text-sm text-muted-foreground">
            {rows.length} listings · UI preview only
          </p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Add concert
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>New concert</DialogTitle>
                <DialogDescription>
                  Form layout for Supabase — fields are not saved yet.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-2">
                <div className="grid gap-2">
                  <Label htmlFor="c-artist">Artist / title</Label>
                  <Input id="c-artist" placeholder="e.g. City Worship Night" />
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="c-venue">Venue</Label>
                    <Input id="c-venue" placeholder="Stadium name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-city">City</Label>
                    <Input id="c-city" placeholder="Accra" />
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="c-date">Date</Label>
                    <Input id="c-date" type="date" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-time">Time</Label>
                    <Input id="c-time" type="time" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="c-poster">Poster image</Label>
                  <Input id="c-poster" type="file" accept="image/*" className="cursor-pointer" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" type="button" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="button" onClick={() => setOpen(false)}>
                  Save (preview)
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="rounded-lg border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Venue</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[70px] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.artist}</TableCell>
                  <TableCell className="text-muted-foreground">{row.venue}</TableCell>
                  <TableCell>{row.city}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    <Badge variant={row.status === "Published" ? "default" : "secondary"}>
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
                        <DropdownMenuItem className="text-destructive focus:text-destructive">
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
