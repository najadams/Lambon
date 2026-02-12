import Link from "next/link";
import { BRAND, NAVIGATION } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gray-light bg-dark text-off-white">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-3xl font-semibold tracking-wide"
            >
              {BRAND.name}
            </Link>
            <p className="mt-4 max-w-md font-body text-base leading-relaxed text-gray-light">
              {BRAND.tagline}
            </p>
            <p className="mt-2 max-w-md font-body text-sm leading-relaxed text-gray-medium">
              Premium Northern Ghanaian smocks for professionals carrying African
              identity into modern leadership spaces with dignity and authenticity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gray-medium">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-gray-light transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-gray-medium">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-body text-sm text-gray-light transition-colors hover:text-white"
                >
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-gray-light transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${BRAND.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-gray-light transition-colors hover:text-white"
                >
                  {BRAND.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-medium/30 pt-8 md:flex-row">
          <p className="font-sans text-xs text-gray-medium">
            &copy; {new Date().getFullYear()} Daji. All rights reserved.
          </p>
          <p className="font-body text-xs italic text-gray-medium">
            Handwoven in Northern Ghana
          </p>
        </div>
      </div>
    </footer>
  );
}
