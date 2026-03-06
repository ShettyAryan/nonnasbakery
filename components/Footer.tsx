export default function Footer() {
  return (
    <footer className="bg-dark-maroon border-t border-white/5 pt-24 pb-12 relative overflow-hidden">
      {/* Wheat sprig watermark */}
      <div className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none select-none">
        <svg
          width="480"
          height="640"
          viewBox="0 0 60 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="30" y1="100" x2="30" y2="0" stroke="white" strokeWidth="2" />
          {[10, 22, 34, 46, 58, 70, 82].map((y, i) => (
            <g key={i}>
              <ellipse cx="19" cy={y} rx="13" ry="8" fill="white" transform={`rotate(-30 19 ${y})`} />
              <ellipse cx="41" cy={y} rx="13" ry="8" fill="white" transform={`rotate(30 41 ${y})`} />
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand col */}
          <div className="lg:col-span-4">
            <div className="font-serif text-4xl text-white leading-none tracking-tight mb-1">
              NONNA&apos;S
            </div>
            <div className="text-[10px] font-sans font-bold small-caps text-white/30 tracking-[0.2em] mb-6">
              EST. 1982 · HANDMADE DAILY
            </div>
            <p className="text-white/45 font-sans text-sm leading-relaxed max-w-xs mb-8">
              Baked with Memory. Served with Love. An artisan Italian heritage
              bakery honoring three generations of craft.
            </p>
            <div className="flex gap-3">
              {["instagram", "facebook", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-raspberry hover:text-raspberry transition-colors"
                >
                  <span className="text-[10px] font-sans font-bold uppercase">
                    {social[0].toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-sans font-bold small-caps text-xs tracking-widest mb-8 opacity-50">
              Menu
            </h4>
            <ul className="space-y-3">
              {["Sourdough Loaves", "Pastry Boxes", "Breakfast Bundles", "Seasonal Specials"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/45 hover:text-white font-sans text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-sans font-bold small-caps text-xs tracking-widest mb-8 opacity-50">
              Company
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Bakeries", "Wholesale", "Press", "Careers"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/45 hover:text-white font-sans text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-sans font-bold small-caps text-xs tracking-widest mb-8 opacity-50">
              Join the Table
            </h4>
            <p className="text-white/45 font-sans text-sm leading-relaxed mb-6">
              Fresh updates, seasonal menus, and Nonna&apos;s secret recipes —
              straight to your inbox.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border-0 border-b border-white/20 text-white py-3 pr-10 pl-0 text-sm font-sans focus:outline-none focus:border-raspberry transition-colors placeholder:text-white/25"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 hover:text-raspberry transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/25 text-xs font-sans small-caps tracking-widest">
          <p>© 2024 Nonna&apos;s Artisan Bakery. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
