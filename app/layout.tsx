import './globals.css';

export const metadata = {
  title: 'POSEIDON JEWELRY',
  description: 'Online jewelry boutique',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
