const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* <!-- Background Blur --> */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900/20 via-slate-950 to-cyan-900/20"></div>

      {/* <!-- Grid Pattern --> */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[50px_50px]"></div>

      <div className="container relative mx-auto px-4 lg:px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* <!-- Left Content --> */}
          <div>
            {/* <!-- Tag --> */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6">
              ✦ Professional Publishing Services
            </div>

            {/* <!-- Heading --> */}
            <h1 className="text-5xl lg:text-4xl font-bold leading-tight">
              Transform Your Words Into
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">
                Published Masterpieces
              </span>
            </h1>

            {/* <!-- Description --> */}
            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Proghive Publishing delivers premium book formatting, layout
              design, and full-service publishing assistance for authors and
              self-publishers who demand nothing less than excellence.
            </p>

            {/* <!-- CTA Buttons --> */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#"
                className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-semibold transition-all duration-300"
              >
                Get Started
              </a>

              <a
                href="#portfolio"
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-900 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>

            {/* <!-- Stats --> */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl">
              <div>
                <h3 className="text-3xl font-bold text-indigo-400">4000+</h3>
                <p className="text-slate-400 text-sm">Projects</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-400">3500+</h3>
                <p className="text-slate-400 text-sm">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-indigo-400">5000+</h3>
                <p className="text-slate-400 text-sm">Published Books</p>
              </div>
            </div>
          </div>

          {/* <!-- Right Content --> */}
          <div className="relative flex justify-center">
            {/* <!-- Floating Top Badge --> */}
            <div className="absolute top-0 right-0 z-20 bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-bold">4.9/5</p>
                <p className="text-xs text-slate-400">Client Rating</p>
              </div>
            </div>

            {/* <!-- Floating Bottom Badge --> */}
            <div className="absolute bottom-0 left-0 z-20 bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-4 flex items-center gap-3 shadow-xl">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-bold">48hr</p>
                <p className="text-xs text-slate-400">Rush Delivery</p>
              </div>
            </div>

            {/* <!-- Books Container --> */}
            <div className="relative w-[420px] h-[520px]">
              {/* <!-- Left Book --> */}
              <div className="absolute left-0 top-20 w-40 h-56 rounded-xl bg-slate-800 border border-slate-700 shadow-2xl rotate-[-12deg] flex flex-col items-center justify-center text-center">
                <div className="w-10 h-0.5 bg-indigo-400/50 mb-2"></div>
                <div className="w-8 h-0.5 bg-indigo-400/20 mb-4"></div>

                <h4 className="text-sm text-indigo-300">
                  The Night <br />
                  Chronicles
                </h4>
              </div>

              {/* <!-- Right Book --> */}
              <div className="absolute right-0 top-20 w-40 h-56 rounded-xl bg-slate-800 border border-slate-700 shadow-2xl rotate-[12deg] flex flex-col items-center justify-center text-center">
                <div className="w-10 h-0.5 bg-cyan-400/50 mb-2"></div>
                <div className="w-8 h-0.5 bg-cyan-400/20 mb-4"></div>

                <h4 className="text-sm text-cyan-300">
                  Business <br />
                  Blueprint
                </h4>
              </div>

              {/* <!-- Main Book --> */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8 w-56 h-80 rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-600 shadow-[0_25px_60px_rgba(79,70,229,0.35)] flex flex-col items-center justify-center text-center">
                {/* <!-- Spine --> */}
                <div className="absolute left-0 top-0 h-full w-3 bg-black/20 rounded-l-2xl"></div>

                <div className="w-12 h-0.5 bg-white/40 mb-5"></div>

                <p className="uppercase tracking-[0.25em] text-xs text-white/70 mb-3">
                  Proghive
                </p>

                <h3 className="text-2xl font-bold leading-tight">
                  Your Story,
                  <br />
                  Perfectly Published
                </h3>

                <div className="w-10 h-px bg-white/30 mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
