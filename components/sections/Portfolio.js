import Link from "next/link";

const projects = [
  {
    title: "The Silent Journey",
    category: "Paperback Formatting",
    gradient: "from-violet-500 to-indigo-600",
  },
  {
    title: "Business Blueprint",
    category: "Hardcover Formatting",
    gradient: "from-cyan-500 to-blue-700",
  },
  {
    title: "Digital Success",
    category: "Kindle eBook Formatting",
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    title: "Author Mastery",
    category: "EPUB Conversion",
    gradient: "from-orange-500 to-rose-600",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-15">
      {/* Background Glow */}{" "}
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
              ✨ Our Portfolio
            </span>

            <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Get a Sneak Peek
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Of Our Work
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Explore a collection of publishing projects crafted with
              precision, creativity, and industry-standard excellence.
            </p>
          </div>
        </div>
        {/* Filter Tabs */}
        <div className="mb-14 flex flex-wrap gap-3">
          {["All", "Paperback", "Hardcover", "eBook", "EPUB"].map(
            (tab, index) => (
              <button
                key={tab}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${
                  index === 0
                    ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-300"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/20 hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
        {/* Portfolio Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
            group
            overflow-hidden
            rounded-[28px]

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl

            transition-all
            duration-500

            hover:-translate-y-2
            hover:border-cyan-400/20
          "
            >
              {/* Preview */}
              <div className="relative h-96 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="flex h-full items-center justify-center px-8 text-center">
                    <div>
                      <div className="mx-auto mb-4 h-px w-10 bg-white/40" />

                      <h3 className="text-3xl font-bold leading-tight text-white">
                        {project.title.split(" ")[0]}
                        <br />
                        {project.title.split(" ").slice(1).join(" ")}
                      </h3>

                      <div className="mx-auto mt-4 h-px w-8 bg-white/30" />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="
                absolute
                inset-0

                flex
                items-center
                justify-center

                bg-black/50

                opacity-0

                backdrop-blur-md

                transition-all
                duration-500

                group-hover:opacity-100
              "
                >
                  <button
                    className="
                  rounded-2xl

                  border
                  border-white/20

                  bg-white/10

                  px-6
                  py-3

                  text-white

                  backdrop-blur-xl

                  transition-all

                  hover:bg-white/20
                "
                  >
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h4>

                <span className="text-sm font-medium text-cyan-300">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#"
            className="
          inline-flex
          items-center
          gap-2

          rounded-2xl

          border
          border-white/10

          bg-white/5

          px-8
          py-4

          text-white

          backdrop-blur-xl

          transition-all
          duration-300

          hover:border-cyan-400/20
          hover:bg-white/10
          hover:-translate-y-1
        "
          >
            See More Projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
