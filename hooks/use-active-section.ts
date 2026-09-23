"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], defaultId: string = ""): string {
  const [activeSection, setActiveSection] = useState<string>(defaultId || sectionIds[0] || "");

  useEffect(() => {
    if (typeof window === "undefined" || sectionIds.length === 0) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Root margin creates a focused activation zone in upper-middle viewport
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
