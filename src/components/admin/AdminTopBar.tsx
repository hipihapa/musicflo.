import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { adminMuted, adminTopBar } from "@/lib/admin-ui";

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
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-700 bg-dark-card text-gray-400"
        role="img"
        aria-label="Account"
      >
        <User className="h-4 w-4" aria-hidden />
      </div>
    </header>
  );
};

export default AdminTopBar;
