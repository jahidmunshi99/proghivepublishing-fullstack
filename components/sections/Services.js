import Link from "next/link";
import { Icons } from "../shared/Icons.js";

const services = [
  {
    title: "Self Publishing",
    description:
      "Complete self-publishing solutions including formatting, cover design, and KDP upload support.",
    icon: <Icons.BookIcon size={42} className="text-cyan-300" />,
    href: "/service/self-publishing",
  },
  {
    title: "Developer",
    description:
      "Custom web applications, SaaS platforms, automation systems, and scalable business solutions.",
    icon: <Icons.CodeLaptop size={42} className="text-cyan-300" />,
    href: "#",
  },
  {
    title: "Marketer",
    description:
      "Digital marketing strategies, lead generation, SEO optimization, and growth-focused campaigns.",
    icon: <Icons.Marketer size={42} className="text-cyan-300" />,
    href: "#",
  },
  {
    title: "Designer",
    description:
      "Professional UI/UX design, branding, graphics, and creative visual experiences.",
    icon: <Icons.Edit size={42} className="text-cyan-300" />,
    href: "/service/designer",
  },
  {
    title: "Admin Support",
    description:
      "Reliable virtual assistance, customer support, data entry, and business administration services.",
    icon: <Icons.CustomerSupport size={42} className="text-cyan-300" />,
    href: "#",
  },
];

export default function Services() {
  return (
    <section id="#service" className="py-15 container mx-auto px-15">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <span
          className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          font-medium
          text-cyan-300
          backdrop-blur-md
        "
        >
          ✨ What We Offer
        </span>

        <h2
          className="
          mt-6
          text-4xl
          md:text-5xl
          font-bold
          tracking-tight
          text-white
        "
        >
          Save Your Time &
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Energy
          </span>
        </h2>

        <p
          className="
          mt-6
          text-lg
          leading-8
          text-slate-300
        "
        >
          Simplify your publishing journey by partnering with experts in
          self-publishing, design, development, and marketing. Focus on creating
          while we handle the technical work.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Link key={index} href={service.href}>
            <div
              className="
                group
                relative
                h-72
                overflow-hidden
                rounded-3xl

                bg-white/5
                backdrop-blur-xl

                border border-white/10

                shadow-[0_8px_32px_rgba(0,0,0,0.25)]

                hover:border-cyan-400/30
                hover:shadow-cyan-500/20
                hover:-translate-y-2

                transition-all
                duration-500

                cursor-pointer
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20

                  h-40
                  w-40

                  rounded-full

                  bg-cyan-500/20

                  blur-3xl

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-700
                "
              />

              {/* Default View */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  flex-col
                  items-center
                  justify-center

                  transition-all
                  duration-500

                  group-hover:opacity-0
                  group-hover:scale-90
                "
              >
                <div
                  className="
                    mb-5

                    flex
                    h-16
                    w-16

                    items-center
                    justify-center

                    rounded-2xl

                    bg-white/10

                    backdrop-blur-md

                    border
                    border-white/10
                  "
                >
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white text-center">
                  {service.title}
                </h3>
              </div>

              {/* Hover View */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  flex-col
                  items-center
                  justify-center

                  px-6

                  opacity-0
                  translate-y-10

                  transition-all
                  duration-500

                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-cyan-500/10
                    via-sky-500/5
                    to-transparent

                    backdrop-blur-xl
                  "
                />

                <div className="relative z-10 text-center">
                  <h3 className="mb-4 text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
