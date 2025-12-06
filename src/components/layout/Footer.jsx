import React, { useState } from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

function Footer() {
  const [openSections, setOpenSections] = useState({
    categories: false,
    information: false,
    usefulLinks: false,
  });

  const contactIcons = [
    {
      title: "6088 Chester St, Vancouver, BC, V5W 3B7",
      icon: "/icons/marker.svg",
    },
    { title: "contact@company.com", icon: "/icons/envelope.svg" },
    { title: "+1 666 267 2281", icon: "/icons/phone-call.svg" },
  ];

  const socialIcons = [
    { title: "facebook", url: "facebook.com", icon: "/icons/facebook.svg" },
    { title: "twitter", url: "x.com", icon: "/icons/twitter.svg" },
    { title: "instagram", url: "instagram.com", icon: "/icons/instagram.svg" },
    { title: "youtube", url: "youtube.com", icon: "/icons/youtube.svg" },
    { title: "pinterest", url: "pinterest.com", icon: "/icons/pinterest.svg" },
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

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <Container>
        <footer className="bg-gray-100">
          <section className="grid lg:grid-cols-5 px-5 py-10 lg:p-20 gap-8">
            {/* Brand + contact + social */}
            <div className="flex flex-col gap-9">
              <Link to="/" className="text-3xl font-bold">
                Élanora
              </Link>

              <div className="flex flex-col gap-5 text-gray-500">
                {contactIcons.map((contact, i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <img
                      src={contact.icon}
                      alt="contact info"
                      className="w-6 h-6"
                    />
                    <p>{contact.title}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                {socialIcons.map((social, i) => (
                  <Link to={social.url} key={i}>
                    <img
                      src={social.icon}
                      alt={social.title}
                      className="w-6 h-6"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center justify-between w-full lg:cursor-default"
                onClick={() => toggleSection("categories")}
              >
                <h4 className="font-semibold">Categories</h4>
                {/* + / - only visible on mobile */}
                <span className="text-xl lg:hidden">
                  {openSections.categories ? "-" : "+"}
                </span>
              </button>

              <ul
                className={`flex-col gap-4 text-gray-500
                  ${openSections.categories ? "flex" : "hidden"} lg:flex`}
              >
                {categories.map((category, i) => (
                  <Link to={category.url} key={i}>
                    <li>{category.name}</li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center justify-between w-full lg:cursor-default"
                onClick={() => toggleSection("information")}
              >
                <h4 className="font-semibold">Information</h4>
                <span className="text-xl lg:hidden">
                  {openSections.information ? "-" : "+"}
                </span>
              </button>

              <ul
                className={`flex-col gap-4 text-gray-500
                  ${openSections.information ? "flex" : "hidden"} lg:flex`}
              >
                {information.map((info, i) => (
                  <Link to={info.url} key={i}>
                    <li>{info.name}</li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex items-center justify-between w-full lg:cursor-default"
                onClick={() => toggleSection("usefulLinks")}
              >
                <h4 className="font-semibold">Useful Links</h4>
                <span className="text-xl lg:hidden">
                  {openSections.usefulLinks ? "-" : "+"}
                </span>
              </button>

              <ul
                className={`flex-col gap-4 text-gray-500
                  ${openSections.usefulLinks ? "flex" : "hidden"} lg:flex`}
              >
                {usefulLinks.map((usefulLink, i) => (
                  <Link to={usefulLink.url} key={i}>
                    <li>{usefulLink.name}</li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold">Newsletter Signup</h4>
              <p className="text-gray-500">
                Subscribe to our newsletter and get 10% off your first purchase
              </p>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter email..."
                  className="border border-gray-500 rounded-full px-4 py-3 w-full"
                />
                <button className="bg-black text-white px-5 py-2.5 rounded-full absolute right-1 top-[2.6px]">
                  Subscribe
                </button>
              </div>
            </div>
          </section>

          <section className="bg-white pt-5 pb-20 lg:py-5 px-5 lg:px-20 flex flex-col lg:flex-row justify-between gap-4">
            <div>
              <p className="text-center text-sm lg:text-base">
                All Rights Reserved &copy; 2025{" "}
                <span>
                  <Link
                    to="https://www.craftedtemplate.com/"
                    className="text-blue-300 font-semibold"
                  >
                    Crafted Template
                  </Link>
                </span>{" "}
                - Developed by{" "}
                <span>
                  <Link
                    to="https://www.linkedin.com/in/firstayo/"
                    className="text-blue-300 font-semibold"
                  >
                    FirstAyo
                  </Link>
                </span>
              </p>
            </div>

            <div>
              <ul className="flex flex-wrap gap-5 items-center justify-center text-gray-500 text-sm lg:text-base">
                {footerMenus.map((footerMenu, i) => (
                  <Link key={i} to={footerMenu.url}>
                    <li>{footerMenu.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </section>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
