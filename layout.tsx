import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Kite", description: "Local intelligence, everywhere." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="pt-BR"><body>{children}</body></html>; }
