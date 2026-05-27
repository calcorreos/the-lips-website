import './globals.css';

export const metadata = {
  title: 'The Lips',
  description: 'The official website for The Lips friend group.',
};

import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="logo">
            👄 The Lips
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/profiles">Profiles</Link>
          </div>
        </nav>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
