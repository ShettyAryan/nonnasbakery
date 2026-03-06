import FadeUp from "./FadeUp";

export default function TestimonialBand() {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
      <div className="max-w-[1440px] mx-auto">
        <FadeUp>
          <div className="bg-raspberry rounded-xl sm:rounded-2xl px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20 relative overflow-hidden group">
            {/* Wheat sprig bg decoration */}
            <div className="absolute -bottom-16 -right-16 opacity-[0.12] pointer-events-none select-none transition-transform duration-1000 group-hover:rotate-12">
              <svg
                width="280"
                height="380"
                viewBox="0 0 60 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="30"
                  y1="100"
                  x2="30"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                />
                {[15, 30, 45, 60, 75].map((y, i) => (
                  <g key={i}>
                    <ellipse
                      cx="19"
                      cy={y}
                      rx="12"
                      ry="7"
                      fill="white"
                      transform={`rotate(-30 19 ${y})`}
                    />
                    <ellipse
                      cx="41"
                      cy={y}
                      rx="12"
                      ry="7"
                      fill="white"
                      transform={`rotate(30 41 ${y})`}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Large ghost quote mark */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-8 font-serif text-[80px] sm:text-[120px] lg:text-[160px] text-white/10 leading-none select-none pointer-events-none">
              &ldquo;
            </div>

            <div className="relative z-10 max-w-3xl">
              <h3 className="font-serif text-white text-2xl sm:text-3xl lg:text-5xl leading-[1.1] mb-6 sm:mb-8">
                Every loaf tastes like Sunday morning at my grandmother&apos;s
                house. Nothing compares.
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-sans font-bold small-caps tracking-widest">
                — Maria G., Loyal Customer since 2008
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
