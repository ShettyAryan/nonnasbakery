import Image from "next/image";
import FadeUp from "./FadeUp";
import { BLUR_DATA_URL } from "@/lib/image";

const boxItems = [
  { name: "Sourdough", desc: "24h fermented", qty: "1 loaf" },
  { name: "Baguette", desc: "Traditional French style", qty: "1 pc" },
  { name: "Ciabatta", desc: "Open crumb, olive oil", qty: "2 pcs" },
  { name: "Focaccia", desc: "Rosemary & sea salt", qty: "2 pcs" },
];

export default function FeatureSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-cream">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
        {/* Left — Product photo */}
        <FadeUp>
          <div className="relative group">
            <div
              className="rounded-2xl overflow-hidden aspect-[4/5] bg-dark-maroon shadow-2xl"
              style={{ boxShadow: "0 32px 80px rgba(61,0,16,0.25)" }}
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfAOCZHAikNqFbu40ygKKGiYfsXJNYmw1Z69dx7I3vt0E3tPEP4jLYCxpxU4cqyrCb7R-87g2AG1dOujGl0Exke1RGpF0YxdSeV9C_7JtpijoSYPQDtJSnC1yUXykk4hjNyWHhYiJHAO0IGPutfBvelaPm_oSoq94P1D_v29fVvFhuHdxJtlmbx_ejTBpaqOTLOOkjdSy1iOSjjGhXZsWW7QMgp0eip3VZ35SwQ_cPBCpbLoZJrn3-LdBhbS23uQiYJp9FnM7kfYI"
                alt="Nonna's signature bakery box"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Circular badge overlapping corner */}
            <div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-cream rounded-full flex items-center justify-center text-center p-3 sm:p-4 lg:p-5 shadow-xl group-hover:rotate-12 transition-transform duration-700 border-2 border-crimson/15"
            >
              <div>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-crimson mx-auto mb-1 sm:mb-1.5 opacity-60"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                </svg>
                <p className="font-serif text-crimson text-[10px] sm:text-xs lg:text-sm leading-tight">
                  A DASH OF NONNA IN EVERY BITE
                </p>
              </div>
            </div>

            {/* Rotated label */}
            <div
              className="absolute bottom-8 sm:bottom-12 -left-2 sm:-left-6 bg-raspberry text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg text-[10px] sm:text-xs"
              style={{ transform: "rotate(-4deg)" }}
            >
              <p className="font-sans font-bold small-caps">
                Guaranteed Fresh ✦
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Right — Copy */}
        <div className="flex flex-col gap-6 sm:gap-8">
          <FadeUp delay={100}>
            <div className="flex items-center gap-4">
              <span className="w-8 h-px bg-raspberry" />
              <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
                The Box
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={200}>
            <h2 className="font-serif text-section text-near-black leading-[0.9]">
              SWEETNESS PACKED IN EVERY BOX,{" "}
              <span className="text-raspberry">GUARANTEED FRESH</span>
            </h2>
          </FadeUp>

          <FadeUp delay={350}>
            <p className="text-near-black/60 text-base lg:text-lg font-sans leading-relaxed">
              Our morning rituals haven&apos;t changed in three generations. We
              wake before the world does, to make sure your morning starts with
              something real.
            </p>
          </FadeUp>

          {/* Box contents list */}
          <FadeUp delay={450}>
            <ul className="space-y-0 divide-y divide-near-black/8">
              {boxItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between py-4 group/item"
                >
                  <div>
                    <span className="font-bebas text-xl text-near-black tracking-wider group-hover/item:text-crimson transition-colors">
                      {item.name}
                    </span>
                    <span className="text-near-black/40 text-xs font-sans ml-3">
                      {item.desc}
                    </span>
                  </div>
                  <span className="text-xs font-sans font-bold small-caps text-crimson bg-crimson/8 px-3 py-1 rounded-full">
                    {item.qty}
                  </span>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={600}>
            <button className="w-fit bg-crimson text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-sans font-bold small-caps text-sm hover:bg-dark-maroon transition-colors duration-300 flex items-center gap-3 group mt-2">
              Build Your Box
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
      </div>
    </section>
  );
}
