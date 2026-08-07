// Plain className-based "button" styles for <a>/<Link> elements.
// We avoid shadcn's <Button asChild> here — this project's shadcn setup is
// built on Base UI (not Radix), and Base UI's Button doesn't support the
// `asChild` pattern the same way. Using it causes nested <button> elements
// and hydration crashes. Plain <button> elements (no asChild) are still
// fine and used elsewhere (theme toggle, mobile menu trigger, form submit).

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
  outline: "border border-border bg-background hover:bg-muted",
  ghost: "hover:bg-muted",
};

const sizes = {
  default: "h-10 px-4",
  sm: "h-9 px-3",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10",
};

export function btnClass(variant = "default", size = "default", extra = "") {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(" ");
}
