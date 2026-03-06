import Image from "next/image";
import FadeUp from "./FadeUp";

const menuItems = [
  {
    name: "CLASSIC SOURDOUGH",
    desc: "24-hour slow fermentation with our 100-year-old starter. Crackling crust, open crumb.",
    price: "$9.50",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhQ8ZY5EJvEB24kOhUeGQO-QXMdU3Volr3F0Gx4aac92jwssHCqBBXufsI6ECoq3WItCTW5OaCg6Eq33hpRPI5WabJWuTwm1Oxwzrz0zpO8jF5GsMP6JKoycYn5uEKza12ueHurNdKzvjQRtjlL53rarWXInECs-ZOMIrDgNPDdaoC7vDiEMKNTpesw85E3q93N0nWMqBd9j9BbPJbzGt8PxlUDuHluPznSpt1s0W9mBAQT-8-gPJvd-LfraMuGmoXZF6HB9CG2Fw",
    tag: "Bestseller",
  },
  {
    name: "PISTACHIO CANNOLI",
    desc: "Hand-rolled shells filled with fresh sheep's milk ricotta and crushed Sicilian pistachios.",
    price: "$4.50",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw8tbkE4qkW0lGMMMc4EZx0UyC4nUVJGlQ64z6QA7y23__XxsSuaG4M3aEZ02ZTill2idI9e13r_IfnI-4rYKYntr1BSmebjW4CEcDZfz5Cm8D0--pNt-2IgMJUdJBLNi0m4e9ehnldO4j8_1vqtnbApa79CUDDb2xa0JiEwPZtS_OmpEfvO325KNQzfI0c96S7HYICuf5P9UgbrddsFYbwsFU_yBBI2tlI9hbNf8gyCdizR8GbUBcjVg_GC5GPS6UjVY18LCTagQ",
    tag: "Nonna's Fav",
  },
  {
    name: "ROSEMARY FOCACCIA",
    desc: "Drenched in Sicilian extra-virgin olive oil, topped with garden rosemary and flaked sea salt.",
    price: "$8.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJsupZUsm-ba8mmSVKrAs0bw3Tkyo_FvAbQ&s",
    tag: "Seasonal",
  },
  {
    name: "ALMOND CORNETTO",
    desc: "Italy's answer to the croissant — flaky, buttery, filled with sweet almond frangipane.",
    price: "$5.50",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJZuu0UvgvIefnBbDFt01KoM5sU3XNCbafg&s",
    tag: "New",
  },
  {
    name: "CIABATTA RUSTICA",
    desc: "Open crumb, chewy crust. Made with heritage wheat and stone-ground flour.",
    price: "$7.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKenFhzFVWkMny2KS7VP9mEVN2JRN3cVCqSSnBV_Uu6IRpQjQCDw7zad2w-mM7hKHZMhKwVqegxcA-tFGfYDdwqHdBfB-QjvpB0F0cjA0xHVDYoBx3pgLzBmJBmcdIb2sw9bKoceBMxH0_l5ClBI2xxqai2x238f1m4KOvDAWpTadwUHRc1zVDYCF-ETP3-rYVkrZT-yGLWrlfKn2t-xz5STzWJaxOsZf0aWMNFccfbok0nOeVo4kxMZicZ_v1PleOIm14Vlhwnxw",
    tag: null,
  },
];

export default function MenuSection() {
  return (
    <section id="menu" className="py-32 bg-cream-light overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
        <FadeUp>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-raspberry" />
            <span className="text-xs font-sans font-bold small-caps text-raspberry tracking-widest">
              Our Menu
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={100}>
          <h2 className="font-serif text-section text-near-black leading-[0.9]">
            TURNING DOUGH INTO{" "}
            <span className="text-crimson">SOMETHING MAGICAL</span>
          </h2>
        </FadeUp>
      </div>

      {/* Horizontal scroll carousel */}
      <div className="flex gap-8 overflow-x-auto px-6 lg:px-12 pb-8 hide-scrollbar pt-16">
        {menuItems.map((item, i) => (
          <div
            key={item.name}
            className="min-w-[320px] lg:min-w-[360px] bg-cream rounded-2xl shadow-lg relative pt-20 pb-8 px-8 group flex-shrink-0 hover:-translate-y-2 transition-transform duration-400"
            style={{
              boxShadow: "0 8px 40px rgba(139,0,0,0.08)",
              marginTop: i % 2 === 0 ? "2.5rem" : "0",
            }}
          >
            {/* Product photo overflowing top */}
            <div className="absolute -top-12 left-8 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-cream group-hover:-translate-y-3 transition-transform duration-500">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Tag */}
            {item.tag && (
              <div className="absolute top-6 right-6">
                <span className="bg-raspberry/10 text-raspberry text-[10px] font-sans font-bold small-caps px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
            )}

            <div className="mt-8">
              <h3 className="font-bebas text-3xl text-near-black tracking-wider mb-2 leading-tight group-hover:text-crimson transition-colors">
                {item.name}
              </h3>
              <p className="text-near-black/55 text-sm font-sans leading-relaxed mb-6 line-clamp-2">
                {item.desc}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif text-crimson text-2xl">
                  {item.price}
                </span>
                <button className="border border-near-black/20 hover:border-crimson hover:text-crimson text-near-black/60 text-xs font-sans font-bold small-caps px-4 py-2 rounded-full transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FadeUp>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12">
          <a
            href="#"
            className="text-crimson font-sans font-bold small-caps text-sm flex items-center gap-2 hover:gap-4 transition-all w-fit"
          >
            View Full Menu
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
        </div>
      </FadeUp>
    </section>
  );
}
