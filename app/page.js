import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>NextJS Homework</h1>
      <ul>
        <li><Link href="/count">Counters</Link></li>
        <li><Link href="/githublink">About / GitHub</Link></li>
        <li><Link href="/store">Store</Link></li>
      </ul>
      <p>
        <a href="https://github.com/Jareskis/nextjs-assignment">GitHub Repo</a>
      </p>
    </main>
  );
}