"use client";
import Image from "next/image";

export default function AboutPage() {
  const stories = [
    {
      name: "Ferdousi Akter",
      role: "Operations Manager",
      image: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/faq.8116aa7d.svg",
      details:
        "Ferdousi is the operational backbone of Proghive Publishing. She manages project timelines, client communications, and ensures every order moves seamlessly from intake to delivery. Her organisational precision keeps the studio running at full capacity without ever compromising on quality.",
      tags: [
        "Project Coordination",
        "Client Relations",
        "Quality Assurance",
        "Deadline Management",
        "Reporting",
      ],
    },
    {
      name: "Imran Hossain Nayem",
      role: "Type Setter",
      image: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/faq.8116aa7d.svg",
      details: "iBOS Limited",
      tags: [
        "Project Coordination",
        "Client Relations",
        "Quality Assurance",
        "Deadline Management",
        "Reporting",
      ],
    },
    {
      name: "Mehedi Hasan",
      role: "Cover Designer",
      image: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/faq.8116aa7d.svg",
      details: "iBOS Limited",
      tags: [
        "Project Coordination",
        "Client Relations",
        "Quality Assurance",
        "Deadline Management",
        "Reporting",
      ],
    },
  ];
  const testimonials = [
    {
      init: "SM",
      color: "from-indigo-600 to-violet-600",
      name: "Sarah Mitchell",
      role: "Romance Author · 12 Books",
      quote:
        "Jahid's eye for detail is extraordinary. The interior layouts feel truly bespoke — my readers notice the quality.",
    },
    {
      init: "DC",
      color: "from-sky-600 to-cyan-600",
      name: "David Chen",
      role: "Business Coach",
      quote:
        "Ferdousi kept me informed at every stage. Communication was flawless and the result was better than anything I'd imagined.",
    },
    {
      init: "AB",
      color: "from-violet-600 to-purple-700",
      name: "Amanda Brooks",
      role: "Indie Self-Publisher",
      quote:
        "The Proghive team made my first book feel like a professionally published title.",
    },
    {
      init: "MW",
      color: "from-emerald-600 to-teal-600",
      name: "Marcus Williams",
      role: "KDP Author · 40+ Titles",
      quote:
        "Nobody matches consistency and platform knowledge. They are simply the best.",
    },
    {
      init: "PS",
      color: "from-rose-600 to-pink-600",
      name: "Priya Sharma",
      role: "Children's Book Author",
      quote:
        "Project timeline was managed brilliantly and everything was delivered early.",
    },
    {
      init: "JO",
      color: "from-amber-600 to-orange-600",
      name: "James O'Connor",
      role: "Memoir Author",
      quote:
        "Jahid walked me through everything and the final book moved me to tears.",
    },
  ];
  const skills = [
    "Amazon KDP",
    "IngramSpark",
    "EPUB 3.0",
    "InDesign",
    "Photoshop",
    "Kindle Create",
    "HTML / CSS",
    "React",
    "NextJS",
    "Node.js",
  ];
  return (
    <>
      <div className="bg-slate-900 py-20">
        <div className="container mx-auto">
          {/* SECTION 1 */}
          <section className="py-20 px-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">
              Founder & Chief Designer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="relative flex justify-center items-center border-r-0 md:border-r-4 border-amber-500">
                <div className="relative w-80 h-[400px]">
                  <div className="absolute top-12 left-8 w-full h-full bg-violet-400 border-4 border-white rounded-xl rotate-3" />

                  <Image
                    src="https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/jahid%20munshi.jpg"
                    alt="Jahid Munshi"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover rounded-2xl border-4 border-white shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  Jahid Munshi is a professional Book Layout Designer and
                  Publishing Specialist who has been shaping the self-publishing
                  industry since 2018. What started as a personal passion for
                  typography and print craft evolved into Proghive Publishing —
                  a full-service studio trusted by thousands of authors
                  worldwide.
                </p>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  With deep technical mastery across every major publishing
                  platform — from Amazon KDP and IngramSpark to Apple Books and
                  Kobo — Jahid brings an uncompromising eye for detail to every
                  project. He personally oversees quality control on every book
                  that leaves the studio, ensuring each file meets both platform
                  specifications and the highest aesthetic standards.
                </p>

                <div>
                  <h3 className="font-bold text-lg text-[#07A8ED]">
                    Jahid Munshi
                  </h3>
                  <p className="text-slate-400 text-sm">
                    Founder of Proghive Publishing
                  </p>
                </div>

                <h4 className="text-white font-semibold">Expertise & Tools</h4>

                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-lg text-slate-200 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section className="bg-[#0f172a] py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 opacity-0 animate-fadeIn">
                <Image
                  src="https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/faq.8116aa7d.svg"
                  alt="icon"
                  width={96}
                  height={96}
                  priority
                  style={{ height: "auto" }}
                  className="mx-auto mb-6"
                />

                <h2 className="text-white text-4xl font-bold mb-4">
                  Small Team, Exceptional Output
                </h2>

                <p className="text-slate-400">
                  Behind every perfectly formatted book is a dedicated team.
                </p>
              </div>

              {/* CARDS */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stories.map((story, index) => (
                  <div
                    key={index}
                    className="group relative bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-300 opacity-0 animate-fadeUp"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={500}
                      height={300}
                      loading="lazy"
                      className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="p-5 space-y-4">
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {story.name}
                        </h3>

                        <p className="text-indigo-400 text-sm">{story.role}</p>
                      </div>

                      <p className="text-slate-400 text-sm">{story.details}</p>

                      <div className="flex flex-wrap gap-2">
                        {story.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-[11px] uppercase rounded-full bg-slate-800 text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3 */}
          <section className="bg-[#0f172a] py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Image
                  src="https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/peep1.f4841716.svg"
                  alt="icon"
                  width={96}
                  height={96}
                  priority
                  style={{ height: "auto" }}
                  className="mx-auto mb-6"
                />

                <h2 className="text-white text-4xl font-bold mb-4">
                  Our Core Values
                </h2>

                <p className="text-slate-400">
                  Four principles that guide every book, every client, every
                  decision we make.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card-1 */}
                <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all">
                  <div className="grid gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-slate-600">
                      🎯
                    </div>
                    <h3 className="text-white font-bold">Precision First</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Every margin, glyph, and embed is checked twice. Platform
                      compliance is not optional — it is the starting point.
                    </p>
                  </div>
                </div>
                {/* card-2 */}
                <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all">
                  <div className="grid gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-slate-600">
                      🤝
                    </div>
                    <h3 className="text-white font-bold">Author Partnership</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      We don't process orders — we collaborate on books. Your
                      creative vision is the brief; we are the technical
                      execution.
                    </p>
                  </div>
                </div>
                {/* card-3 */}
                <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all">
                  <div className="grid gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-slate-600">
                      ⚡
                    </div>
                    <h3 className="text-white font-bold">Reliable Speed</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Launch timelines matter. Standard turnaround is 3–5 days;
                      rush delivery in 24–48 hrs — without sacrificing quality.
                    </p>
                  </div>
                </div>
                {/* card-4 */}
                <div className="bg-[#1e293b] p-8 rounded-3xl border border-slate-700 hover:border-indigo-500 transition-all">
                  <div className="grid gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-slate-600">
                      📈
                    </div>
                    <h3 className="text-white font-bold">Continuous Growth</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                      Publishing standards evolve. We invest in staying ahead —
                      new tools, new specs, new skills — so your book stays
                      competitive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* SECTION 4 */}
          <section class="py-14">
            <div class="max-w-5xl mx-auto px-5 sm:px-8 text-center reveal">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-[.18em] mb-8">
                Publishing Platforms We Work With
              </p>
              <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                <div class="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  <span class="text-xl">📦</span>
                  <span class="font-semibold text-sm">Amazon KDP</span>
                </div>
                <div class="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  <span class="text-xl">📚</span>
                  <span class="font-semibold text-sm">IngramSpark</span>
                </div>
                <div class="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  <span class="text-xl">🍎</span>
                  <span class="font-semibold text-sm">Apple Books</span>
                </div>
                <div class="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  <span class="text-xl">📖</span>
                  <span class="font-semibold text-sm">Kobo</span>
                </div>
                <div class="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  <span class="text-xl">🏬</span>
                  <span class="font-semibold text-sm">Barnes &amp; Noble</span>
                </div>
                <div class="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  <span class="text-xl">📕</span>
                  <span class="font-semibold text-sm">Lulu</span>
                </div>
                <div class="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  <span class="text-xl">📗</span>
                  <span class="font-semibold text-sm">Draft2Digital</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 */}
          <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10 text-center">
            <Image
              src="https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/faq.8116aa7d.svg"
              alt="icon"
              width={96}
              height={96}
              priority
              style={{ height: "auto" }}
              className="mx-auto mb-6"
            />
            <div className="text-indigo-400 text-sm flex items-center justify-center gap-2">
              <span className="w-4 h-px bg-indigo-400" />
              What Authors Say About the Team
            </div>

            <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
              Trusted by Authors Worldwide
            </h2>
          </div>

          {/* CARDS */}
          <div className="relative px-5 sm:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto pb-4 scroll-smooth">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 rounded-2xl p-5 border border-slate-800 bg-slate-900"
                >
                  <div className="text-yellow-400 text-sm mb-3">★★★★★</div>

                  <p className="text-slate-400 text-sm leading-relaxed italic mb-5">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs bg-gradient-to-br ${t.color}`}
                    >
                      {t.init}
                    </div>

                    <div>
                      <p className="text-white font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-slate-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
                Check More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ANIMATION STYLES */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.6s ease forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </>
  );
}
