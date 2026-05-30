const Footer = () => {
  return (
    <>
      <footer className="bg-slate-950 border-t border-slate-800 w-full">
        <div className="container mx-auto">
          <div className="mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* <!-- Brand --> */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Proghive Publishing
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Premium book formatting and publishing services for authors
                  and self-publishers worldwide. Your story deserves to be read
                  — let's make that happen.
                </p>

                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 text-white flex items-center justify-center transition-all duration-300"
                  >
                    𝕏
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 text-white flex items-center justify-center transition-all duration-300"
                  >
                    in
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 text-white flex items-center justify-center transition-all duration-300"
                  >
                    f
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-indigo-600 text-white flex items-center justify-center transition-all duration-300"
                  >
                    ▶
                  </a>
                </div>
              </div>

              {/* <!-- Quick Links --> */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5">
                  Quick Links
                </h4>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Services --> */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5">
                  Services
                </h4>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Paperback Formatting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Hardcover Formatting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Kindle eBook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      EPUB Formatting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      Book Cover Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      KDP Publishing
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Newsletter --> */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-5">
                  Newsletter
                </h4>

                <p className="text-sm text-slate-400 mb-4">
                  Publishing tips, industry news, and special offers for
                  authors.
                </p>

                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <button
                    type="submit"
                    className="w-full px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-xs text-slate-500 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Bottom --> */}
          <div className="border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-slate-500">
                © 2025 Proghive Publishing. All rights reserved.
              </p>

              <p className="text-sm text-slate-500">Crafted by Jahid Munshi</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
