import { useEffect, useState } from "react";
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

type PublishStatus = "Published" | "Draft";
type Admission = "free" | "paid";

type ConcertRow = {
  id: string;
  artist: string;
  venue: string;
  city: string;
  date: string;
  status: PublishStatus;
  admission: Admission;
  ticketUrl: string;
};

const INITIAL_CONCERTS: ConcertRow[] = [
  {
    id: "1",
    artist: "Praise Reloaded",
    venue: "Elwak Stadium",
    city: "Accra",
    date: "2025-06-29",
    status: "Published",
    admission: "free",
    ticketUrl: "",
  },
  {
    id: "2",
    artist: "Fire Festival",
    venue: "CCB Auditorium KNUST",
    city: "Kumasi",
    date: "2025-06-21",
    status: "Published",
    admission: "free",
    ticketUrl: "",
  },
  {
    id: "3",
    artist: "Upper Room Experience",
    venue: "Black and Phamous Lounge",
    city: "Accra",
    date: "2025-06-21",
    status: "Draft",
    admission: "paid",
    ticketUrl: "https://example.com/tickets/upper-room",
  },
];

type NewConcertForm = {
  artist: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  admission: Admission;
  ticketUrl: string;
};

const emptyNewConcert = (): NewConcertForm => ({
  artist: "",
  venue: "",
  city: "",
  date: "",
  time: "",
  admission: "free",
  ticketUrl: "",
});

const AdminConcerts = () => {
  const [concerts, setConcerts] = useState<ConcertRow[]>(INITIAL_CONCERTS);
  const [addOpen, setAddOpen] = useState(false);
  const [newConcert, setNewConcert] = useState<NewConcertForm>(emptyNewConcert);
  const [unpublishTarget, setUnpublishTarget] = useState<ConcertRow | null>(null);

  useEffect(() => {
    if (addOpen) setNewConcert(emptyNewConcert());
  }, [addOpen]);

  const saveNewConcert = () => {
    const id = String(Date.now());
    setConcerts((prev) => [
      ...prev,
      {
        id,
        artist: newConcert.artist.trim() || "Untitled event",
        venue: newConcert.venue.trim() || "TBA",
        city: newConcert.city.trim() || "TBA",
        date: newConcert.date || new Date().toISOString().slice(0, 10),
        status: "Draft",
        admission: newConcert.admission,
        ticketUrl: newConcert.ticketUrl.trim(),
      },
    ]);
    setAddOpen(false);
  };

  return (
    <>
      <AdminTopBar
        title="Concerts"
        description="Create, edit, and publish concert listings."
      />
      <main className="flex-1 space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className={cn("text-sm", adminMuted)}>{concerts.length} listings · UI preview only</p>
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
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
                  <Input
                    id="c-artist"
                    placeholder="e.g. City Worship Night"
                    className={adminInput}
                    value={newConcert.artist}
                    onChange={(e) => setNewConcert((f) => ({ ...f, artist: e.target.value }))}
                  />
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="c-venue" className={adminLabel}>
                      Venue
                    </Label>
                    <Input
                      id="c-venue"
                      placeholder="Stadium name"
                      className={adminInput}
                      value={newConcert.venue}
                      onChange={(e) => setNewConcert((f) => ({ ...f, venue: e.target.value }))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-city" className={adminLabel}>
                      City
                    </Label>
                    <Input
                      id="c-city"
                      placeholder="Accra"
                      className={adminInput}
                      value={newConcert.city}
                      onChange={(e) => setNewConcert((f) => ({ ...f, city: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="c-date" className={adminLabel}>
                      Date
                    </Label>
                    <Input
                      id="c-date"
                      type="date"
                      className={adminInput}
                      value={newConcert.date}
                      onChange={(e) => setNewConcert((f) => ({ ...f, date: e.target.value }))}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="c-time" className={adminLabel}>
                      Time
                    </Label>
                    <Input
                      id="c-time"
                      type="time"
                      className={adminInput}
                      value={newConcert.time}
                      onChange={(e) => setNewConcert((f) => ({ ...f, time: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
                  <div className="grid gap-2">
                    <Label className={adminLabel}>Admission</Label>
                    <Select
                      value={newConcert.admission}
                      onValueChange={(v) =>
                        setNewConcert((f) => ({ ...f, admission: v as Admission }))
                      }
                    >
                      <SelectTrigger className={cn(adminInput, "h-10")}>
                        <SelectValue placeholder="Free or paid" />
                      </SelectTrigger>
                      <SelectContent className={adminDropdown}>
                        <SelectItem value="free" className={adminDropdownItem}>
                          Free
                        </SelectItem>
                        <SelectItem value="paid" className={adminDropdownItem}>
                          Paid
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <Label htmlFor="c-ticket-url" className={adminLabel}>
                      Ticketing URL
                    </Label>
                    <Input
                      id="c-ticket-url"
                      type="url"
                      inputMode="url"
                      placeholder="https://tickets.example.com/…"
                      className={adminInput}
                      value={newConcert.ticketUrl}
                      onChange={(e) => setNewConcert((f) => ({ ...f, ticketUrl: e.target.value }))}
                    />
                    <p className={cn("text-xs", adminMuted)}>
                      Link to buy or register. Optional for free events if you only use on-site entry.
                    </p>
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
                  onClick={() => setAddOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  className={cn("rounded-full", adminPrimaryBtn)}
                  onClick={saveNewConcert}
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
                <TableHead className={adminTableHead}>Admission</TableHead>
                <TableHead className={adminTableHead}>Status</TableHead>
                <TableHead className={cn("w-[70px] text-right", adminTableHead)}>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {concerts.map((row) => (
                <TableRow key={row.id} className={adminTableRow}>
                  <TableCell className="font-medium text-white">{row.artist}</TableCell>
                  <TableCell className={adminMuted}>{row.venue}</TableCell>
                  <TableCell className="text-gray-200">{row.city}</TableCell>
                  <TableCell className="text-gray-200">{row.date}</TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "h-8 min-h-8 px-3 py-0 text-xs font-medium capitalize leading-none",
                        row.admission === "paid"
                          ? "border border-warm-yellow/50 bg-warm-yellow/10 text-warm-yellow"
                          : "border border-accent-teal/40 bg-accent-teal/10 text-accent-teal"
                      )}
                    >
                      {row.admission}
                    </Badge>
                  </TableCell>
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
                        {row.status === "Published" ? (
                          <DropdownMenuItem
                            className="text-red-400 focus:bg-red-500/10 focus:text-red-300 data-[highlighted]:bg-red-500/10 data-[highlighted]:text-red-300"
                            onSelect={() => setUnpublishTarget(row)}
                          >
                            Unpublish
                          </DropdownMenuItem>
                        ) : null}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>

      <AlertDialog
        open={unpublishTarget !== null}
        onOpenChange={(next) => {
          if (!next) setUnpublishTarget(null);
        }}
      >
        <AlertDialogContent className={cn(adminDialog, "max-w-md")}>
          <AlertDialogHeader>
            <AlertDialogTitle className={adminDialogTitle}>Unpublish concert?</AlertDialogTitle>
            <AlertDialogDescription className={adminDialogDesc}>
              {unpublishTarget ? (
                <>
                  <span className="text-gray-300">
                    {unpublishTarget.artist}
                  </span>{" "}
                  will be hidden from the public site. You can publish it again later.
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
              onClick={() => setUnpublishTarget(null)}
            >
              Unpublish
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AdminConcerts;
