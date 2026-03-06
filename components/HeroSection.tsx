import Image from "next/image";
import FadeUp from "./FadeUp";

export default function HeroSection() {
  return (
    <section className="bg-cream min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex items-center overflow-hidden relative">
      {/* Ghost watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-serif text-[20vw] sm:text-[24vw] lg:text-[28vw] text-crimson/[0.04] whitespace-nowrap leading-none"
          style={{ transform: "translateY(10%)" }}
        >
          NONNA&apos;S
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center py-12 sm:py-16 lg:py-20 w-full">
        {/* Left — Copy */}
        <div className="relative z-10">
          <FadeUp delay={0}>
            <div className="mb-2">
              <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
                ✦ Artisan Italian Heritage Bakery
              </span>
            </div>
          </FadeUp>

          <div className="mb-6 sm:mb-8 mt-2 sm:mt-4">
            <FadeUp delay={100}>
              <div className="font-serif text-hero text-crimson leading-[0.88]">
                BAKED
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="font-serif text-hero text-near-black leading-[0.88]">
                WITH LOVE,
              </div>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="font-serif text-hero text-crimson leading-[0.88] underline-raspberry inline-block">
                EVERY DAY
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={450}>
            <p className="text-near-black/60 text-sm sm:text-base lg:text-lg font-sans leading-relaxed max-w-md mb-6 sm:mb-8">
              Three generations of Italian heritage, baked into every loaf. No
              shortcuts. No preservatives. Just Nonna&apos;s recipes, made
              fresh every morning.
            </p>
          </FadeUp>

          {/* Trust micro-badges */}
          <FadeUp delay={550}>
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center mb-8 sm:mb-10">
              {[
                "No Preservatives",
                "No Artificial Flavors",
                "Baked Daily",
              ].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-sans font-bold small-caps text-near-black/50 border border-near-black/15 px-3 py-1.5 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-crimson/40" />
                  {badge}
                </span>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={650}>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <button className="bg-crimson text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-sans font-bold text-sm small-caps hover:bg-dark-maroon transition-colors duration-300 flex items-center gap-3 group">
                Shop Our Breads
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
              </button>
              <button className="text-near-black font-sans font-bold small-caps text-sm border-b border-near-black/30 hover:border-raspberry hover:text-raspberry transition-colors pb-0.5">
                Our Story
              </button>
            </div>
          </FadeUp>
        </div>

        {/* Right — Floating Photography */}
        <div className="relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-[640px]">
          {/* Main large bread */}
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 animate-float-1 z-20">
            <div
              className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-cream"
              style={{ boxShadow: "0 32px 80px rgba(139,0,0,0.18)" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKenFhzFVWkMny2KS7VP9mEVN2JRN3cVCqSSnBV_Uu6IRpQjQCDw7zad2w-mM7hKHZMhKwVqegxcA-tFGfYDdwqHdBfB-QjvpB0F0cjA0xHVDYoBx3pgLzBmJBmcdIb2sw9bKoceBMxH0_l5ClBI2xxqai2x238f1m4KOvDAWpTadwUHRc1zVDYCF-ETP3-rYVkrZT-yGLWrlfKn2t-xz5STzWJaxOsZf0aWMNFccfbok0nOeVo4kxMZicZ_v1PleOIm14Vlhwnxw"
                alt="Artisan sourdough loaf"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Cannoli bottom left */}
          <div className="absolute bottom-4 sm:bottom-8 left-0 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 animate-float-2 z-30">
            <div
              className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-cream"
              style={{ boxShadow: "0 24px 60px rgba(139,0,0,0.14)" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA--R3PvIi0dTpv6Wlij-WJgoglBDUknLakYkzkMTbTBm2hjdZiaQiXHfZuhwh52VCnDWKZdHUjKWzwq3JSvylFrRr2YaZSziXzwb2amUt-70c-Jtfi5p7VBMOIDndZHMaATYzOOpsK1PT_4HH6PWGBtKAAgafj67AOsz4w6-TSZOE3LnwTraqgIRoG4GkiWbvsV3vIVlPn6gvD_S2OI5OBDu8Sh74S-Vo5GzsEW2CBYmI4AfgxaGtSPB8WfCuaCT00kfPpMWSsu5Q"
                alt="Ricotta cannoli"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Flour bowl centre */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 animate-float-3 z-10 opacity-70">
            <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-cream">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUNhmr9gW7TFEKxHFvDmkBU16n4_YLiWlNFxFFeKUBI7J0utBCxREomGgjjkStQ7FgXjzv9O8bb20Y-BtcfNUzuTKfgFaMVosw5npjzq_APmOClNDMcqenQpb45nT3UNa1uGFTb7Wgb_RVO5k52isxVV48215LH0nS6F--WRMfz8IGR8lrZSEtFGXegcK0ZusSuVoTgDoPGIYEyh54O95vnWmGBNirOKj3A-FpaF9C3dJ-pMu2F3Afc1gWbLgke7wBrZmJOqhr7QQ"
                alt="Flour and baking tools"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Floating label badges */}
          <div
            className="absolute top-6 sm:top-12 left-2 sm:left-4 bg-white/95 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg border border-crimson/10 z-40 text-[10px] sm:text-xs"
            style={{ transform: "rotate(-3deg)" }}
          >
            <p className="text-crimson font-sans font-bold small-caps">
              100% Real Ingredients
            </p>
          </div>

          <div
            className="absolute bottom-24 sm:bottom-36 right-2 sm:right-4 bg-crimson text-white px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow-lg z-40 text-[10px] sm:text-xs"
            style={{ transform: "rotate(4deg)" }}
          >
            <p className="font-sans font-bold small-caps flex items-center gap-1.5">
              Nonna Approved ✓
            </p>
          </div>

          {/* EST badge */}
          <div className="absolute top-1/2 right-0 sm:right-2 -translate-y-1/2 z-40">
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full stamp-border border-crimson/30 flex items-center justify-center text-center p-1.5 sm:p-2">
              <div>
                <div className="font-serif text-crimson text-[8px] sm:text-[10px] leading-tight">
                  EST.
                </div>
                <div className="font-serif text-crimson text-sm sm:text-lg leading-none">
                  1982
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll divider */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-px h-12 bg-near-black" />
        <svg
          className="w-4 h-4 text-near-black animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
