"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

const BackdropContext = createContext<((color: string) => void) | null>(null);

export function BackdropProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState("#FAF6F0");

  return (
    <BackdropContext.Provider value={setColor}>
      <div
        aria-hidden
        className="fixed inset-0 -z-10 transition-colors duration-700 ease-out"
        style={{ backgroundColor: color }}
      />
      {children}
    </BackdropContext.Provider>
  );
}

export function useBackdropSection<T extends HTMLElement>(color: string) {
  const setColor = useContext(BackdropContext);
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!setColor || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setColor(color);
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [setColor, color]);

  return ref;
}
