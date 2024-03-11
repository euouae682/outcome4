import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Outcome 4 Reflection</h1>
      <div>
        <p className="add">Through the course of ENGL 131, I’ve demonstrated my mastery in outcome 4. </p>
      </div>
      <Link href="/edits/2"><button>Save</button></Link>
    </main>
  );
}
