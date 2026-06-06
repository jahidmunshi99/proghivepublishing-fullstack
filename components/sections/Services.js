import Link from "next/link";
import SectionHeader from "../../components/ui/SectionHeader.js";
import { Icons } from "../shared/Icons.js";

const services = [
  {
    title: "Self Publishing",
    description:
      "Complete self-publishing solutions including formatting, cover design, and KDP upload support.",
    icon: <Icons.BookIcon size={36} className="text-cyan-300" />,
    href: "/service/self-publishing",
  },
  {
    title: "Developer",
    description:
      "Custom web applications, SaaS platforms, automation systems, and scalable business solutions.",
    icon: <Icons.CodeLaptop size={36} className="text-cyan-300" />,
    href: "#",
  },
  {
    title: "Marketer",
    description:
      "Digital marketing strategies, lead generation, SEO optimization, and growth-focused campaigns.",
    icon: <Icons.Marketer size={36} className="text-cyan-300" />,
    href: "#",
  },
  {
    title: "Designer",
    description:
      "Professional UI/UX design, branding, graphics, and creative visual experiences.",
    icon: <Icons.Edit size={36} className="text-cyan-300" />,
    href: "/service/designer",
  },
  {
    title: "Admin Support",
    description:
      "Reliable virtual assistance, customer support, data entry, and business administration services.",
    icon: <Icons.CustomerSupport size={36} className="text-cyan-300" />,
    href: "#",
  },
];

export default function Services() {
  return (
    <section
      id="service"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <SectionHeader
          badge="  ✨ What We Offer"
          title="Save Your Time &"
          highlightedText="Energy"
          description="Simplify your publishing journey by partnering with experts in self-publishing, design, development, and marketing."
          align="center"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]">
                {/* Glow */}
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
