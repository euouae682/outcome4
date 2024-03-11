import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Outcome 4 Reflection</h1>
      <div>
        <p>Through the course of ENGL 131, I’ve demonstrated my mastery in outcome 4. </p>
        <p className="add">Outcome 4 is ability to receive feedback from audiences, peers, and oneself, as well as the ability to implement it. </p>
      </div>
      <Link href="/edits/3"><button>Save</button></Link>
    </main>
  );
}
