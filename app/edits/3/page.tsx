import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Outcome 4 Reflection</h1>
      <div>
        <p>Through the course of ENGL 131, I’ve demonstrated my mastery in outcome 4.</p>
        <p>Outcome 4 is </p>
        <p className="add">defined in our terms as the </p>
        <p>ability to receive feedback from audiences, peers, and oneself, as well as the ability to implement it. </p>
        <br /><br />
        <p className="add">Major Project 1 is by far the best example of these skills. My project was a photo essay detailing my experiences with conservation and parks over time. </p>
        <p className="add">While creating outlines for our projects, we had peer feedback sessions, where we communicated with each other about our projects, and what we thought other people did well/what they could think about implementing. Other people’s projects were also really interesting! I particularly liked a website one of my peers made. </p>
      </div>
      <Link href="/edits/4"><button>Save</button></Link>
    </main>
  );
}
