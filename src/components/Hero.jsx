"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowDown } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { siteConfig } from "@/data/site-config";
import { btnClass } from "@/lib/button-styles";
import { MdEmail } from "react-icons/md";

const SOCIALS = [
  { key: "github", icon: FaGithub, href: siteConfig.social.github },
  { key: "linkedin", icon: FaLinkedin, href: siteConfig.social.linkedin },
  { key: "email", icon: MdEmail, href: siteConfig.social.email },
].filter((s) => s.href);

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-muted-foreground">
            {siteConfig.designation} · {siteConfig.location}
          </p>

          <h1 className="mt-4 text-[2.75rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]">
            I build web apps
            <br />
            people can <span className="text-primary">actually use.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href={siteConfig.resumeUrl} download className={btnClass("default", "lg")}>
              <FiDownload className="h-4 w-4" /> Download Resume
            </a>
            <a href="#projects" className={btnClass("outline", "lg")}>
              View Projects
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {SOCIALS.map(({ key, icon: Icon, href }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <span className="ml-2 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Open to work
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto flex flex-col items-center gap-6"
        >
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
            <Avatar className="h-60 w-60 rounded-3xl border border-border shadow-xl sm:h-64 sm:w-64">
              <AvatarImage src={siteConfig.photoUrl} alt={siteConfig.name} className="object-cover" />
              <AvatarFallback className="rounded-3xl text-4xl font-semibold">
                {siteConfig.initials}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="w-full max-w-[280px] rounded-lg border border-border bg-card font-mono text-xs shadow-sm">
            <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-yellow-400" />
              <span className="h-2 w-2 rounded-full bg-green-400" />
            </div>
            <div className="px-3 py-2.5 text-muted-foreground">
              <p><span className="text-primary">const</span> stack = [</p>
              <p className="pl-3 text-emerald-500">&apos;React&apos;, &apos;Next.js&apos;,</p>
              <p className="pl-3 text-emerald-500">&apos;MongoDB&apos;, &apos;Express.js&apos;</p>
              <p>]</p>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="relative mx-auto mt-14 hidden w-fit animate-bounce items-center justify-center text-muted-foreground sm:flex"
      >
        <FiArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
