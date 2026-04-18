import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";

export default function AnimatedSection({ children, id, className = "" }) {
  const [enableInViewAnimation, setEnableInViewAnimation] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return (
      !window.matchMedia("(max-width: 767px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAnimationPreference = () => {
      setEnableInViewAnimation(
        !mobileMediaQuery.matches && !reducedMotionMediaQuery.matches,
      );
    };

    updateAnimationPreference();

    const addListener = (mediaQueryList) => {
      if (mediaQueryList.addEventListener) {
        mediaQueryList.addEventListener("change", updateAnimationPreference);
        return;
      }

      mediaQueryList.addListener(updateAnimationPreference);
    };

    const removeListener = (mediaQueryList) => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", updateAnimationPreference);
        return;
      }

      mediaQueryList.removeListener(updateAnimationPreference);
    };

    addListener(mobileMediaQuery);
    addListener(reducedMotionMediaQuery);

    return () => {
      removeListener(mobileMediaQuery);
      removeListener(reducedMotionMediaQuery);
    };
  }, []);

  return (
    <Motion.section
      id={id}
      initial={enableInViewAnimation ? { opacity: 0, y: 50 } : false}
      animate={!enableInViewAnimation ? { opacity: 1, y: 0 } : undefined}
      whileInView={enableInViewAnimation ? { opacity: 1, y: 0 } : undefined}
      viewport={enableInViewAnimation ? { once: true, amount: 0.2 } : undefined}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`scroll-mt-28 ${className}`}
    >
      {children}
    </Motion.section>
  );
}
