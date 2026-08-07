"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { education } from "@/data/education";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function Educations() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionEyebrow index="03" label="Education" />

      <div className="mt-10 space-y-5">
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FaGraduationCap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-semibold text-foreground">{item.degree}</h3>
                <span className="font-mono text-xs text-muted-foreground">{item.duration}</span>
              </div>
              <p className="mt-1 text-sm text-primary">{item.institute}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
