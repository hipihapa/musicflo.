import { Link } from "react-router-dom";
import { Music, ArrowLeft } from "lucide-react";
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
    <div className="dark min-h-screen bg-gradient-to-br from-background via-background to-muted/30 font-poppins flex flex-col items-center justify-center p-4">
      <Link
        to="/"
        className="absolute left-4 top-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to site
      </Link>
      <Card className="w-full max-w-md border-border bg-card shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Music className="h-7 w-7 text-accent-teal" />
          </div>
          <CardTitle className="text-2xl">Admin sign in</CardTitle>
          <CardDescription>
            Sign in to manage concerts, articles, and artists. (UI only — wire Supabase later.)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="admin-email">Email</Label>
            <Input
              id="admin-email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="admin-password">Password</Label>
              <button
                type="button"
                className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <Input
              id="admin-password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button className="w-full" type="button" asChild>
            <Link to="/admin">Continue to dashboard</Link>
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            This button skips auth for layout preview.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AdminLogin;
