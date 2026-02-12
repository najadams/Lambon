"use client";

import { ViewProvider } from "@/context/ViewContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ViewProvider>{children}</ViewProvider>;
}
