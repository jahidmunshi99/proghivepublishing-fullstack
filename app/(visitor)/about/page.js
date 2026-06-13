"use client";
import Image from "next/image";

export default function AboutPage() {
  const teams = [
    {
      name: "Ferdousi Akter",
      role: "Operations Manager",
      image:
        "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/team_members/member1.png",
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
      role: "Book Designer || Formatting Expert",
      image:
        "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/team_members/imran.jpg",
      details:
        "Imran leads the day-to-day production workflow at Proghive, coordinating between formatters, designers, and clients to ensure every project meets its deadline at the highest possible standard. With deep technical knowledge of book production, he mentors the team and drives continuous improvement across all service lines.",
      tags: [
        "Team Oversight",
        "Workflow Design",
        "Technical Support",
        "Process Improvement",
        "Production QC",
      ],
    },
    {
      name: "Mehedi Hasan",
      role: "Cover Designer",
      image:
        "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/team_members/mehedi.jpg",
      details:
        "Mehedi leads the day-to-day production workflow at Proghive, coordinating between formatters, designers, and clients to ensure every project meets its deadline at the highest possible standard. With deep technical knowledge of book production, he mentors the team and drives continuous improvement across all service lines.",
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
  //   const platforms = [
  //     {
  //       name: "apple",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider1.png",
  //     },
  //     {
  //       name: "kobo",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider2.png",
  //     },
  //     {
  //       name: "ingramspark",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider3.png",
  //     },
  //     {
  //       name: "amazon kdp",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider8.png",
  //     },
  //     {
  //       name: "barner and noble",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider4.png",
  //     },
  //     {
  //       name: "scribd",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider5.png",
  //     },
  //     {
  //       name: "audible",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider6.png",
  //     },
  //     {
  //       name: "waterstone",
  //       link: "https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/platforms-logo/slider7.png",
  //     },
  //   ];

  return (
    <>
      <div className="bg-slate-900 py-20">
        <div className="container mx-auto">
          {/* SECTION 1 About Author */}
          <section className="py-20 px-6">
            <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">
              Founder & Chief Designer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Side */}
              <div className="relative flex justify-center items-center">
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
              {/* </div> */}
              {/* Right Side */}
              <div className="md:border-l-4 border-amber-500 pl-10 mt-15 md:mt-0">
                <div className="space-y-6 border-r-0">
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    Jahid Munshi is a professional Book Layout Designer and
                    Publishing Specialist who has been shaping the
                    self-publishing industry since 2018. What started as a
                    personal passion for typography and print craft evolved into
                    Proghive Publishing — a full-service studio trusted by
                    thousands of authors worldwide.
                  </p>

                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    With deep technical mastery across every major publishing
                    platform — from Amazon KDP and IngramSpark to Apple Books
                    and Kobo — Jahid brings an uncompromising eye for detail to
                    every project. He personally oversees quality control on
                    every book that leaves the studio, ensuring each file meets
                    both platform specifications and the highest aesthetic
                    standards.
                  </p>

                  <div>
                    <h3 className="font-bold text-lg text-[#07A8ED]">
                      Jahid Munshi
                    </h3>
                    <p className="text-slate-400 text-sm">
                      Founder of Proghive Publishing
                    </p>
                  </div>

                  <h4 className="text-white font-semibold">
                    Expertise & Tools
                  </h4>

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
            </div>
          </section>

          {/* SECTION 2 Team Members */}
          <section className="py-24 px-6">
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
                  Small Team, Exceptional Output
                </h2>

                <p className="text-slate-400">
                  Behind every perfectly formatted book is a dedicated team
                  member who cares as much about your book as you do.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {teams.map((member, index) => (
                  <article
                    key={index}
                    className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(0,255,255,0.12)]
          "
                  >
                    {/* IMAGE */}
                    <div className="relative overflow-hidden isolate">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={500}
                        height={500}
                        className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-100 will-change-transform
    "
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 text-left">
                      <h3 className="text-white text-xl font-semibold mb-1">
                        {member.name}
                      </h3>

                      <p className="text-cyan-300 text-sm mb-4">
                        {member.role}
                      </p>

                      <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {member.details}
                      </p>

                      {/* TAGS */}
                      <div className="flex flex-wrap gap-2">
                        {member.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="
                    px-3 py-1 text-xs
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-slate-200
                    backdrop-blur-md
                  "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3 service process*/}
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
          {/* SECTION 4 Platforms Logo  */}
          {/* <section className="py-14">
            <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center reveal">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[.18em] mb-8">
                Publishing Platforms We Work With
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                <div className="flex items-center gap-10 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer">
                  {platforms.map((icon, index) => (
                    <Image
                      key={index}
                      width={150}
                      height={200}
                      src={icon.link}
                      alt={icon.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section> */}

          {/* SECTION 5 review*/}
          <section>
            <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10 text-center">
              <Image
                src="https://filedn.com/lOXfwotSB8GQBNP1sHCYqFX/faq.8116aa7d.svg"
                alt="icon"
                width={96}
                height={96}
                priority
                className="mx-auto h-auto mb-6"
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
                    className="shrink-0 rounded-2xl p-5 border border-slate-800 bg-[#182234]"
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
                  See More ...
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
