import './globals.css';

export const metadata = {
  title: 'Team Lips',
  description: 'The Official Home of Team Lips. Join to learn about our history, people and next events.',
};

import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="logo">
            👄 Team Lips
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/profiles">Profiles</Link>
            <Link href="/merch">Merch</Link>
            <Link href="/history">History</Link>
            <Link href="/events">Events</Link>
          </div>
        </nav>
        <main className="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
