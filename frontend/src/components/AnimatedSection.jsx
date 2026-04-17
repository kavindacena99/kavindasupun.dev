import { motion as Motion } from "framer-motion";

export default function AnimatedSection({ children, id, className = "" }) {
  return (
    <Motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`scroll-mt-28 ${className}`}
    >
      {children}
    </Motion.section>
  );
}
