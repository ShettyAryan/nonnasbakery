export default function AnnouncementBar() {
  const text =
    "FREE LOCAL DELIVERY ON ORDERS OVER $45 · BAKED FRESH EVERY MORNING · EST. 1982 · HANDMADE DAILY · NO PRESERVATIVES · ";

  return (
    <div className="bg-raspberry py-2 sm:py-2.5 overflow-hidden relative z-50">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="text-white text-[10px] sm:text-xs font-sans font-bold small-caps tracking-[0.15em] sm:tracking-widest pr-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
