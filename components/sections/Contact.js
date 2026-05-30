const Contact = () => {
  return (
    <section
      className=" container mx-auto px-4 sm:px-6 lg:px-8  items-center py-20 bg-gray-50"
      id="contact"
    >
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* <!-- Left Content --> */}
        <div>
          {/* <!-- Tag --> */}
          <span class="inline-block text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
            — Get In Touch
          </span>

          {/* <!-- Title --> */}
          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Publish Your Book?
          </h2>

          {/* <!-- Description --> */}
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Your publishing journey starts with a single conversation. Whether
            you&aposre a first-time author or a seasoned publisher, we&aposre
            here to make your vision a beautiful reality.
          </p>

          {/* <!-- Platform Buttons --> */}
          <div class="space-y-4">
            {/* <!-- Fiverr --> */}
            <a
              href="#"
              class="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-green-500 hover:shadow-lg transition group"
            >
              <div class="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-xl">
                🟢
              </div>

              <div>
                <p class="font-semibold text-slate-900 dark:text-white group-hover:text-green-600">
                  Hire on Fiverr
                </p>
                <p class="text-sm text-slate-500">Top Rated Seller</p>
              </div>

              <span class="ml-auto text-green-500 font-semibold">→</span>
            </a>

            {/* <!-- Upwork --> */}
            <a
              href="#"
              class="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-lime-500 hover:shadow-lg transition group"
            >
              <div class="w-12 h-12 rounded-xl bg-lime-500/10 flex items-center justify-center text-xl">
                🟤
              </div>

              <div>
                <p class="font-semibold text-slate-900 dark:text-white group-hover:text-lime-600">
                  Work on Upwork
                </p>
                <p class="text-sm text-slate-500">Top Rated Plus</p>
              </div>

              <span class="ml-auto text-lime-500 font-semibold">→</span>
            </a>

            {/* <!-- LinkedIn --> */}
            <a
              href="#"
              class="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:shadow-lg transition group"
            >
              <div class="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-xl">
                🔵
              </div>

              <div>
                <p class="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600">
                  Connect on LinkedIn
                </p>
                <p class="text-sm text-slate-500">Professional Network</p>
              </div>

              <span class="ml-auto text-blue-500 font-semibold">→</span>
            </a>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <div className="bg-sky-950 p-8 md:p-10 rounded-2xl shadow-2xl">
          <h3 className="text-white text-2xl font-semibold mb-8 text-center">
            Let’s Get Started
          </h3>

          <form className="space-y-5">
            {/* <!-- Name & Email --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
              />
            </div>

            {/* <!-- Phone & Service --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
              />
              <select
                className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
              >
                <option disabled selected>
                  Select Service
                </option>
                <option>Publishing</option>
                <option>Marketing</option>
              </select>
            </div>

            {/* <!-- Message --> */}
            <textarea
              placeholder="About Your Project"
              rows="5"
              className="w-full p-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition"
            ></textarea>

            {/* <!-- Button --> */}
            <button
              type="submit"
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-lg font-semibold text-lg 
          tracking-wide transition duration-300 shadow-md hover:shadow-lg"
            >
              → Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
