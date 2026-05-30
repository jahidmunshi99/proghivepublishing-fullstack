import Link from "next/link";
const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-950">
      {/* <!-- Section Header --> */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
            — Our Portfolio
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Get a Sneak Peek of Our Work
          </h2>

          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            You&aposll be amazed at how professionally we cater to our clients,
            delivering exactly what they need.
          </p>
        </div>
      </div>

      {/* <!-- Filter Tabs --> */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-medium shadow-lg">
          All
        </button>

        <button className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 transition">
          Paperback
        </button>

        <button className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 transition">
          Hardcover
        </button>

        <button className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 transition">
          eBook
        </button>

        <button className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-600 transition">
          EPUB
        </button>
      </div>

      {/* <!-- Portfolio Grid --> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* <!-- Card 1 --> */}
        <div className="group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-96 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-10 h-px bg-white/40 mx-auto mb-4"></div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  The Silent
                  <br />
                  Journey
                </h3>

                <div className="w-8 h-px bg-white/30 mx-auto mt-4"></div>
              </div>
            </div>

            {/* <!-- Hover Overlay --> */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-105 transition">
                View Project
              </button>
            </div>
          </div>

          <div className="p-6">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              The Silent Journey
            </h4>

            <span className="text-sm font-medium text-indigo-600">
              Paperback Formatting
            </span>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-96 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-cyan-500 to-blue-700 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-10 h-px bg-white/40 mx-auto mb-4"></div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  Business
                  <br />
                  Blueprint
                </h3>

                <div className="w-8 h-px bg-white/30 mx-auto mt-4"></div>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold">
                View Project
              </button>
            </div>
          </div>

          <div className="p-6">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Business Blueprint
            </h4>

            <span className="text-sm font-medium text-indigo-600">
              Hardcover Formatting
            </span>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-96 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-10 h-px bg-white/40 mx-auto mb-4"></div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  Digital
                  <br />
                  Success
                </h3>

                <div className="w-8 h-px bg-white/30 mx-auto mt-4"></div>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold">
                View Project
              </button>
            </div>
          </div>

          <div className="p-6">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Digital Success
            </h4>

            <span className="text-sm font-medium text-indigo-600">
              Kindle eBook Formatting
            </span>
          </div>
        </div>
        {/* <!-- Card 3 --> */}
        <div className="group overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
          <div className="relative h-96 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-10 h-px bg-white/40 mx-auto mb-4"></div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  Digital
                  <br />
                  Success
                </h3>

                <div className="w-8 h-px bg-white/30 mx-auto mt-4"></div>
              </div>
            </div>

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold">
                View Project
              </button>
            </div>
          </div>

          <div className="p-6">
            <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Digital Success
            </h4>

            <span className="text-sm font-medium text-indigo-600">
              Kindle eBook Formatting
            </span>
          </div>
        </div>
      </div>

      {/* <!-- See More --> */}
      <div className="text-center mt-14">
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-indigo-500 hover:text-indigo-600 transition font-medium"
        >
          See More Projects
          <span>→</span>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio;
