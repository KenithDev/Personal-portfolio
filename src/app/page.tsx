import Header from "./Header";
import Hero from "./HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <Hero />
    </div>
  );
}
