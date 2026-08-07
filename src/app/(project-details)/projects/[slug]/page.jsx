import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiImage } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects, getProjectBySlug } from "@/data/projects";
import { btnClass } from "@/lib/button-styles";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Project Details`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  // console.log(slug);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-15">
      <Link href="/#projects" className={btnClass("ghost", "default", "mb-3 pl-2")}>
        <FiArrowLeft className="h-4 w-4" /> Back to projects
      </Link>

      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 to-muted">
        {/* Replace with a real screenshot at project.image once you add it to /public/projects */}
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={600}
          className="h-full w-full "
          // onError={(e) => {
          //   e.currentTarget.style.display = "none";
          // }}
        />
        <FiImage className="absolute h-10 w-10 text-muted-foreground" />
      </div>

      <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-muted-foreground">{project.shortDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={btnClass("default")}>
            <FiExternalLink className="h-4 w-4" /> Live Site
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={btnClass("outline")}>
            <FaGithub className="h-4 w-4" /> Code
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-mono text-xs font-normal">
            {tech}
          </Badge>
        ))}
      </div>

      <Separator className="my-8" />

      <div className="space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-foreground">Overview</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">{project.description}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Challenges</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">{project.challenges}</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">Future Improvements</h2>
          <p className="mt-2 leading-relaxed text-muted-foreground">{project.improvements}</p>
        </section>
      </div>
      <div className="flex justify-center items-center my-8">
        <Link href="/#projects" className={btnClass("ghost", "default", "mb-3 pl-2")}>
          <FiArrowLeft className="h-4 w-4" /> Back to projects
        </Link>
      </div>
    </main>
  );
}
