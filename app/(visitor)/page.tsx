import { GetHomePageSections } from "../../actions/homepage_sections/homepage_sections.js";
import About from "../../components/sections/About.js";
import Contact from "../../components/sections/Contact.js";
import FAQ from "../../components/sections/FAQ.js";
import Hero from "../../components/sections/Hero.js";
import Portfolio from "../../components/sections/Portfolio.js";
import Services from "../../components/sections/Services.js";
import Testimonials from "../../components/sections/Testimonials.js";
import { SectionRenderer } from "../../components/shared/SectionRenderer.js";
import { getSectionMap } from "../../lib/getSectionMap.js";

export default async function Home() {
  const sections = await GetHomePageSections();
  const sectionMap = getSectionMap(sections);

  return (
    <main className="dark">
      {/* hero section */}
      <SectionRenderer config={sectionMap.hero} Component={Hero} />
      <div className="container mx-auto">
        {/* service section */}
        <SectionRenderer config={sectionMap.services} Component={Services} />
        {/* about section */}
        <SectionRenderer config={sectionMap.about} Component={About} />
        {/* portfoli section */}
        <SectionRenderer config={sectionMap.portfolio} Component={Portfolio} />
        {/* faq section */}
        <SectionRenderer config={sectionMap.faq} Component={FAQ} />
        {/* testimonial section */}
        <SectionRenderer
          config={sectionMap.testimonials}
          Component={Testimonials}
        />
        {/* contacts section */}
        <SectionRenderer config={sectionMap.contact} Component={Contact} />
      </div>
    </main>
  );
}
