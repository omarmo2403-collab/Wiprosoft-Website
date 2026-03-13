import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-brand-gradient px-8 py-14 sm:px-14 sm:py-16 text-center overflow-hidden">
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Grow Your Business?
            </h2>

            <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your digital goals.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button href="/contact" className="bg-white text-secondary hover:bg-white/90 shadow-lg">
                Start a Project
              </Button>
              <Button href="/portfolio" className="border border-white/30 text-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
