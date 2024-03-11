import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Outcome 4 Reflection</h1>
      <div>
        <p>Nothing here yet. Press Save to continue!</p>
      </div>
      <Link href="/edits/1"><button>Save</button></Link>
    </main>
  );
}
