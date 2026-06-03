const BlogPage = () => {
  return (
    <section className="relative bg-slate-950 overflow-hidden pt-28 pb-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#33B6EF]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* HERO */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[#33B6EF] text-sm font-medium tracking-wide">
            PROGHIVE BLOG
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
            Insights for modern publishing,
            <span className="text-white/60"> design & SaaS growth</span>
          </h1>

          <p className="mt-5 text-white/60 text-base">
            Learn how professional authors and publishers build scalable book
            workflows, design systems, and digital publishing strategies.
          </p>
        </div>

        {/* FEATURED POST */}
        <a
          href="/blog-single.html"
          className="group block max-w-5xl mx-auto mb-14 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="text-xs text-[#33B6EF] mb-3">
                FEATURED ARTICLE
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-[#33B6EF] transition">
                Building scalable publishing workflows with AI
              </h2>

              <p className="text-white/60 mt-3">
                Automate Kindle formatting, metadata generation, and publishing
                pipelines using modern AI tools and structured workflows.
              </p>

              <div className="mt-5 flex gap-4 text-xs text-white/40">
                <span>Jan 2026</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>SaaS</span>
              </div>
            </div>

            <div className="w-full md:w-40 h-28 rounded-xl bg-gradient-to-br from-[#33B6EF]/20 to-indigo-500/20 border border-white/10" />
          </div>
        </a>

        {/* GRID HEADER */}
        <div className="max-w-5xl mx-auto flex items-center justify-between mb-6">
          <h3 className="text-white text-lg font-medium">Latest Articles</h3>
          <span className="text-white/40 text-sm">12 posts</span>
        </div>

        {/* GRID */}
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
          {/* CARD */}
          {[
            {
              tag: "Publishing",
              title: "How to format a Kindle book like a pro",
              desc: "Modern ebook formatting techniques for Amazon KDP.",
              date: "Jan 2026",
              read: "5 min",
            },
            {
              tag: "Design",
              title: "Clean book layout principles",
              desc: "Improve readability and typography for books.",
              date: "Jan 2026",
              read: "7 min",
            },
            {
              tag: "SaaS",
              title: "AI in publishing workflows",
              desc: "Automate publishing systems with modern tools.",
              date: "Jan 2026",
              read: "6 min",
            },
          ].map((post, i) => (
            <a
              key={i}
              href="/blog-single.html"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
            >
              <div className="text-xs text-[#33B6EF] mb-3">{post.tag}</div>

              <h2 className="text-lg font-semibold text-white group-hover:text-[#33B6EF] transition">
                {post.title}
              </h2>

              <p className="text-sm text-white/60 mt-2">{post.desc}</p>

              <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                <span>{post.date}</span>
                <span>{post.read}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
