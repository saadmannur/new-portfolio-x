"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionEyebrow from "@/components/SectionEyebrow";
import { siteConfig } from "@/data/site-config";

const CONTACT_ITEMS = [
  {
    key: "email",
    icon: FiMail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  siteConfig.phone && {
    key: "phone",
    icon: FiPhone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  siteConfig.whatsapp && {
    key: "whatsapp",
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}`,
    external: true,
  },
].filter(Boolean);

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setSubmitting(true);

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_KEY
    );

    formData.append("subject", "Portfolio Contact");
    console.log(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    console.log(result);

    if (result.success) {
      toast.success("Message sent successfully!");
      e.target.reset();
    } else {
      toast.error("Something went wrong!");
    }

    setSubmitting(false);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionEyebrow index="06" label="Get In Touch" />
      <p className="mt-4 max-w-xl text-muted-foreground">
        Have an opportunity or just want to say hi? I&apos;m actively looking for roles —
        reach out any way that&apos;s easiest for you.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {CONTACT_ITEMS.map(({ key, icon: Icon, label, value, href, external }) => (
            <a
              key={key}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="font-medium text-foreground">{value}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm"
        >
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Your email" required />
          <Textarea name="message" placeholder="Your message" rows={4} required />

          <Button type="submit" className="w-full" disabled={submitting}>
            <FiSend className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
