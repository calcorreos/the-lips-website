import Link from 'next/link';

export default function Home() {
  return (
    <div className="hero">
      <h1>Welcome to The Lips 👄</h1>
      <p>
        The official digital home for our friend group. Explore our profiles, read our story, 
        and stay tuned for upcoming merch drops!
      </p>
      <Link href="/profiles" className="btn">
        Meet The Lips
      </Link>
    </div>
  );
}
