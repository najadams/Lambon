export const BRAND = {
  name: "JIMBA",
  tagline: "Woven heritage. Worn with purpose.",
  description:
    "Premium Northern Ghanaian smocks for professionals. Authentic handwoven craftsmanship meeting modern leadership.",
  email: "hello@jimba.com",
  whatsapp: "+233XXXXXXXXX",
  instagram: "@jimbaafrica",
} as const;

export const NAVIGATION = [
  { name: "Collections", href: "/collections" },
  { name: "Shop", href: "/shop" },
  { name: "Weavers", href: "/weavers" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
] as const;

export const PRICE_TIERS = {
  essence: { label: "Essence", range: "550–600 GHS" },
  signature: { label: "Signature", range: "700–850 GHS" },
  premier: { label: "Premier", range: "900–1,200 GHS" },
} as const;
