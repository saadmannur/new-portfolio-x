import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "@/data/site-config";
import { MdEmail } from "react-icons/md";

const SOCIALS = [
  { key: "github", icon: FaGithub, href: siteConfig.social.github },
  { key: "linkedin", icon: FaLinkedin, href: siteConfig.social.linkedin },
  { key: "email", icon: MdEmail, href: siteConfig.social.email },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ key, icon: Icon, href }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
