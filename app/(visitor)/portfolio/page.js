const PortfolioPage = () => {
  return (
    <div class="bg-slate-950 text-white antialiased">
      {/* <!-- Background Glow --> */}
      <div class="fixed inset-0 -z-10 overflow-hidden">
        <div class="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#33B6EF]/10 blur-[160px] rounded-full"></div>
        <div class="absolute bottom-[-250px] right-[-120px] w-[600px] h-[600px] bg-indigo-500/10 blur-[180px] rounded-full"></div>
      </div>

      <main class="max-w-6xl mx-auto px-6 py-20">
        {/* <!-- HERO --> */}
        <div class="text-center max-w-3xl mx-auto mb-16">
          <p class="text-[#33B6EF] text-sm tracking-widest uppercase">
            Portfolio
          </p>

          <h1 class="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            A collection of
            <span class="text-white/60">design & publishing work</span>
          </h1>

          <p class="mt-5 text-white/60">
            Showcasing book formatting, UI design, and publishing systems built
            for modern authors and SaaS platforms.
          </p>
        </div>

        {/* <!-- GRID --> */}
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* <!-- ITEM --> */}
          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>

            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              Kindle Book Formatting
            </h3>

            <p class="text-sm text-white/60 mt-1">
              Professional EPUB & KDP interior design.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>

            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              Print Book Layout
            </h3>

            <p class="text-sm text-white/60 mt-1">
              Paperback design optimized for Amazon KDP.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>

            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              SaaS Dashboard UI
            </h3>

            <p class="text-sm text-white/60 mt-1">
              Modern admin panel interface design.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              Ebook Cover Design
            </h3>
            <p class="text-sm text-white/60 mt-1">
              High-conversion Amazon book covers.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              Blog UI System
            </h3>
            <p class="text-sm text-white/60 mt-1">
              Editorial SaaS blog layout design.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              WordPress Plugin UI
            </h3>
            <p class="text-sm text-white/60 mt-1">
              Custom admin dashboard interface.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              Landing Page Design
            </h3>
            <p class="text-sm text-white/60 mt-1">
              Conversion-focused SaaS landing pages.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              ePub Conversion System
            </h3>
            <p class="text-sm text-white/60 mt-1">
              Automated ebook formatting workflow.
            </p>
          </a>

          <a
            href="#"
            class="group relative rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div class="h-40 rounded-xl bg-gradient-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 class="mt-4 text-lg font-medium group-hover:text-[#33B6EF] transition">
              Book Interior System
            </h3>
            <p class="text-sm text-white/60 mt-1">
              Scalable multi-format publishing system.
            </p>
          </a>
        </div>

        {/* <!-- SEE MORE BUTTON --> */}
        <div class="text-center mt-14">
          <button class="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:border-[#33B6EF]/40 hover:text-[#33B6EF] hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)] transition">
            See More Projects
          </button>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;
