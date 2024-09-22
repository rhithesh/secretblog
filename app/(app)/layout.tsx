import { checkAuth } from "@/lib/auth/utils";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkAuth();
  return (
    <main>
      <div className="flex h-screen">
        <main className="flex-1 md:p-8 pt-2 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
      <Toaster richColors />
    </main>
  );
}
