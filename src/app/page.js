import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero">
      <h1>Welcome to Team Lips 👄</h1>
      <p>
        The Official Home of Team Lips. Join to learn about our history, people and next events.
      </p>
      <Link href="/profiles" className="btn">
        Meet Team Lips
      </Link>
    </div>
  );
}
