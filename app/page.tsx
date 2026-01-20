import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}
