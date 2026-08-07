"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiImage } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { btnClass } from "@/lib/button-styles";

export default function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {!imgError ? (
          // Plain <img>, not next/image — avoids build/dev errors when a
          // screenshot hasn't been added to /public/projects/ yet.
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImgError(true)}
            className="h-full w-full "
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/10 to-muted text-muted-foreground">
            <FiImage className="h-8 w-8" />
            <span className="font-mono text-xs">{project.name}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
          {project.shortDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className={btnClass("outline", "default", "mt-5 w-full")}>
          View Details <FiArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
