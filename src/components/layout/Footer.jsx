import React from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";

function Footer() {
  const contactIcons = [
    {
      title: "6088 Chester St, Vancouver, BC, V5W 3B7",
      icon: "/icons/marker.svg",
    },
    { title: "contact@company.com", icon: "/icons/envelope.svg" },
    { title: "+1 666 267 2281", icon: "/icons/phone-call.svg" },
  ];
  return (
    <>
      <Container>
        <footer className="p-10 bg-gray-100">
          <div>
            <Link to="/" className="text-3xl font-bold">
              Élanora
            </Link>

            <div>
              {contactIcons.map((contact, i) => (
                <div key={i} className="flex">
                  <img src={contact.icon} alt="contact info" className="w-6 h-6" />
                  <p>{contact.title}</p>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}

export default Footer;
