const About = () => {
  const features = [
    {
      icon: "📅",
      title: "8+ Years Experience",
      description:
        "Formatting books professionally since 2018 across all major publishing platforms and genres.",
    },
    {
      icon: "📊",
      title: "4000+ Projects Delivered",
      description:
        "Proven at scale — from debut self-publishers to prolific indie authors.",
    },
    {
      icon: "⚡",
      title: "Fast & Reliable Turnaround",
      description:
        "Standard 3–5 day delivery with rush options. We respect your launch timeline.",
    },
    {
      icon: "🔍",
      title: "Platform Compliance Guaranteed",
      description:
        "Every file checked against Amazon KDP, IngramSpark, Apple Books, and EPUB validators.",
    },
    {
      icon: "🔄",
      title: "Unlimited Revisions Policy",
      description:
        "We work until you're 100% satisfied. Your approval is the only finish line.",
    },
  ];

  const stats = [
    { value: "8+", label: "Years Active" },
    { value: "4000+", label: "Projects Done" },
    { value: "10+", label: "Best Sellers" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <section id="about" className="container mx-auto py-15">
      <div className="relative z-10 px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2 xl:gap-28">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur-md">
              ✨ Why Proghive
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Publishing Expertise
              <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                You Can Trust
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              With 8+ years shaping manuscripts into market-ready books, we
              combine publishing expertise, design excellence, and technical
              precision to help authors succeed.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="
                group
                flex
                gap-4

                rounded-3xl

                border
                border-white/10

                bg-white/5

                p-5

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-cyan-400/20
                hover:bg-white/10
                hover:-translate-y-1
              "
                >
                  <div
                    className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center

                  rounded-2xl

                  bg-cyan-500/10

                  text-2xl

                  backdrop-blur-md
                "
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-slate-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Video Card */}
            <div
              className="
            relative
            aspect-video
            overflow-hidden

            rounded-[32px]

            border
            border-white/10

            bg-white/5

            backdrop-blur-xl

            shadow-[0_10px_50px_rgba(0,0,0,0.35)]
          "
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />

              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="
                flex
                h-24
                w-24
                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-white/10

                backdrop-blur-md

                transition-all
                duration-300

                hover:scale-110
                cursor-pointer
              "
                >
                  <div className="ml-1 h-0 w-0 border-y-[12px] border-y-transparent border-l-[20px] border-l-white" />
                </div>

                <h4 className="mt-6 text-xl font-semibold text-white">
                  Watch Our Process
                </h4>

                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400">
                  Video Preview
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                rounded-3xl

                border
                border-white/10

                bg-white/5

                p-6

                text-center

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-cyan-400/20
                hover:-translate-y-1
              "
                >
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
                    {stat.value}
                  </div>

                  <div className="mt-2 text-sm text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
