"use client";

export default function ThemeProviderClient({ children }) {
  // Theme toggling removed; this keeps a client boundary for potential client-only children
  return <>{children}</>;
}
