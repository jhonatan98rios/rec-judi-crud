import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Audience from "@/components/Audiance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Hero />
      <Problem />
      <Process />
      <Audience />
      <Contact />
      <Footer />
    </main>
  );
}
