import Image from "next/image";
import FadeUp from "./FadeUp";

const offerings = [
  {
    title: "Wedding Bread Table",
    desc: "A curated spread of artisan loaves, focaccias, and grissini — the centerpiece your guests will remember.",
    detail: "Serves 20–200",
  },
  {
    title: "Corporate Breakfast",
    desc: "Fresh-delivered pastry boxes and sourdough selections. Impress your team before the first slide.",
    detail: "Min. 10 boxes",
  },
  {
    title: "Private Baking Class",
    desc: "Nonna herself leads your group through the sourdough or pasta dough process. Memories guaranteed.",
    detail: "Groups of 4–12",
  },
];

export default function CateringSection() {
  return (
    <section id="catering" className="bg-dark-maroon py-16 sm:py-24 md:py-32 overflow-hidden relative">
      {/* Ghost watermark */}
      <div
        className="absolute top-0 right-0 font-serif text-[20vw] text-white/[0.03] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        CATERING
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-end mb-14 sm:mb-20">
          <div>
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-raspberry" />
                <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
                  Catering & Events
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-serif text-section text-white leading-[0.9]">
                BRING NONNA&apos;S TO{" "}
                <span className="text-raspberry">YOUR TABLE</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={200}>
            <p className="text-white/55 text-base lg:text-lg font-sans leading-relaxed lg:max-w-md">
              From intimate dinner parties to large-scale weddings, we bring the
              same obsessive craft to every event. Every crumb is accounted for.
            </p>
          </FadeUp>
        </div>

        {/* Offerings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {offerings.map((item, i) => (
            <FadeUp key={item.title} delay={i * 150}>
              <div className="border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:border-raspberry/50 hover:bg-white/[0.03] transition-all duration-400">
                <div className="w-10 h-10 rounded-full border border-raspberry/30 flex items-center justify-center text-raspberry mb-6 group-hover:bg-raspberry group-hover:border-raspberry transition-all">
                  <span className="font-serif text-lg leading-none">
                    {["✦", "◆", "●"][i]}
                  </span>
                </div>
                <h3 className="font-serif text-white text-xl sm:text-2xl mb-2 sm:mb-3 group-hover:text-raspberry transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm font-sans leading-relaxed mb-4">
                  {item.desc}
                </p>
                <span className="text-xs font-sans font-bold small-caps text-raspberry/70">
                  {item.detail}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* CTA Strip */}
        <FadeUp delay={450}>
          <div className="bg-raspberry rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div>
              <h3 className="font-serif text-white text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3">
                Ready to plan your event?
              </h3>
              <p className="text-white/75 font-sans text-sm">
                We respond within 24 hours. Nonna personally reviews every
                catering inquiry.
              </p>
            </div>
            <button className="bg-white text-raspberry font-sans font-bold small-caps text-sm px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-cream transition-colors flex-shrink-0 w-full sm:w-auto text-center">
              Enquire Now →
            </button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
