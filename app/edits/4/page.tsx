import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center">
      <h1>Outcome 4 Reflection</h1>
      <div>
        <p>Through the course of ENGL 131, I’ve demonstrated my mastery in outcome 4. </p>
        <p>Outcome 4 is defined in our terms as the ability to receive feedback from audiences, peers, and oneself, as well as the ability to implement it. </p>
        <br /><br />
        <p>Major Project 1 is by far the best example of these skills. My project was a photo essay detailing my experiences with conservation and parks over time. </p>
        <p>While creating outlines for our projects, we had peer feedback sessions, where we communicated with each other about our projects, and what we thought other people did well/what they could think about implementing. </p> 
        <p className="remove">Other people’s projects were also really interesting! I particularly liked a website one of my peers made. </p>
        <p className="add">During our peer feedback sessions, some of the most valuable feedback isn’t any of the nitty-gritty grammatical or formatting issues, it is the nature of your project; it is the feedback related to how you use different modes, and whether you’re using them to their full potential. </p>
        <p className="add">For example, I got feedback based on how I could place the text next to the photos to associate the text with the photos, which I ended up implementing. </p>
      </div>
      <Link href="/edits/5"><button>Save</button></Link>
    </main>
  );
}
