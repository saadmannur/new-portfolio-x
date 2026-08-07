"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site-config";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionEyebrow index="01" label="About Me" />

      <div className="mt-10 grid gap-10 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg md:col-span-2"
        >
          <p>{siteConfig.about.journey}</p>
          <p>{siteConfig.about.enjoy}</p>
          <p>{siteConfig.about.hobbies}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-fit rounded-xl border border-border bg-card p-6 shadow-sm"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Quick facts
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">Based in</span>
              <span className="text-right font-medium text-foreground">{siteConfig.location}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">Studying at</span>
              <span className="text-right font-medium text-foreground">{siteConfig.university}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">Focus</span>
              <span className="text-right font-medium text-foreground">Full Stack Web Dev</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">Status</span>
              <span className="text-right font-medium text-emerald-500">Open to work</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
