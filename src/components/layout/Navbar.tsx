"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-white/90 shadow-sm backdrop-blur-lg"
            : "bg-white"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/logo.png"
              alt="Wiprosoft Logo"
              width={140}
              height={45}
              priority
              style={{ height: 'auto', width: 'auto', maxWidth: '140px' }}
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href ? "text-accent" : "text-text-body hover:text-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Get in Touch
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="text-secondary md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
