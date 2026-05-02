import { Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminInput, adminMuted, adminTopBar } from "@/lib/admin-ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AdminTopBarProps = {
  title: string;
  description?: string;
};

const AdminTopBar = ({ title, description }: AdminTopBarProps) => {
  return (
    <header className={cn("flex h-16 shrink-0 items-center justify-between gap-4 px-6", adminTopBar)}>
      <div className="min-w-0">
        <h1 className="truncate text-lg font-semibold text-white">{title}</h1>
        {description ? (
          <p className={cn("truncate text-sm", adminMuted)}>{description}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative hidden max-w-xs sm:block">
          <Search className={cn("absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2", adminMuted)} />
          <Input
            placeholder="Search…"
            className={cn("h-9 w-56 pl-9", adminInput)}
            readOnly
          />
        </div>
        <Button variant="ghost" size="icon" className={cn(adminMuted, "hover:bg-white/10 hover:text-white")} type="button">
          <Bell className="h-5 w-5" />
        </Button>
        <div
          className="hidden h-9 w-9 shrink-0 rounded-full border border-gray-700 bg-dark-card sm:block"
          aria-hidden
        />
      </div>
    </header>
  );
};

export default AdminTopBar;
