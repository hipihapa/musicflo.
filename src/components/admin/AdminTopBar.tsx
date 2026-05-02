import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AdminTopBarProps = {
  title: string;
  description?: string;
};

const AdminTopBar = ({ title, description }: AdminTopBarProps) => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-border bg-card/50 px-6 backdrop-blur-sm">
      <div className="min-w-0">
        <h1 className="truncate text-lg font-semibold text-foreground">{title}</h1>
        {description ? (
          <p className="truncate text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-2">
        <div className="relative hidden max-w-xs sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search…"
            className="h-9 w-56 pl-9 bg-background"
            readOnly
          />
        </div>
        <Button variant="ghost" size="icon" className="text-muted-foreground" type="button">
          <Bell className="h-5 w-5" />
        </Button>
        <div
          className="hidden h-9 w-9 shrink-0 rounded-full border border-border bg-muted sm:block"
          aria-hidden
        />
      </div>
    </header>
  );
};

export default AdminTopBar;
