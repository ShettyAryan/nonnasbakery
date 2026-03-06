export default function Footer() {
  return (
    <footer className="bg-dark-maroon border-t border-white/5 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 relative overflow-hidden">
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

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 mb-14 sm:mb-20">
          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="font-serif text-3xl sm:text-4xl text-white leading-none tracking-tight mb-1">
              NONNA&apos;S
            </div>
            <div className="text-[10px] font-sans font-bold small-caps text-white/30 tracking-[0.2em] mb-4 sm:mb-6">
              EST. 1982 · HANDMADE DAILY
            </div>
            <p className="text-white/45 font-sans text-sm leading-relaxed max-w-xs mb-6 sm:mb-8">
              Baked with Memory. Served with Love. An artisan Italian heritage
              bakery honoring three generations of craft.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-raspberry hover:text-raspberry transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-raspberry hover:text-raspberry transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-raspberry hover:text-raspberry transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-sans font-bold small-caps text-xs tracking-widest mb-4 sm:mb-8 opacity-50">
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
            <h4 className="text-white font-sans font-bold small-caps text-xs tracking-widest mb-4 sm:mb-8 opacity-50">
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
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="text-white font-sans font-bold small-caps text-xs tracking-widest mb-4 sm:mb-8 opacity-50">
              Join the Table
            </h4>
            <p className="text-white/45 font-sans text-sm leading-relaxed mb-4 sm:mb-6">
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
        <div className="border-t border-white/8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-white/25 text-[10px] sm:text-xs font-sans small-caps tracking-widest text-center md:text-left">
          <p className="order-2 md:order-1">© 2024 Nonna&apos;s Artisan Bakery. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-8 justify-center order-1 md:order-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
