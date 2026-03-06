"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const onMouseEnterInteractive = () => {
      cursor.classList.add("scale-[2.5]", "border-raspberry", "bg-raspberry/10");
      cursor.classList.remove("border-crimson");
    };
    const onMouseLeaveInteractive = () => {
      cursor.classList.remove("scale-[2.5]", "border-raspberry", "bg-raspberry/10");
      cursor.classList.add("border-crimson");
    };

    document.addEventListener("mousemove", onMouseMove);

    const interactives = document.querySelectorAll(
      "a, button, [data-interactive]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full border-2 border-crimson pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[transform,border-color,background-color] duration-200 mix-blend-multiply hidden lg:block"
        style={{ left: "-100px", top: "-100px" }}
      />
      <div
        ref={dotRef}
        className="fixed w-1.5 h-1.5 rounded-full bg-crimson pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
        style={{ left: "-100px", top: "-100px" }}
      />
    </>
  );
}
