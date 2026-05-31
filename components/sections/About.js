const About = () => {
  return (
    <section id="about" className="py-5 bg-slate-50 dark:bg-slate-950">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* <!-- Left Content --> */}
        <div>
          {/* <!-- Section Tag --> */}
          <span className="section-tag mb-4">— Why Proghive</span>

          {/* <!-- Title --> */}
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Publishing Expertise You Can Trust
          </h2>

          {/* <!-- Description --> */}
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            With 8+ years shaping manuscripts into market-ready books, we bring
            precision, care, and industry-standard excellence to every project.
          </p>

          {/* <!-- Points --> */}
          <div className="space-y-6">
            {/* <!-- Item --> */}
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-2xl">
                📅
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                  8+ Years Experience
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Formatting books professionally since 2018 across all major
                  platforms and genres.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-2xl">
                📊
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                  4000+ Projects Delivered
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Proven at scale — from debut self-publishers to prolific indie
                  authors.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-2xl">
                ⚡
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                  Fast & Reliable Turnaround
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Standard 3–5 day delivery with rush options. We respect your
                  launch timeline.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-2xl">
                🔍
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                  Platform Compliance Guaranteed
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Every file checked against Amazon KDP, IngramSpark, Apple
                  Books, and EPUB validators.
                </p>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="flex gap-4">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-2xl">
                🔄
              </div>
              <div>
                <h4 className="font-semibold text-lg text-slate-900 dark:text-white">
                  Unlimited Revisions Policy
                </h4>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  We work until you&aposre 100% satisfied. Your approval is the
                  only finish line.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Right Content --> */}
        <div>
          {/* <!-- Video Placeholder --> */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-900 aspect-video shadow-2xl">
            {/* <!-- Background Overlay --> */}
            <div className="absolute inset-0 bg-linear-to-br from-indigo-600/20 to-cyan-500/20"></div>

            {/* <!-- Content --> */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              {/* <!-- Play Button --> */}
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 hover:scale-105 transition duration-300 cursor-pointer">
                <div className="w-0 h-0 border-l-20 border-l-white border-y-12 border-y-transparent ml-1"></div>
              </div>

              <h4 className="text-white font-semibold text-lg">
                Watch Our Process
              </h4>

              <p className="text-slate-400 text-sm mt-2 uppercase tracking-widest">
                Video Preview
              </p>
            </div>
          </div>

          {/* <!-- Stats Cards --> */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {/* <!-- Card --> */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl font-bold text-indigo-600">8+</div>
              <div className="text-sm text-slate-500 mt-2">Years Active</div>
            </div>

            {/* <!-- Card --> */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl font-bold text-indigo-600">4000+</div>
              <div className="text-sm text-slate-500 mt-2">Projects Done</div>
            </div>

            {/* <!-- Card --> */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl font-bold text-indigo-600">10+</div>
              <div className="text-sm text-slate-500 mt-2">Best Sellers</div>
            </div>

            {/* <!-- Card --> */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
              <div className="text-3xl font-bold text-indigo-600">100%</div>
              <div className="text-sm text-slate-500 mt-2">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
