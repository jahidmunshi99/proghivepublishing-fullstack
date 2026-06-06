"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import { getTestimonials } from "../../actions/testimonials.js";
import SectionHeader from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Emma Harrison",
    role: "Self-Published Author",
    review:
      "From editing to publishing, everything was smooth and stress-free. Highly professional service!",
  },
  {
    name: "Michael Carter",
    role: "Business Author",
    review:
      "Outstanding formatting quality and fast delivery. My book looked absolutely premium.",
  },
  {
    name: "Sophia Bennett",
    role: "Kindle Publisher",
    review:
      "Excellent communication and perfect execution. I will definitely work with them again.",
  },
  {
    name: "Daniel Roberts",
    role: "Indie Author",
    review:
      "They transformed my manuscript into a professional publication-ready book.",
  },
];

const Testimonials = () => {
  // const testimonials = await getTestimonials();
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className="relative overflow-hidden py-24 bg-linear-to-b from-slate-950 via-sky-950 to-slate-950"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          badge="✨Testimonials"
          title="What Our Clients"
          highlightedText="Say About Us"
          description="Trusted by authors worldwide for professional publishing, formatting, and design services."
          align="center"
        />

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="px-3 py-4">
              <div className="group h-full rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/20 hover:bg-white/10">
                {/* Stars */}
                <div className="mb-6 flex text-yellow-400">⭐⭐⭐⭐⭐</div>

                {/* Review */}
                <p className="mb-8 text-slate-300 italic leading-7">
                  "{item.review}"
                </p>

                {/* Divider */}
                <div className="mb-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 font-bold">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-semibold text-white">{item.name}</h4>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
