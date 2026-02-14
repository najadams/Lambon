export const BRAND = {
  name: "Lambon",
  tagline: "The Wilderness. The Weaver. The Way.",
  description:
    "Premium Northern Ghanaian smocks for professionals. Authentic handwoven craftsmanship meeting modern leadership.",
  email: "najm@lambon.com",
  whatsapp: "+233555547984",
  instagram: "@wear_Lambon",
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
