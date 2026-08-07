"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionEyebrow from "@/components/SectionEyebrow";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionEyebrow index="05" label="Projects" />
      <p className="mt-4 max-w-xl text-muted-foreground">
        A selection of things I&apos;ve built end-to-end — click into any project for the
        full breakdown.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
