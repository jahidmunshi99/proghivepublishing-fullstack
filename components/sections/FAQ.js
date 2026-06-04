const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to format a book?",
      answer:
        "Most book formatting projects take 3–5 business days depending on the manuscript length, complexity, and required revisions.",
    },
    {
      question: "Do you support Amazon KDP requirements?",
      answer:
        "Yes. Every file is optimized for Amazon KDP, IngramSpark, Apple Books, Barnes & Noble Press, and EPUB industry standards.",
    },
    {
      question: "Can I request revisions?",
      answer:
        "Absolutely. We provide unlimited revisions until you are completely satisfied with the final result.",
    },
    {
      question: "What formats do you deliver?",
      answer:
        "We deliver print-ready PDF, EPUB, Kindle-compatible files, and publisher-specific formats based on your requirements.",
    },
    {
      question: "How do I place an order?",
      answer:
        "You can order directly through our website or contact us for a custom quote based on your project requirements.",
    },
  ];

  return (
    <section id="faq" className="container mx-auto lg:py-20">
      {/* Background Glow */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
            ✨ Anything To Ask
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Frequently Asked
            <span className="block mt-1 bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Before reaching out, you may find the answer to your question below.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl

                border
                border-white/10

                bg-white/5

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-cyan-400/20
                hover:bg-white/10
              "
            >
              <details className="group">
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between

                    px-6
                    py-6
                  "
                >
                  <span className="pr-4 text-lg font-semibold text-white">
                    {faq.question}
                  </span>

                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full

                      bg-white/10

                      text-cyan-300

                      transition-transform
                      duration-300

                      group-open:rotate-180
                    "
                  >
                    ▼
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 pb-6 pt-4">
                  <p className="leading-7 text-slate-300">{faq.answer}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
