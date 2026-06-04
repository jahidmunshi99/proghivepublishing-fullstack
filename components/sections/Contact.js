const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 md:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="mx-auto container px-4 sm:px-6 lg:px-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE */}
          <div>
            {/* Tag */}
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-300 backdrop-blur-xl">
              ✨ Get In Touch
            </span>

            {/* Title */}
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to Publish Your
              <span className="block mt-2 bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Book?
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg leading-7 text-slate-400 max-w-xl">
              Your publishing journey starts with a single conversation. Whether
              you're a first-time author or a seasoned publisher, we help turn
              your manuscript into a professional book.
            </p>

            {/* Platform Cards */}
            <div className="mt-10 space-y-4">
              {/* Fiverr */}
              <a
                href="#"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-green-400/30 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-green-500/10 text-lg sm:text-xl">
                  🟢
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-white group-hover:text-green-300">
                    Hire on Fiverr
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Top Rated Seller
                  </p>
                </div>

                <span className="text-green-400 font-semibold group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              {/* Upwork */}
              <a
                href="#"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-lime-400/30 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-lime-500/10 text-lg sm:text-xl">
                  🟤
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-white group-hover:text-lime-300">
                    Work on Upwork
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Top Rated Plus
                  </p>
                </div>

                <span className="text-lime-400 font-semibold group-hover:translate-x-1 transition">
                  →
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-xl transition-all hover:border-blue-400/30 hover:bg-white/10"
              >
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-500/10 text-lg sm:text-xl">
                  🔵
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-white group-hover:text-blue-300">
                    Connect on LinkedIn
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Professional Network
                  </p>
                </div>

                <span className="text-blue-400 font-semibold group-hover:translate-x-1 transition">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 md:p-10 backdrop-blur-xl shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
            <h3 className="text-center text-xl sm:text-2xl font-semibold text-white mb-8">
              Let’s Get Started
            </h3>

            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
                />
              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
                />

                <select className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-white backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none">
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
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 text-white placeholder:text-slate-400 backdrop-blur-xl focus:border-cyan-400/40 focus:outline-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 sm:py-4 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-cyan-500/20"
              >
                🚀 Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
