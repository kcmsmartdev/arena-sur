import About from "@/components/inicio/About";
import Hero from "@/components/inicio/Hero";
import Services from "@/components/inicio/Services";
import Cta from "@/components/shared/Cta"

export default function Home() {
  return (
    <main className="flex flex-col" >
      <Hero />
      <About />
      <Services />
      <Cta />
    </main>
  );
}
