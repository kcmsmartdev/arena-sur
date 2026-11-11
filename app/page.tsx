import About from "@/components/inicio/About";
import Hero from "@/components/inicio/Hero";


export default function Home() {
  return (
    <main className="flex flex-col" >
      <Hero />
      <About />
    </main>
  );
}
