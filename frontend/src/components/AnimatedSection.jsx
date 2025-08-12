import { motion } from "framer-motion";
import React from "react";

export default function AnimatedSection({ children, id, className="" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}
