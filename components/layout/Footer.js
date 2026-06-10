const Footer = ({ info }) => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-14 md:py-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white">
                Proghive Publishing
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                Premium book formatting and publishing services for authors and
                self-publishers worldwide. Your story deserves to be read —
                let's make that happen.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {["𝕏", "in", "f", "▶"].map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full
                      border border-white/10
                      bg-white/5
                      text-white
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/30
                      hover:bg-cyan-500/10
                      hover:text-cyan-300
                    "
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-5 text-lg font-semibold text-white">
                Quick Links
              </h4>

              <ul className="space-y-3">
                {["Home", "About", "Portfolio", "Blog", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-5 text-lg font-semibold text-white">
                Services
              </h4>

              <ul className="space-y-3">
                {[
                  "Paperback Formatting",
                  "Hardcover Formatting",
                  "Kindle eBook",
                  "EPUB Formatting",
                  "Book Cover Design",
                  "KDP Publishing",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-5 text-lg font-semibold text-white">
                Newsletter
              </h4>

              <p className="mb-5 text-sm leading-6 text-slate-400">
                Publishing tips, industry news, and special offers for authors.
              </p>

              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-white
                    placeholder:text-slate-500
                    backdrop-blur-xl
                    outline-none
                    transition-all
                    focus:border-cyan-400/40
                    focus:ring-2
                    focus:ring-cyan-400/10
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    rounded-xl
                    bg-cyan-500
                    px-4
                    py-3
                    font-medium
                    text-slate-950
                    transition-all
                    duration-300
                    hover:bg-cyan-400
                    hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
                  "
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-3 text-xs text-slate-500">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-3 py-6 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate-500">{info?.copyrightText}</p>

            <p className="text-sm text-slate-500">{info?.developedBy}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
