import Link from "next/link";
import getPortfolio from "../../actions/portfolio/portfolio.js";
import SectionHeader from "../ui/SectionHeader";

const Portfolio = async () => {
  const projects = await getPortfolio();
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-16 md:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-87.5 w-87.5 sm:h-125 sm:w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-62.5 w-62.5 sm:h-100 sm:w-100 rounded-full bg-blue-500/10 blur-[100px] sm:blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <SectionHeader
          badge="✨ Our Portfolio"
          title="Publishing Excellence"
          highlightedText="Crafted For Authors"
          description="Discover premium publishing projects designed with precision, readability, and industry-leading standards for modern authors."
          align="center"
        />

        {/* FILTERS */}
        <div className="mt-10 sm:mt-14 flex flex-wrap justify-center gap-2 sm:gap-3">
          {["All", "Paperback", "Hardcover", "eBook", "EPUB"].map(
            (tab, index) => (
              <button
                key={tab}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "border border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/20 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* GRID */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/3 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]"
            >
              {/* THUMBNAIL */}
              <div className="relative h-60 sm:h-75 lg:h-85 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${project.gradient}`}
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 text-center">
                  <div>
                    <div className="mx-auto mb-4 sm:mb-5 h-px w-10 sm:w-12 bg-white/40" />

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white">
                      {project.title}
                    </h3>

                    <div className="mx-auto mt-4 sm:mt-5 h-px w-10 sm:w-12 bg-white/40" />
                  </div>
                </div>

                {/* HOVER */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                  <button className="rounded-xl sm:rounded-2xl border border-white/20 bg-white/10 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white/20 cursor-pointer">
                    View Project
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5 lg:p-6">
                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[10px] sm:text-xs font-medium text-cyan-300">
                  {project.category}
                </span>

                <h4 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h4>

                <p className="mt-2 text-xs sm:text-sm leading-6 text-slate-400">
                  Professional publishing project crafted with industry-standard
                  formatting and design excellence.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/15 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
          >
            Explore Full Portfolio
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
