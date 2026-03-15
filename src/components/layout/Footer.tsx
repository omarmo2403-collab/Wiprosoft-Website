import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Mail, Phone, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Web Development", href: "/services#web-development" },
  { label: "Digital Marketing", href: "/services#digital-marketing" },
  { label: "Branding & Design", href: "/services#branding-design" },
  { label: "SEO Services", href: "/services" },
  { label: "E-Commerce", href: "/services" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-footer-bg">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Wiprosoft Logo"
                width={140}
                height={45}
                className="brightness-0 invert"
                style={{ height: 'auto', width: 'auto', maxWidth: '140px' }}
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-footer-muted">
              {siteConfig.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-footer-heading">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-footer-muted transition-colors hover:text-accent-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-footer-heading">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-footer-muted transition-colors hover:text-accent-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-footer-heading">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-sm text-footer-muted transition-colors hover:text-accent-light">
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm text-footer-muted transition-colors hover:text-accent-light">
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-footer-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.postcode}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-footer-border pt-8 sm:flex-row">
          <p className="text-sm text-footer-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="text-sm text-footer-muted transition-colors hover:text-accent-light">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-sm text-footer-muted transition-colors hover:text-accent-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
