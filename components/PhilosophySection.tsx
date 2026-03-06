import FadeUp from "./FadeUp";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.71.71m13.66 13.66.71.71M3 12H2m20 0h-1M4.22 19.78l.71-.71M18.36 5.64l.71-.71M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Pure Ingredients",
    desc: "Flour, water, salt, and soul. Nothing more, nothing less. Every label is honest.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Baked Daily",
    desc: "If it wasn't baked today, it's not in our store. Freshness isn't negotiable.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "Old World Recipes",
    desc: "Passed down through three generations of Italian Nonnas. Not a word changed.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: "No Shortcuts",
    desc: "Patience is our most important ingredient. Good bread cannot be rushed.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="bg-cream py-16 sm:py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span className="w-12 h-px bg-raspberry" />
            <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
              Our Philosophy
            </span>
          </div>
        </FadeUp>

        <FadeUp delay={100}>
          <h2 className="font-serif text-section text-near-black mb-12 sm:mb-20 max-w-xl leading-[0.9]">
            THE WAY <span className="text-crimson">NONNA</span> MADE IT
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {values.map((val, i) => (
            <FadeUp key={val.label} delay={i * 120}>
              <div className="group flex flex-col gap-5">
                <div className="w-16 h-16 rounded-full border border-crimson/20 flex items-center justify-center text-crimson/60 group-hover:bg-crimson group-hover:text-white group-hover:border-crimson transition-all duration-400">
                  {val.icon}
                </div>
                <h4 className="font-serif text-2xl text-near-black group-hover:text-crimson transition-colors">
                  {val.label}
                </h4>
                <p className="text-near-black/55 text-sm font-sans leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={500}>
          <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-near-black/8">
            <a
              href="#"
              className="text-raspberry font-sans font-bold small-caps text-sm flex items-center gap-2 hover:gap-4 transition-all w-fit"
            >
              ↳ Watch how we make our signature sourdough
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
