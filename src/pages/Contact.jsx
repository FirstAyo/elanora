import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

function Contact() {
  // quick data blocks so you can tweak content easily later
  const contactMethods = [
    {
      label: "Email",
      value: "support@elanora.studio",
      note: "We reply within 24 hours on business days.",
    },
    {
      label: "Phone",
      value: "+1 (666) 267 2281",
      note: "Mon – Fri, 9:00 – 17:00 (PST).",
    },
    {
      label: "Studio",
      value: "6088 Chester St, Vancouver, BC, V5W 3B7",
      note: "Visits by appointment only.",
    },
  ];

  const socialLinks = [
    { name: "Instagram", handle: "@elanora.studio", url: "#" },
    { name: "Pinterest", handle: "@elanora", url: "#" },
    { name: "TikTok", handle: "@elanora.studio", url: "#" },
  ];

  const reasons = [
    "Order & shipping questions",
    "Size & fit help",
    "Returns & exchanges",
    "Collaboration & press",
  ];

  const faqs = [
    {
      q: "What is your response time?",
      a: "We aim to reply to all messages within 24 hours on business days. During launches or holidays it may take a little longer, but we always see you.",
    },
    {
      q: "Where do you ship from?",
      a: "Most orders are shipped from our Vancouver studio. Some pieces in limited collections may ship directly from partner ateliers.",
    },
    {
      q: "Can I visit your studio?",
      a: "Yes, by appointment. Share a preferred date and time in your message and we’ll get back to you with available slots.",
    },
    {
      q: "What is your response time?",
      a: "We aim to reply to all messages within 24 hours on business days. During launches or holidays it may take a little longer, but we always see you.",
    },
    {
      q: "Can I visit your studio?",
      a: "Yes, by appointment. Share a preferred date and time in your message and we’ll get back to you with available slots.",
    },
  ];

  // simple onSubmit to prevent page reload (you can replace with real handler later)
  const handleSubmit = (e) => {
    e.preventDefault();
    // hook up to backend / email service later
    alert(
      "Message submitted (demo). You can now connect this form to your backend."
    );
  };

  return (
    <main className="bg-white">
      {/* HERO: title + breadcrumb over soft image */}
      <section className="relative h-40 sm:h-48 md:h-56 lg:h-96 overflow-hidden">
        <img
          src="/images/contact-us.jpg" // replace with any calm lifestyle / workspace image
          alt="Élanora studio desk with laptop and coffee"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative flex h-full items-center">
          <Container>
            <div className="px-4 text-center space-y-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] ">
                Contact
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Let’s talk about your wardrobe.
              </h1>
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center justify-center gap-1 text-xs sm:text-sm">
                  <li>
                    <Link to="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li className="font-semibold">Contact</li>
                </ol>
              </nav>
            </div>
          </Container>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] px-4">
            {/* LEFT COLUMN: contact info & social */}
            <aside className="space-y-8">
              {/* Intro text */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  We’re here to help.
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Whether you&apos;re unsure about sizes, tracking an order, or
                  planning a capsule wardrobe, send us a note. Real humans will
                  get back to you—no robots, no scripts.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-10">
                {/* Contact method cards */}
                <div className="space-y-4">
                  {contactMethods.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 sm:px-5 sm:py-4"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">{item.note}</p>
                    </div>
                  ))}
                </div>

                {/* Reasons to contact (like a mini checklist) */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Common reasons
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    {reasons.map((reason) => (
                      <li key={reason} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social strip */}
                <div className="border-t border-gray-100 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Find us online
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    {socialLinks.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.url}
                          className="inline-flex items-center gap-2 hover:text-gray-900"
                        >
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                            {social.name}
                          </span>
                          <span>{social.handle}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: contact form */}
            <section className="rounded-3xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6 lg:p-7">
              <div className="mb-5 space-y-1">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Send us a message
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  Fill in the form and we&apos;ll respond within one business
                  day. If your note is about an order, include your order
                  number.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-gray-700"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                    placeholder="Size help, order tracking, collaboration…"
                  />
                </div>

                {/* Topic select */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="topic"
                    className="text-xs font-medium text-gray-700"
                  >
                    What can we help you with?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Choose a topic
                    </option>
                    <option value="order">Order & shipping</option>
                    <option value="returns">Returns & exchanges</option>
                    <option value="sizing">Sizing & styling advice</option>
                    <option value="press">Collaboration / press</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                {/* Order number (optional) */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="order"
                    className="text-xs font-medium text-gray-700"
                  >
                    Order number (optional)
                  </label>
                  <input
                    id="order"
                    name="order"
                    type="text"
                    className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-gray-900"
                    placeholder="#ELN-1234"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-gray-900"
                    placeholder="Tell us as much detail as you can. The more we know, the faster we can help."
                  />
                </div>

                {/* Consent + submit */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <label className="flex items-start gap-2 text-xs text-gray-600">
                    <input
                      type="checkbox"
                      className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300"
                      required
                    />
                    <span>
                      I agree to be contacted by Élanora regarding my inquiry
                      and I&apos;ve read the privacy notice.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-900"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </section>
          </div>
        </Container>
      </section>

      {/* FAQ + MAP STRIP */}
      <section className="border-t border-gray-100 bg-gray-50 py-10 sm:py-12 lg:py-14">
        <Container>
          <div className="grid gap-8 px-4 lg:grid-cols-2">
            {/* FAQ */}
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                Before you write, a few quick answers.
              </h2>
              <div className="mt-4 space-y-3">
                {faqs.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-gray-200 bg-white px-4 py-3 sm:px-5 sm:py-4"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-gray-900">
                      <span>{item.q}</span>
                      <span className="text-lg leading-none text-gray-400 group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-2 text-sm text-gray-600">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Map / location placeholder */}
            <section className="flex flex-col rounded-3xl border border-gray-200 bg-white p-4 sm:p-5">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-semibold text-gray-900">
                    Our studio
                  </h2>
                  <p className="text-xs text-gray-600">
                    Vancouver, Canada · Visits by appointment
                  </p>
                </div>
                <span className="rounded-full bg-gray-900 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                  Map
                </span>
              </div>
              {/* Replace this block with an actual embedded map if you want */}
              <div className="relative flex-1 rounded-2xl bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.3913946574226!2d-123.11017652398694!3d49.2249757748395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486746f412563f7%3A0x36606d221509fdfe!2sLangara%20College!5e1!3m2!1sen!2sca!4v1765134995727!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }} // ✅ object, not string
                  allowFullScreen // ✅ camelCase, boolean
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" // ✅ camelCase
                  title="Langara College map" // ✅ recommended for accessibility
                />

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/40" />
              </div>
            </section>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Contact;
