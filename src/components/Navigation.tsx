import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.5, duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6"
    >
      <div className="flex items-center gap-8 px-6 py-2 glass-card rounded-full">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-display text-[10px] tracking-[0.3em] uppercase text-muted-foreground hover:text-cobalt transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
