"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import SectionEyebrow from "@/components/SectionEyebrow";
import RubiksPuzzle from "./animation/RubiksPuzzle";

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow index="02" label="Skills" />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-mono text-sm uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <div className="mt-5 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <RubiksPuzzle></RubiksPuzzle>
        </div>
      </div>
    </section>
  );
}
