const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 bg-linear-to-b from-slate-950 via-sky-950 to-slate-950 "
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 h-175 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="container mx-auto">
        <div className="relative z-10 mx-auto px-6 lg:px-3">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-start">
            {/* LEFT SIDE */}
            <div>
              {/* Tag */}
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
                ✨ Get In Touch
              </span>

              {/* Title */}
              <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                Ready to Publish Your
                <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Book?
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-lg leading-8 text-slate-300 max-w-xl">
                Your publishing journey starts with a single conversation.
                Whether you're a first-time author or a seasoned publisher, we
                help turn your manuscript into a professional book.
              </p>

              {/* Platform Cards */}
              <div className="mt-10 space-y-4">
                {/* Fiverr */}
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-green-400/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-xl">
                    🟢
                  </div>

                  <div>
                    <p className="font-semibold text-white group-hover:text-green-300">
                      Hire on Fiverr
                    </p>
                    <p className="text-sm text-slate-400">Top Rated Seller</p>
                  </div>

                  <span className="ml-auto text-green-400 font-semibold">
                    →
                  </span>
                </a>

                {/* Upwork */}
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-lime-400/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500/10 text-xl">
                    🟤
                  </div>

                  <div>
                    <p className="font-semibold text-white group-hover:text-lime-300">
                      Work on Upwork
                    </p>
                    <p className="text-sm text-slate-400">Top Rated Plus</p>
                  </div>

                  <span className="ml-auto text-lime-400 font-semibold">→</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all hover:border-blue-400/30 hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-xl">
                    🔵
                  </div>

                  <div>
                    <p className="font-semibold text-white group-hover:text-blue-300">
                      Connect on LinkedIn
                    </p>
                    <p className="text-sm text-slate-400">
                      Professional Network
                    </p>
                  </div>

                  <span className="ml-auto text-blue-400 font-semibold">→</span>
                </a>
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div
              className="
              rounded-[32px]
              border border-white/10
              bg-white/5
              p-8 md:p-10
              backdrop-blur-xl
              shadow-[0_10px_50px_rgba(0,0,0,0.35)]
            "
            >
              <h3 className="text-center text-2xl font-semibold text-white mb-8">
                Let’s Get Started
              </h3>

              <form className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
                  />
                </div>

                {/* Phone + Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
                  />

                  <select className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none">
                    <option>Select Service</option>
                    <option>Publishing</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>

                {/* Message */}
                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="
                  w-full

                  rounded-2xl

                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  py-4

                  font-semibold
                  text-white

                  shadow-lg

                  transition-all

                  hover:scale-[1.02]
                  hover:shadow-cyan-500/20
                "
                >
                  🚀 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
