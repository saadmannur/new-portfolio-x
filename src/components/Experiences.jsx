"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCode } from "react-icons/fa";
import { experience, selfDirectedWork } from "@/data/experience";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function Experiences() {
  const items = experience.length > 0 ? experience : selfDirectedWork;
  const isFormal = experience.length > 0;

  return (
    <section id="experience" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="04" label={isFormal ? "Experience" : "What I've Been Doing"} />

        <div className="mt-10 space-y-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title || item.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                {isFormal ? <FaBriefcase className="h-5 w-5" /> : <FaCode className="h-5 w-5" />}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-semibold text-foreground">{item.title || item.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{item.duration}</span>
                </div>
                {item.company && <p className="mt-1 text-sm text-primary">{item.company}</p>}
                <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
