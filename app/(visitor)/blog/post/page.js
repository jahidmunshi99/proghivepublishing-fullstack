const PostPage = () => {
  return (
    <div className="bg-slate-950 text-white antialiased">
      {/* Glow Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#33B6EF]/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-250px] right-[-120px] w-[600px] h-[600px] bg-indigo-500/10 blur-[180px] rounded-full" />
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        {/* Back */}
        <a
          href="/blog"
          className="inline-flex items-center text-sm text-white/50 hover:text-[#33B6EF] transition"
        >
          ← Back to Blog
        </a>

        <div className="grid lg:grid-cols-12 gap-12 mt-10">
          {/* ARTICLE */}
          <article className="lg:col-span-8">
            {/* Category */}
            <p className="text-[#33B6EF] text-xs tracking-[0.2em] uppercase font-medium">
              Publishing Guide
            </p>

            {/* Title */}
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              How to format a Kindle book like a professional publisher
            </h1>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/40">
              <span>Jan 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Proghive Editorial</span>
            </div>

            {/* Hero */}
            <div className="mt-10 h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10" />

            {/* Content */}
            <div className="mt-10 space-y-7 text-white/70 text-[15.5px] leading-7 max-w-[720px]">
              <p>
                Kindle formatting is not just design work — it is a structured
                publishing system that defines readability, accessibility, and
                reader satisfaction across devices.
              </p>

              <p>
                Modern publishing demands consistency in typography, spacing,
                and navigation. A well-formatted book should feel effortless to
                read on any device.
              </p>

              {/* Callout */}
              <div className="p-5 rounded-xl border border-[#33B6EF]/20 bg-white/5">
                <p className="text-white/80 text-sm">
                  <span className="text-[#33B6EF] font-medium">Pro Tip:</span>{" "}
                  Always validate EPUB/KPF files in Kindle Previewer before
                  publishing.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-white mt-10">
                1. Build a clean structure first
              </h2>

              <p>
                Start with proper heading hierarchy. Avoid manual spacing and
                rely on consistent styles. This ensures your book behaves
                correctly across all reading devices.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-10">
                2. Typography defines reading experience
              </h2>

              <p>
                Choose readable fonts, balanced line height, and proper margins.
                Good typography disappears and lets the content breathe.
              </p>

              {/* Quote */}
              <blockquote className="border-l-2 border-[#33B6EF] pl-4 italic text-white/60">
                Good formatting should be invisible — the reader should only
                experience the story.
              </blockquote>

              <h2 className="text-2xl font-semibold text-white mt-10">
                3. Export with precision
              </h2>

              <p>
                Always test your final output before publishing. Even small
                structural issues can break navigation or readability on Kindle
                devices.
              </p>

              {/* Checklist */}
              <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                <ul className="space-y-2 text-sm text-white/70">
                  <li>✔ Validate EPUB/KPF file</li>
                  <li>✔ Check chapter navigation</li>
                  <li>✔ Ensure spacing consistency</li>
                  <li>✔ Test across devices</li>
                </ul>
              </div>
            </div>

            {/* Author */}
            <div className="mt-14 flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#33B6EF] to-indigo-500" />

              <div>
                <h4 className="font-medium">Proghive Editorial Team</h4>
                <p className="text-white/50 text-sm mt-1">
                  We help authors and publishers build world-class book layouts
                  and scalable publishing systems.
                </p>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:col-span-4 space-y-6">
            {/* TOC */}
            <div className="sticky top-24 p-5 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium mb-4">On this page</h3>

              <ul className="space-y-3 text-sm text-white/60">
                <li className="hover:text-[#33B6EF] transition cursor-pointer">
                  1. Clean structure
                </li>
                <li className="hover:text-[#33B6EF] transition cursor-pointer">
                  2. Typography
                </li>
                <li className="hover:text-[#33B6EF] transition cursor-pointer">
                  3. Export process
                </li>
              </ul>
            </div>

            {/* Related */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="text-sm font-medium mb-4">Related articles</h3>

              <div className="space-y-4">
                <a href="#" className="block group">
                  <p className="text-sm text-white/70 group-hover:text-[#33B6EF] transition">
                    Clean book layout principles for modern publishing
                  </p>
                  <span className="text-xs text-white/40">7 min read</span>
                </a>

                <a href="#" className="block group">
                  <p className="text-sm text-white/70 group-hover:text-[#33B6EF] transition">
                    AI in publishing workflows
                  </p>
                  <span className="text-xs text-white/40">6 min read</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default PostPage;
