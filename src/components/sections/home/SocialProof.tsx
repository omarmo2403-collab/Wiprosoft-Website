const partners = [
  "Google Partner",
  "Meta Business Partner",
  "Shopify Partner",
  "HubSpot Certified",
  "Google Analytics",
  "WordPress VIP",
  "Semrush Agency",
  "Mailchimp Partner",
];

function PartnerList() {
  return (
    <>
      {partners.map((partner, i) => (
        <span key={i} className="flex items-center gap-12">
          <span className="text-text-muted/70 text-sm font-medium uppercase tracking-widest">
            {partner}
          </span>
          <span className="text-border" aria-hidden="true">
            &bull;
          </span>
        </span>
      ))}
    </>
  );
}

export function SocialProof() {
  return (
    <section className="overflow-hidden py-6 bg-surface-alt">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        <div className="flex gap-12 items-center">
          <PartnerList />
        </div>
        <div className="flex gap-12 items-center" aria-hidden="true">
          <PartnerList />
        </div>
      </div>
    </section>
  );
}
