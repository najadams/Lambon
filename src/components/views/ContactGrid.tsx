"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BRAND } from "@/lib/constants";

const CONTACT_METHODS = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "Fastest Response",
    value: BRAND.whatsapp,
    action: `https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`,
    actionLabel: "Start Chat",
    responseTime: "~2 hours",
  },
  {
    id: "email",
    title: "Email",
    subtitle: "Detailed Inquiries",
    value: BRAND.email,
    action: `mailto:${BRAND.email}`,
    actionLabel: "Send Email",
    responseTime: "24-48 hours",
  },
  {
    id: "instagram",
    title: "Instagram",
    subtitle: "Visual Showroom",
    value: BRAND.instagram,
    action: `https://instagram.com/${BRAND.instagram.replace("@", "")}`,
    actionLabel: "Follow",
    responseTime: "Varies",
  },
];

const FAQ_ITEMS = [
  {
    question: "How long for delivery?",
    answer: "2-4 weeks for most orders. Custom requests may take longer.",
  },
  {
    question: "Custom sizing available?",
    answer: "Yes! Contact us with your measurements for a quote.",
  },
  {
    question: "International shipping?",
    answer: "We ship worldwide. Contact us for shipping quotes.",
  },
  {
    question: "Can I visit the workshop?",
    answer: "Yes, visits can be arranged. Contact us in advance.",
  },
];

export const ContactGrid = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          Get in Touch
        </span>
        <h1 className="text-display-sub font-display text-dark mb-4">
          Contact Us
        </h1>
        <p className="text-gray-medium font-body max-w-lg mx-auto">
          Questions, orders, or just want to say hello? We&apos;d love to hear
          from you.
        </p>
      </motion.div>

      {/* Quick Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid md:grid-cols-3 gap-6 mb-16"
      >
        {CONTACT_METHODS.map((method) => (
          <a
            key={method.id}
            href={method.action}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 border border-stone-200 rounded-lg hover:border-primary hover:shadow-subtle transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display text-lg text-dark group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-xs text-gold uppercase tracking-wider">
                  {method.subtitle}
                </p>
              </div>
              <span className="text-xs text-gray-medium bg-stone-100 px-2 py-1 rounded">
                {method.responseTime}
              </span>
            </div>
            <p className="text-sm text-gray-medium font-mono mb-4">
              {method.value}
            </p>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-primary">
              {method.actionLabel}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="font-display text-xl text-dark mb-6">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="grid-name"
                  className="block text-xs uppercase tracking-wider text-gray-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="grid-name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full border border-stone-200 rounded-lg px-4 py-3 text-dark placeholder-stone-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="grid-email"
                  className="block text-xs uppercase tracking-wider text-gray-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="grid-email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full border border-stone-200 rounded-lg px-4 py-3 text-dark placeholder-stone-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="grid-subject"
                className="block text-xs uppercase tracking-wider text-gray-medium mb-2"
              >
                Subject
              </label>
              <select
                id="grid-subject"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({ ...formState, subject: e.target.value })
                }
                className="w-full border border-stone-200 rounded-lg px-4 py-3 text-dark focus:outline-none focus:border-primary transition-colors"
                required
              >
                <option value="">Select a topic</option>
                <option value="order">Place an Order</option>
                <option value="sizing">Sizing Question</option>
                <option value="custom">Custom Request</option>
                <option value="institutional">Institutional/Bulk Order</option>
                <option value="partnership">Partnership Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="grid-message"
                className="block text-xs uppercase tracking-wider text-gray-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="grid-message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={5}
                className="w-full border border-stone-200 rounded-lg px-4 py-3 text-dark placeholder-stone-400 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="How can we help?"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-dark text-white py-4 text-sm uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Column: FAQ + Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-10"
        >
          {/* Quick FAQ */}
          <div>
            <h2 className="font-display text-xl text-dark mb-6">Quick FAQ</h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-stone-100 pb-4 last:border-0"
                >
                  <h3 className="font-display text-sm text-dark mb-1">
                    {item.question}
                  </h3>
                  <p className="text-sm text-gray-medium font-body">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-dark text-white rounded-lg p-6">
            <h2 className="font-display text-lg mb-4">Our Location</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-gold">📍</span>
                <div>
                  <p className="text-white">Workshop</p>
                  <p className="text-gray-light">Tamale, Northern Region, Ghana</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold">🚚</span>
                <div>
                  <p className="text-white">Shipping</p>
                  <p className="text-gray-light">Accra-based fulfillment</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-gold">🌍</span>
                <div>
                  <p className="text-white">Coverage</p>
                  <p className="text-gray-light">Worldwide shipping available</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/20">
              <p className="text-xs text-gray-light italic">
                Workshop visits available by appointment
              </p>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#25D366] text-white rounded-lg p-6 text-center">
            <p className="font-display text-lg mb-2">Prefer to chat?</p>
            <p className="text-sm text-white/80 mb-4">
              Get instant answers on WhatsApp
            </p>
            <a
              href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#25D366] px-6 py-3 rounded-full text-sm font-medium hover:bg-off-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat Now
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
