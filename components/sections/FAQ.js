const FAQ = () => {
  return (
    <section class="py-24 bg-slate-50 dark:bg-slate-950">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        {/* <!-- Header --> */}
        <div class="text-center mb-14">
          <span class="inline-block text-sm font-semibold uppercase tracking-widest text-indigo-600 mb-4">
            — Anything to Ask
          </span>

          <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>

          <p class="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Before contacting us, check whether your question is already
            answered below.
          </p>
        </div>

        {/* <!-- FAQ Items --> */}
        <div class="space-y-4">
          {/* <!-- Item 1 --> */}
          <div class="group border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
            <details class="group">
              <summary class="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                <span class="font-semibold text-slate-900 dark:text-white">
                  How long does it take to format a book?
                </span>

                <span class="text-slate-500 group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>
              </summary>

              <div class="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                Most book formatting projects take 3–5 business days depending
                on complexity and length.
              </div>
            </details>
          </div>

          {/* <!-- Item 2 --> */}
          <div class="group border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
            <details>
              <summary class="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                <span class="font-semibold text-slate-900 dark:text-white">
                  Do you support Amazon KDP requirements?
                </span>
                <span class="text-slate-500 group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>
              </summary>

              <div class="px-6 pb-5 text-slate-600 dark:text-slate-400">
                Yes. Every file is fully optimized for Amazon KDP, IngramSpark,
                Apple Books, and EPUB standards.
              </div>
            </details>
          </div>

          {/* <!-- Item 3 --> */}
          <div class="group border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
            <details>
              <summary class="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                <span class="font-semibold text-slate-900 dark:text-white">
                  Can I request revisions?
                </span>
                <span class="text-slate-500 group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>
              </summary>

              <div class="px-6 pb-5 text-slate-600 dark:text-slate-400">
                Yes, unlimited revisions are included until you are fully
                satisfied with the final result.
              </div>
            </details>
          </div>

          {/* <!-- Item 4 --> */}
          <div class="group border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
            <details>
              <summary class="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                <span class="font-semibold text-slate-900 dark:text-white">
                  What formats do you deliver?
                </span>
                <span class="text-slate-500 group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>
              </summary>

              <div class="px-6 pb-5 text-slate-600 dark:text-slate-400">
                We deliver print-ready PDF, EPUB, MOBI, and platform-specific
                files for Kindle and other publishers.
              </div>
            </details>
          </div>

          {/* <!-- Item 5 --> */}
          <div class="group border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 overflow-hidden">
            <details>
              <summary class="flex items-center justify-between cursor-pointer px-6 py-5 list-none">
                <span class="font-semibold text-slate-900 dark:text-white">
                  How do I place an order?
                </span>
                <span class="text-slate-500 group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>
              </summary>

              <div class="px-6 pb-5 text-slate-600 dark:text-slate-400">
                You can place an order directly through our website, Fiverr, or
                Upwork profile.
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
