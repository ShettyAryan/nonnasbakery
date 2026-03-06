import Image from "next/image";
import FadeUp from "./FadeUp";

export default function AboutSection() {
  return (
    <section id="our-story" className="bg-cream-light py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Label */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-20">
            <span className="w-12 h-px bg-raspberry" />
            <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
              Our Story
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Images collage */}
          <div className="relative h-[600px]">
            {/* Main image */}
            <FadeUp delay={100}>
              <div
                className="absolute top-0 left-0 w-[75%] h-80 rounded-xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 24px 60px rgba(139,0,0,0.12)" }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH_v3omScK-zetfg2NqsW2HU6l9kfV4sRXkvQHFritl3piV944OgjK5TrCwJfDgAEkdhIprN-V6eKhnhJUPzIL9kR4ckSN9JFL_DjVy1elUUDuYRA52ZQT19hxWzLRjM7LGU235A-Hz3dlGq7j79_SxHrk9bKZbuhDGzk8G3Fr1lHMpHUdbhP4NnPVMApHeLB9D7JAGAHs41Eqz9m72dXC9vzgh6fLJfxqgEXCV8iaIAZ6atTVndEqKpW03EKohNwHyW0OdQeIiOw"
                  alt="Artisan bread baking process"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>

            {/* Offset second image */}
            <FadeUp delay={250}>
              <div
                className="absolute bottom-0 right-0 w-[65%] h-72 rounded-xl overflow-hidden shadow-xl"
                style={{
                  boxShadow: "0 20px 50px rgba(139,0,0,0.10)",
                  transform: "translateY(-20px)",
                }}
              >
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhQ8ZY5EJvEB24kOhUeGQO-QXMdU3Volr3F0Gx4aac92jwssHCqBBXufsI6ECoq3WItCTW5OaCg6Eq33hpRPI5WabJWuTwm1Oxwzrz0zpO8jF5GsMP6JKoycYn5uEKza12ueHurNdKzvjQRtjlL53rarWXInECs-ZOMIrDgNPDdaoC7vDiEMKNTpesw85E3q93N0nWMqBd9j9BbPJbzGt8PxlUDuHluPznSpt1s0W9mBAQT-8-gPJvd-LfraMuGmoXZF6HB9CG2Fw"
                  alt="Traditional Italian sourdough"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeUp>

            {/* Floating stat card */}
            <FadeUp delay={400}>
              <div
                className="absolute top-1/2 -right-6 lg:-right-12 bg-crimson text-white p-6 rounded-xl shadow-2xl z-20 w-36"
                style={{ transform: "translateY(-50%) rotate(2deg)" }}
              >
                <div className="font-serif text-5xl leading-none mb-1">40+</div>
                <div className="text-white/80 text-xs font-sans small-caps leading-tight">
                  Years of Baking Heritage
                </div>
              </div>
            </FadeUp>

            {/* Wheat sprig decoration */}
            <div className="absolute bottom-20 left-4 opacity-20 pointer-events-none select-none">
              <svg
                width="60"
                height="100"
                viewBox="0 0 60 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="30"
                  y1="100"
                  x2="30"
                  y2="0"
                  stroke="#8B0000"
                  strokeWidth="2"
                />
                {[20, 35, 50, 65].map((y, i) => (
                  <g key={i}>
                    <ellipse
                      cx="20"
                      cy={y}
                      rx="10"
                      ry="6"
                      fill="#8B0000"
                      transform={`rotate(-30 20 ${y})`}
                    />
                    <ellipse
                      cx="40"
                      cy={y}
                      rx="10"
                      ry="6"
                      fill="#8B0000"
                      transform={`rotate(30 40 ${y})`}
                    />
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="flex flex-col gap-8">
            <FadeUp delay={150}>
              <h2 className="font-serif text-section text-near-black leading-[0.9]">
                THREE{" "}
                <span className="text-crimson">GENERA&shy;TIONS</span> OF
                DOUGH & DEVOTION
              </h2>
            </FadeUp>

            <FadeUp delay={300}>
              <p className="text-near-black/65 text-base lg:text-lg font-sans leading-[1.75]">
                It started with Rosa — our great-grandmother — in a small
                hilltop village in Calabria. She believed bread was more than
                sustenance; it was identity, memory, and love made tangible.
                When she emigrated to America in 1982, she brought with her
                nothing but a suitcase, a sourdough starter, and a notebook of
                recipes written in faded ink.
              </p>
            </FadeUp>

            <FadeUp delay={400}>
              <p className="text-near-black/65 text-base lg:text-lg font-sans leading-[1.75]">
                Today, those same recipes guide our ovens every morning before
                dawn. We haven&apos;t changed a single ingredient — only scaled
                the love.
              </p>
            </FadeUp>

            <FadeUp delay={500}>
              <div className="flex gap-12 pt-4 border-t border-near-black/10">
                {[
                  { num: "4AM", label: "When we wake up" },
                  { num: "12", label: "Bread varieties" },
                  { num: "3", label: "Generations" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif text-3xl text-crimson">
                      {stat.num}
                    </div>
                    <div className="text-xs font-sans font-bold small-caps text-near-black/50 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={600}>
              <a
                href="#"
                className="text-raspberry font-sans font-bold small-caps text-sm flex items-center gap-2 hover:gap-4 transition-all w-fit"
              >
                Read the Full Story
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
