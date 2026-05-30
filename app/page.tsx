import About from "../components/sections/About.js";
import Achievements from "../components/sections/Achievements.js";
import Contact from "../components/sections/Contact.js";
import FAQ from "../components/sections/FAQ.js";
import Hero from "../components/sections/Hero.js";
import Portfolio from "../components/sections/Portfolio.js";
import Services from "../components/sections/Services.js";
import Testimonials from "../components/sections/Testimonials.js";

export default function Home() {
  return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <main className="">
      <Hero />
      <div className="container mx-auto">
        <Services />
        <About />
        <Portfolio />
        <FAQ />
      </div>
      <Testimonials />
      <Achievements />
      <Contact />
    </main>
    // </div>
  );
}
