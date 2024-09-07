import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login")
  return (
    <div>
      <h1>name</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
