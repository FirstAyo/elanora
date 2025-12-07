import React, { useState } from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

function Footer() {
  const [openSection, setOpenSection] = useState(null); // for mobile accordions

  const contactIcons = [
    {
      title: "6088 Chester St, Vancouver, BC, V5W 3B7",
      icon: "/icons/marker.svg",
    },
    { title: "contact@company.com", icon: "/icons/envelope.svg" },
    { title: "+1 666 267 2281", icon: "/icons/phone-call.svg" },
  ];

  const socialIcons = [
    {
      title: "facebook",
      url: "https://facebook.com",
      icon: "/icons/facebook.svg",
    },
    { title: "twitter", url: "https://x.com", icon: "/icons/twitter.svg" },
    {
      title: "instagram",
      url: "https://instagram.com",
      icon: "/icons/instagram.svg",
    },
    {
      title: "youtube",
      url: "https://youtube.com",
      icon: "/icons/youtube.svg",
    },
    {
      title: "pinterest",
      url: "https://pinterest.com",
      icon: "/icons/pinterest.svg",
    },
  ];

  const categories = [
    { name: "Men", url: "/" },
    { name: "Women", url: "/" },
    { name: "Accessories", url: "/" },
    { name: "Shoes", url: "/" },
    { name: "Watch", url: "/" },
    { name: "Dress", url: "/" },
  ];

  const information = [
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Store Location", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "FAQ", url: "/" },
  ];

  const usefulLinks = [
    { name: "Latest News", url: "/" },
    { name: "My Account", url: "/" },
    { name: "Size Guide", url: "/" },
    { name: "FAQs", url: "/" },
    { name: "FAQs 2", url: "/" },
  ];

  const footerMenus = [
    { name: "Shop", url: "/shop" },
    { name: "About Us", url: "/about" },
    { name: "Contact Us", url: "/contact" },
    { name: "Blog", url: "/blog" },
  ];

  const handleToggle = (key) => {
    setOpenSection((prev) => (prev === key ? null : key));
  };

  return (
    <footer className="bg-slate-950 text-slate-100 px-4 pb-16 lg:py-2">
      {/* TOP: Newsletter band */}
      <div className="border-b border-slate-800">
        <Container>
          <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Newsletter
              </p>
              <h4 className="text-lg font-semibold">
                Get 10% off your first order.
              </h4>
              <p className="text-sm text-slate-400">
                Be the first to know about new drops, sales, and curated edits.
              </p>
            </div>

            <form
              className="flex w-full max-w-md items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="h-9 flex-1 bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
              />
              <button className="rounded-full bg-slate-50 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-white">
                Subscribe
              </button>
            </form>
          </div>
        </Container>
      </div>

      {/* MIDDLE: Main footer content */}
      <Container>
        <div className="grid gap-10 py-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact + social */}
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-bold tracking-tight">
              Élanora
            </Link>

            <div className="space-y-3 text-sm text-slate-300">
              {contactIcons.map((contact, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img
                    src={contact.icon}
                    alt={contact.title}
                    className="h-5 w-5"
                  />
                  <p>{contact.title}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white hover:bg-slate-500"
                >
                  <img
                    src={social.icon}
                    alt={social.title}
                    className="h-4 w-4"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columns with accordion behavior on mobile */}

          {/* Categories */}
          <div className="border-b border-slate-800 pb-4 md:border-none md:pb-0">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left md:cursor-default"
              onClick={() => handleToggle("categories")}
            >
              <h4 className="text-sm font-semibold">Categories</h4>
              <span className="text-xl md:hidden">
                {openSection === "categories" ? "−" : "+"}
              </span>
            </button>
            <ul
              className={`mt-3 flex-col gap-2 text-sm text-slate-400 ${
                openSection === "categories" ? "flex" : "hidden"
              } md:mt-4 md:flex`}
            >
              {categories.map((category, i) => (
                <li key={i}>
                  <Link
                    to={category.url}
                    className="transition-colors hover:text-slate-100"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="border-b border-slate-800 pb-4 md:border-none md:pb-0">
            <button
              type="button"
              className="flex w-full items-center justify-between text-left md:cursor-default"
              onClick={() => handleToggle("information")}
            >
              <h4 className="text-sm font-semibold">Information</h4>
              <span className="text-xl md:hidden">
                {openSection === "information" ? "−" : "+"}
              </span>
            </button>
            <ul
              className={`mt-3 flex-col gap-2 text-sm text-slate-400 ${
                openSection === "information" ? "flex" : "hidden"
              } md:mt-4 md:flex`}
            >
              {information.map((info, i) => (
                <li key={i}>
                  <Link
                    to={info.url}
                    className="transition-colors hover:text-slate-100"
                  >
                    {info.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links + extra column */}
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4 md:border-none md:pb-0">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left md:cursor-default"
                onClick={() => handleToggle("useful")}
              >
                <h4 className="text-sm font-semibold">Useful Links</h4>
                <span className="text-xl md:hidden">
                  {openSection === "useful" ? "−" : "+"}
                </span>
              </button>
              <ul
                className={`mt-3 flex-col gap-2 text-sm text-slate-400 ${
                  openSection === "useful" ? "flex" : "hidden"
                } md:mt-4 md:flex`}
              >
                {usefulLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.url}
                      className="transition-colors hover:text-slate-100"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* You could drop something else here later (e.g. payment icons) */}
          </div>
        </div>
      </Container>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <Container>
          <div className="flex flex-col gap-3 py-5 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
            <p className="text-center md:text-left">
              All Rights Reserved &copy; 2025{" "}
              <Link
                to="https://www.craftedtemplate.com/"
                className="font-semibold text-slate-200 hover:text-white"
              >
                Crafted Template
              </Link>{" "}
              · Developed by{" "}
              <Link
                to="https://www.linkedin.com/in/firstayo/"
                className="font-semibold text-slate-200 hover:text-white"
              >
                FirstAyo
              </Link>
            </p>

            <ul className="flex flex-wrap items-center justify-center gap-4 text-xs md:justify-end">
              {footerMenus.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.url}
                    className="transition-colors hover:text-slate-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
