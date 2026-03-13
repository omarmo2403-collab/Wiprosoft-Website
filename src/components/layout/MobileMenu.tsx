"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-white/98 backdrop-blur-xl md:hidden"
        >
          <div className="flex h-full flex-col px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={onClose} className="text-xl font-bold text-secondary">
                {siteConfig.name}
                <span className="text-accent">.</span>
              </Link>
              <button onClick={onClose} aria-label="Close menu" className="text-secondary">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-2">
              {siteConfig.navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 text-2xl font-medium text-secondary transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pb-8">
              <Button href="/contact" className="w-full" onClick={onClose}>
                Get in Touch
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
