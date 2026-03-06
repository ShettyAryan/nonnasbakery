import Image from "next/image";
import FadeUp from "./FadeUp";

export default function DarkImmersiveSection() {
  return (
    <section className="bg-dark-maroon py-24 sm:py-32 md:py-40 overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Circular bread image with rotating text */}
        <FadeUp>
          <div className="relative mb-10 sm:mb-16">
            {/* Rotating circular text SVG */}
            <div
              className="absolute inset-0 animate-spin-slow pointer-events-none"
              style={{ margin: "-32px" }}
            >
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full opacity-[0.12]"
              >
                <defs>
                  <path
                    id="textCircle"
                    d="M 200, 200 m -155, 0 a 155,155 0 1,1 310,0 a 155,155 0 1,1 -310,0"
                  />
                </defs>
                <text
                  fill="white"
                  fontFamily="Bebas Neue, cursive"
                  fontSize="18"
                  letterSpacing="10"
                >
                  <textPath href="#textCircle">
                    FRESHNESS · TASTE · TRADITION · LOVE · FRESHNESS · TASTE ·
                    TRADITION · LOVE ·
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Bread photo */}
            <div
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 sm:border-8 border-white/8 shadow-2xl relative"
              style={{ boxShadow: "0 0 80px rgba(232,23,74,0.2)" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH_v3omScK-zetfg2NqsW2HU6l9kfV4sRXkvQHFritl3piV944OgjK5TrCwJfDgAEkdhIprN-V6eKhnhJUPzIL9kR4ckSN9JFL_DjVy1elUUDuYRA52ZQT19hxWzLRjM7LGU235A-Hz3dlGq7j79_SxHrk9bKZbuhDGzk8G3Fr1lHMpHUdbhP4NnPVMApHeLB9D7JAGAHs41Eqz9m72dXC9vzgh6fLJfxqgEXCV8iaIAZ6atTVndEqKpW03EKohNwHyW0OdQeIiOw"
                alt="Artisan bread, baked with love"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={200}>
          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 max-w-2xl leading-[0.95]">
            Always Made Your Bread With Love
          </h2>
        </FadeUp>

        <FadeUp delay={350}>
          <p className="text-white/45 font-sans text-sm sm:text-base lg:text-lg mb-8 sm:mb-12 max-w-md leading-relaxed px-2">
            Since 1982. The same starter. The same hands. The same love.
          </p>
        </FadeUp>

        <FadeUp delay={500}>
          <button className="bg-crimson text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-sans font-bold small-caps text-sm sm:text-base hover:bg-raspberry transition-colors duration-300 flex items-center gap-3 group">
            Order Your Box Today
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
        </FadeUp>
      </div>
    </section>
  );
}
