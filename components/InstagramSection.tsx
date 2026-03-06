import Image from "next/image";
import FadeUp from "./FadeUp";

const feedImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKenFhzFVWkMny2KS7VP9mEVN2JRN3cVCqSSnBV_Uu6IRpQjQCDw7zad2w-mM7hKHZMhKwVqegxcA-tFGfYDdwqHdBfB-QjvpB0F0cjA0xHVDYoBx3pgLzBmJBmcdIb2sw9bKoceBMxH0_l5ClBI2xxqai2x238f1m4KOvDAWpTadwUHRc1zVDYCF-ETP3-rYVkrZT-yGLWrlfKn2t-xz5STzWJaxOsZf0aWMNFccfbok0nOeVo4kxMZicZ_v1PleOIm14Vlhwnxw",
    alt: "Sourdough loaf",
    likes: "2.4k",
    caption: "Golden hour bakes ☀️",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw8tbkE4qkW0lGMMMc4EZx0UyC4nUVJGlQ64z6QA7y23__XxsSuaG4M3aEZ02ZTill2idI9e13r_IfnI-4rYKYntr1BSmebjW4CEcDZfz5Cm8D0--pNt-2IgMJUdJBLNi0m4e9ehnldO4j8_1vqtnbApa79CUDDb2xa0JiEwPZtS_OmpEfvO325KNQzfI0c96S7HYICuf5P9UgbrddsFYbwsFU_yBBI2tlI9hbNf8gyCdizR8GbUBcjVg_GC5GPS6UjVY18LCTagQ",
    alt: "Cannoli",
    likes: "1.8k",
    caption: "Pistachio season is here",
    tall: false,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJsupZUsm-ba8mmSVKrAs0bw3Tkyo_FvAbQ&s",
    alt: "Focaccia",
    likes: "3.1k",
    caption: "Focaccia art — every tray a canvas",
    tall: false,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfAOCZHAikNqFbu40ygKKGiYfsXJNYmw1Z69dx7I3vt0E3tPEP4jLYCxpxU4cqyrCb7R-87g2AG1dOujGl0Exke1RGpF0YxdSeV9C_7JtpijoSYPQDtJSnC1yUXykk4hjNyWHhYiJHAO0IGPutfBvelaPm_oSoq94P1D_v29fVvFhuHdxJtlmbx_ejTBpaqOTLOOkjdSy1iOSjjGhXZsWW7QMgp0eip3VZ35SwQ_cPBCpbLoZJrn3-LdBhbS23uQiYJp9FnM7kfYI",
    alt: "Bakery box",
    likes: "4.2k",
    caption: "Saturday boxes are sold out 🫶",
    tall: true,
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUNhmr9gW7TFEKxHFvDmkBU16n4_YLiWlNFxFFeKUBI7J0utBCxREomGgjjkStQ7FgXjzv9O8bb20Y-BtcfNUzuTKfgFaMVosw5npjzq_APmOClNDMcqenQpb45nT3UNa1uGFTb7Wgb_RVO5k52isxVV48215LH0nS6F--WRMfz8IGR8lrZSEtFGXegcK0ZusSuVoTgDoPGIYEyh54O95vnWmGBNirOKj3A-FpaF9C3dJ-pMu2F3Afc1gWbLgke7wBrZmJOqhr7QQ",
    alt: "Flour and tools",
    likes: "1.2k",
    caption: "4AM. Before the world wakes.",
    tall: false,
  },
];

export default function InstagramSection() {
  return (
    <section className="bg-cream py-16 sm:py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
          <div>
            <FadeUp>
              <div className="flex items-center gap-4 mb-5">
                <span className="w-12 h-px bg-raspberry" />
                <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
                  @nonnas.bakery
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-serif text-section text-near-black leading-[0.9] max-w-lg">
                BREAD, <span className="text-crimson">CAPTURED</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={200}>
            <a
              href="#"
              className="flex items-center gap-3 text-near-black/60 hover:text-raspberry transition-colors"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="font-sans font-bold small-caps text-sm">
                Follow on Instagram
              </span>
            </a>
          </FadeUp>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {feedImages.map((img, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  img.tall ? "row-span-2" : ""
                }`}
                style={{ aspectRatio: img.tall ? "3/4" : "1/1" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark-maroon/0 group-hover:bg-dark-maroon/60 transition-all duration-400 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100">
                  <svg
                    className="w-6 h-6 text-white mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  <span className="text-white font-sans font-bold text-sm small-caps">
                    {img.likes}
                  </span>
                  <span className="text-white/70 font-sans text-xs text-center mt-1 line-clamp-1">
                    {img.caption}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
