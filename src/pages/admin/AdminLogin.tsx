import { Link } from "react-router-dom";
import { Music, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  adminCard,
  adminInput,
  adminLabel,
  adminMuted,
  adminPrimaryBtn,
  adminShell,
} from "@/lib/admin-ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AdminLogin = () => {
  return (
    <div
      className={cn(
        adminShell,
        "flex flex-col items-center justify-center bg-gradient-to-br from-dark-bg via-dark-bg to-dark-card p-4"
      )}
    >
      <Link
        to="/"
        aria-label="Back to site"
        className={cn(
          "absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gray-800/50 bg-dark-card text-gray-300 shadow-md shadow-black/25 transition-colors hover:border-accent-teal/30 hover:bg-white/5 hover:text-accent-teal"
        )}
      >
        <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
      </Link>
      <Card className={cn("w-full max-w-md shadow-xl", adminCard)}>
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-accent-teal/30">
            <Music className="h-7 w-7 text-accent-teal" />
          </div>
          <CardTitle className="text-2xl text-white">Admin sign in</CardTitle>
          <CardDescription className={adminMuted}>
            Sign in to manage concerts, articles, and artists.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-email" className={adminLabel}>
              Email
            </Label>
            <Input
              id="admin-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              className={adminInput}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admin-password" className={adminLabel}>
              Password
            </Label>
            <Input
              id="admin-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              className={adminInput}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className={cn("min-w-[10rem] rounded-full px-10", adminPrimaryBtn)} type="button" asChild>
            <Link to="/admin">Continue</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLogin;
