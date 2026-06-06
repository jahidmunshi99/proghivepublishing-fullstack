import { getFaqs } from "../../actions/faq.js";
import SectionHeader from "../ui/SectionHeader";

const FAQ = async () => {
  const faqs = await getFaqs();

  return (
    <section id="faq" className="container mx-auto lg:py-20">
      {/* Background Glow */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="✨ Anything To Ask"
          title="Frequently Asked"
          highlightedText="Questions"
          description="Before reaching out, you may find the answer to your question below."
          align="center"
        />

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
