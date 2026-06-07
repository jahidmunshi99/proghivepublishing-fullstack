const PortfolioPage = () => {
  return (
    <div className="px-15 py-20 dark">
      <div className="container mx-auto px-3 mt-20">
        {/* <!-- HERO --> */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-green-300 leading-tight">
            A collection of{" "}
            <span className="text-white/60">design & publishing work</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-white/60 max-w-2xl mx-auto">
            Showcasing book formatting, UI design, and publishing systems built
            for modern authors and SaaS platforms.
          </p>
        </div>

        {/* <!-- GRID --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {/* <!-- ITEM --> */}
          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>

            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              Kindle Book Formatting
            </h3>

            <p className="text-sm text-white/60 mt-1">
              Professional EPUB & KDP interior design.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>

            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              Print Book Layout
            </h3>

            <p className="text-sm text-white/60 mt-1">
              Paperback design optimized for Amazon KDP.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>

            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              SaaS Dashboard UI
            </h3>

            <p className="text-sm text-white/60 mt-1">
              Modern admin panel interface design.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              Ebook Cover Design
            </h3>
            <p className="text-sm text-white/60 mt-1">
              High-conversion Amazon book covers.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              Blog UI System
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Editorial SaaS blog layout design.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              WordPress Plugin UI
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Custom admin dashboard interface.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              Landing Page Design
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Conversion-focused SaaS landing pages.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              ePub Conversion System
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Automated ebook formatting workflow.
            </p>
          </a>

          <a
            href="#"
            className="group relative rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur-sm hover:border-[#33B6EF]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)]"
          >
            <div className="h-44 sm:h-48 rounded-xl bg-linear-to-br from-[#33B6EF]/10 to-indigo-500/10 border border-white/10"></div>
            <h3 className="mt-4 text-base sm:text-lg font-medium group-hover:text-[#33B6EF] transition">
              Book Interior System
            </h3>
            <p className="text-sm text-white/60 mt-1">
              Scalable multi-format publishing system.
            </p>
          </a>
        </div>

        {/* <!-- SEE MORE BUTTON --> */}
        {/* <div className="text-center mt-10 md:mt-14">
        <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-sm font-medium text-white/80 hover:border-[#33B6EF]/40 hover:text-[#33B6EF] hover:shadow-[0_10px_40px_rgba(51,182,239,0.08)] transition">
          See More Projects
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default PortfolioPage;
