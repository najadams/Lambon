"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import { BRAND } from "@/lib/constants";

const CONTACT_METHODS = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "Fastest Response",
    description:
      "Chat directly with our team. Send photos, ask questions, place orders. Average response time: 2 hours.",
    action: `https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`,
    actionLabel: "Start Chat",
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: "email",
    title: "Email",
    subtitle: "Detailed Inquiries",
    description:
      "For formal requests, institutional orders, or detailed questions. We respond within 24-48 hours.",
    action: `mailto:${BRAND.email}`,
    actionLabel: "Send Email",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "Visual Showroom",
    description:
      "Browse our latest pieces, see styled looks, and connect with our community. DMs welcome.",
    action: `https://instagram.com/${BRAND.instagram.replace("@", "")}`,
    actionLabel: "Follow Us",
    icon: (
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    question: "How long does it take to receive my order?",
    answer:
      "Most orders are fulfilled within 2-4 weeks. Custom sizes or special requests may take slightly longer. We'll keep you updated throughout the process.",
  },
  {
    question: "Do you offer custom sizing?",
    answer:
      "Yes! We can accommodate custom measurements for an additional fee. Contact us via WhatsApp with your measurements for a quote.",
  },
  {
    question: "Can I visit your workshop?",
    answer:
      "We welcome visitors to meet our weavers in Northern Ghana. Please contact us in advance to arrange a visit.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide. Shipping costs vary by location. Contact us for a quote to your country.",
  },
];

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative">
    <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#6B3410] to-dark">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <span className="text-gold text-sm uppercase tracking-[0.3em] block">
          Get in Touch
        </span>
        <h1 className="text-display-hero font-display text-white leading-tight">
          Let&apos;s Connect
        </h1>
        <p className="text-xl text-off-white/80 font-body italic max-w-xl mx-auto">
          Questions about sizing? Want to place an order? Interested in bulk
          purchases? We&apos;re here to help.
        </p>

        {/* Quick WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-dark px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold hover:text-dark transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8"
        >
          <div className="h-16 w-px bg-gold/50 mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const ContactMethodsSection = () => (
  <section className="min-h-screen flex items-center justify-center py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          Choose Your Channel
        </span>
        <h2 className="text-display-section font-display text-dark">
          Ways to Reach Us
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {CONTACT_METHODS.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <a
              href={method.action}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 border border-stone-200 rounded-lg hover:border-primary hover:shadow-medium transition-all duration-300 h-full"
            >
              <div className="text-primary mb-6 group-hover:text-gold transition-colors">
                {method.icon}
              </div>
              <h3 className="text-xl font-display text-dark mb-1">
                {method.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-gold mb-4">
                {method.subtitle}
              </p>
              <p className="text-gray-medium font-body text-sm leading-relaxed mb-6">
                {method.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary group-hover:gap-3 transition-all">
                {method.actionLabel}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactFormSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formState);
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-dark">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm uppercase tracking-[0.2em] block mb-4">
            Send a Message
          </span>
          <h2 className="text-display-section font-display text-white">
            Contact Form
          </h2>
          <p className="mt-4 text-gray-light font-body max-w-lg mx-auto">
            For detailed inquiries, institutional orders, or partnership
            opportunities.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-wider text-gray-light mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
                placeholder="John Mensah"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-wider text-gray-light mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs uppercase tracking-wider text-gray-light mb-2"
            >
              Subject
            </label>
            <select
              id="subject"
              value={formState.subject}
              onChange={(e) =>
                setFormState({ ...formState, subject: e.target.value })
              }
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              required
            >
              <option value="" className="text-dark">
                Select a topic
              </option>
              <option value="order" className="text-dark">
                Place an Order
              </option>
              <option value="sizing" className="text-dark">
                Sizing Question
              </option>
              <option value="custom" className="text-dark">
                Custom Request
              </option>
              <option value="institutional" className="text-dark">
                Institutional/Bulk Order
              </option>
              <option value="partnership" className="text-dark">
                Partnership Inquiry
              </option>
              <option value="other" className="text-dark">
                Other
              </option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs uppercase tracking-wider text-gray-light mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) =>
                setFormState({ ...formState, message: e.target.value })
              }
              rows={6}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-medium focus:outline-none focus:border-gold transition-colors resize-none"
              placeholder="Tell us how we can help..."
              required
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-gold text-dark px-12 py-4 text-sm uppercase tracking-widest hover:bg-white transition-colors"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const FAQSection = () => (
  <section className="min-h-screen flex items-center justify-center py-20 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          Common Questions
        </span>
        <h2 className="text-display-section font-display text-dark">FAQ</h2>
      </motion.div>

      <div className="space-y-6">
        {FAQ_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-stone-200 pb-6"
          >
            <h3 className="font-display text-lg text-dark mb-2">
              {item.question}
            </h3>
            <p className="text-gray-medium font-body leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-gray-medium font-body mb-4">
          Still have questions?
        </p>
        <a
          href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm uppercase tracking-widest border-b border-primary text-primary pb-1 hover:text-dark hover:border-dark transition-colors"
        >
          Chat with us on WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);

const LocationSection = () => (
  <section className="py-20 px-6 bg-stone-100">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
            Our Roots
          </span>
          <h2 className="text-display-sub font-display text-dark mb-6">
            Made in Northern Ghana
          </h2>
          <p className="text-gray-medium font-body leading-relaxed mb-6">
            Every JIMBA piece is handwoven in the Northern Region of Ghana, home
            to centuries of weaving tradition. Our weavers work from Tamale,
            Bolgatanga, and surrounding communities.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
              <p className="text-sm text-stone-600">
                Tamale, Northern Region - Primary workshop
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
              <p className="text-sm text-stone-600">
                Bolgatanga, Upper East Region - Partner weavers
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2" />
              <p className="text-sm text-stone-600">
                Accra - Customer service & shipping
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Map placeholder */}
          <div className="aspect-square bg-gradient-to-br from-[#3D2914] via-[#5D4037] to-[#2D1810] rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <span className="text-gold text-6xl mb-4">🇬🇭</span>
              <p className="text-white font-display text-xl">Northern Ghana</p>
              <p className="text-white/60 font-body text-sm mt-2">
                Where heritage meets craft
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const ContactExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative bg-off-white">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
      />

      <HeroSection />
      <ContactMethodsSection />
      <ContactFormSection />
      <FAQSection />
      <LocationSection />
    </div>
  );
};
