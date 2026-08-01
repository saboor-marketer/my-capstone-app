import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-200 p-4">
      <div className="flex flex-row justify-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/settings">Settings</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
