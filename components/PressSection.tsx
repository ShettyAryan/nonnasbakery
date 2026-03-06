import FadeUp from "./FadeUp";

const pressItems = [
  {
    outlet: "Bon Appétit",
    quote:
      "The kind of sourdough that makes you question every loaf you've ever bought at a grocery store.",
    year: "2024",
    award: "Best Artisan Bakery",
  },
  {
    outlet: "The New York Times",
    quote:
      "Nonna's isn't a bakery — it's an argument for slowing down, for craft, for memory as ingredient.",
    year: "2023",
    award: "Food Critics' Choice",
  },
  {
    outlet: "Eater",
    quote:
      "A neighborhood institution that somehow feels newly discovered on every visit.",
    year: "2023",
    award: "City's Best Bakery",
  },
  {
    outlet: "Food & Wine",
    quote:
      "Rosa's notebook lives on in every perfectly laminated croissant and every crackling sourdough crust.",
    year: "2022",
    award: "Heritage Baker Award",
  },
];

export default function PressSection() {
  return (
    <section id="press" className="bg-cream py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Label */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-raspberry" />
            <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
              Press & Awards
            </span>
          </div>
        </FadeUp>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-14 sm:mb-20">
          <FadeUp delay={100}>
            <h2 className="font-serif text-section text-near-black leading-[0.9] max-w-lg">
              WORDS FROM <span className="text-crimson">THE WORLD</span>
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <div className="flex items-center gap-6 sm:gap-8 lg:gap-16">
              {[
                { num: "18+", label: "Press Features" },
                { num: "6", label: "National Awards" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-serif text-3xl sm:text-4xl text-crimson">{s.num}</div>
                  <div className="text-xs font-sans font-bold small-caps text-near-black/50 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Press cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {pressItems.map((item, i) => (
            <FadeUp key={item.outlet} delay={i * 100}>
              <div
                className={`rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                  i === 0
                    ? "bg-dark-maroon text-white"
                    : "bg-cream-light border border-near-black/8"
                }`}
                style={{
                  boxShadow:
                    i === 0
                      ? "0 20px 60px rgba(61,0,16,0.3)"
                      : "0 4px 24px rgba(139,0,0,0.06)",
                }}
              >
                {/* Ghost quote mark */}
                <div
                  className={`absolute -top-2 -left-1 sm:-top-4 sm:-left-2 font-serif text-[80px] sm:text-[120px] leading-none pointer-events-none select-none ${
                    i === 0 ? "text-white/5" : "text-crimson/5"
                  }`}
                >
                  &ldquo;
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span
                        className={`font-bebas text-2xl tracking-wider ${
                          i === 0 ? "text-raspberry" : "text-crimson"
                        }`}
                      >
                        {item.outlet}
                      </span>
                      <div
                        className={`text-xs font-sans font-bold small-caps mt-0.5 ${
                          i === 0 ? "text-white/40" : "text-near-black/40"
                        }`}
                      >
                        {item.year}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-sans font-bold small-caps px-3 py-1.5 rounded-full ${
                        i === 0
                          ? "bg-white/10 text-white/70"
                          : "bg-crimson/8 text-crimson"
                      }`}
                    >
                      {item.award}
                    </span>
                  </div>

                  <p
                    className={`font-sans text-base lg:text-lg leading-[1.65] ${
                      i === 0 ? "text-white/80" : "text-near-black/70"
                    }`}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Logo strip */}
        <FadeUp delay={400}>
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-near-black/8 flex flex-wrap gap-4 sm:gap-8 lg:gap-16 items-center justify-center sm:justify-start opacity-30 grayscale">
            {["Bon Appétit", "NYT", "Eater", "Food & Wine", "Saveur"].map(
              (pub) => (
                <span
                  key={pub}
                  className="font-serif text-base sm:text-xl text-near-black tracking-tight"
                >
                  {pub}
                </span>
              )
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
