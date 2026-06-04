"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------------- COUNT UP HOOK ---------------- */
const useCountUp = (target, duration = 1200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setValue(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return value;
};

/* ---------------- BOOK DATA ---------------- */
const books = [
  {
    title: "Novel Design",
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "EPUB Ready",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    title: "Print Layout",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Cover Art",
    color: "from-fuchsia-500 to-indigo-500",
  },
];

export default function Hero() {
  const projects = useCountUp(4000);
  const clients = useCountUp(3500);
  const booksCount = useCountUp(5000);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-indigo-950/40 to-cyan-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT (UNTOUCHED ORIGINAL UI) ================= */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm mb-6">
              ✦ Professional Publishing Services
            </div>

            <h1 className="font-bold leading-[1.05] text-3xl sm:text-4xl md:text-5xl lg:text-5xl">
              Transform Your Words Into{" "}
              <span className="block bg-linear-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Published Masterpieces
              </span>
            </h1>

            <p className="mt-6 text-slate-300 max-w-xl text-sm sm:text-base lg:text-lg">
              Premium book formatting, cover design, and publishing workflow
              crafted for modern authors and self-publishers.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-sky-500 text-slate-950 font-semibold hover:scale-105 transition cursor-pointer">
                Get Started
              </a>
              <a className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">
                View Portfolio
              </a>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
              {[
                { label: "Projects", value: projects },
                { label: "Clients", value: clients },
                { label: "Books", value: booksCount },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border-l border-cyan-500/30 pl-4"
                >
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">
                    {item.value}+
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT (BOX COMPLETELY REMOVED - TRANSPARENT OVER BG) ================= */}
          <div className="">
            <motion.div
              style={{ y }}
              className="relative flex justify-center items-center h-140 bg-transparent"
            >
              {/* 45-DEGREE INFINITE SCROLLING STREAM GRID MATRIX */}
              <div
                className="absolute w-[80%] h-[160%] grid grid-cols-2 gap-8 p-4 opacity-50 select-none pointer-events-none"
                style={{ transform: "rotate(-5deg)" }}
              >
                {[0, 1, 2].map((colIndex) => (
                  <motion.div
                    key={colIndex}
                    className="flex flex-col gap-8"
                    animate={{
                      // Books float continuously upwards or downwards along the rotated 45° track
                      y: colIndex % 2 === 0 ? [700, -900] : [-900, 700],
                    }}
                    transition={{
                      duration: 22 + colIndex * 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Array duplication ensures zero seams during frame resets */}
                    {[...books, ...books, ...books, ...books].map(
                      (book, idx) => (
                        <div
                          key={idx}
                          className={`w-full aspect-[3/4] bg-gradient-to-br ${book.color} rounded-2xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex flex-col justify-between p-5`}
                        >
                          {/* Book Cover Design Accents */}
                          <div className="w-6 h-1 bg-white/20 rounded-full" />
                          <p className="text-white font-bold text-base tracking-wide drop-shadow-md leading-tight">
                            {book.title}
                          </p>
                        </div>
                      ),
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
