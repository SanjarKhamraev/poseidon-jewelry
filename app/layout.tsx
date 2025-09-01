import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Poseidon Jewelry",
  description: "Online Jewelry Store"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
