"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";

export function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputClasses =
    "w-full rounded-xl border border-border bg-surface px-4 py-3 text-secondary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-5">
      {/* Left - Contact Form */}
      <div className="lg:col-span-3">
        {submitted ? (
          <Card>
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <svg
                  className="h-8 w-8 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary">
                Thank you! We&apos;ll be in touch within 24 hours.
              </h3>
            </div>
          </Card>
        ) : (
          <Card>
            <h2 className="mb-6 text-2xl font-semibold text-secondary">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-secondary"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-secondary"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-secondary"
                >
                  Phone{" "}
                  <span className="text-text-muted">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-secondary"
                >
                  Service
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="branding-design">Branding &amp; Design</option>
                  <option value="seo">SEO</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-secondary"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <Button type="submit">Send Message</Button>
            </form>
          </Card>
        )}
      </div>

      {/* Right - Office Info */}
      <div className="lg:col-span-2">
        <Card>
          <h3 className="mb-4 text-lg font-semibold text-secondary">Our Office</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-text-body">
                {siteConfig.address.street}, {siteConfig.address.city},{" "}
                {siteConfig.address.postcode}, {siteConfig.address.country}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-accent" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-text-body transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-accent" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-text-body transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>

          <h3 className="mb-4 mt-8 text-lg font-semibold text-secondary">
            Business Hours
          </h3>
          <ul className="space-y-2 text-text-body">
            <li className="flex justify-between">
              <span>Mon - Fri</span>
              <span>9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sat - Sun</span>
              <span>Closed</span>
            </li>
          </ul>

          <div className="mt-8 flex aspect-video items-center justify-center rounded-xl border border-border bg-surface-alt">
            <span className="text-text-muted">Map</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
