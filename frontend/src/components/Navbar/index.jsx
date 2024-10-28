"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const handleContactClick = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  const handleServicesClick = (event) => {
    event.preventDefault();
    if (pathname === "/") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#services";
    }
  };

  const links = [
    { href: "/", label: "Home" },
    { href: handleServicesClick, label: "Services" },
    { href: "/works", label: "Works" },
    { href: "/aboutus", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
  ];

  const isActiveLink = (linkHref) => {
    if (linkHref === "/") {
      return pathname === "/"; // Home is active only on root path
    } else if (linkHref === "/works" || linkHref === "/aboutus" || linkHref === "/blog" || linkHref === "/careers") {
      return pathname.startsWith(linkHref); // Active if on any sub-path
    } else if (linkHref === handleServicesClick) {
      return pathname.startsWith("/services"); // Active only if on /services or its sub-paths
    }
    return false; // Default to inactive
  };

  return (
    <nav className="bg-white border border-b border-color-gray-200 fixed top-0 left-0 right-0 w-full z-10">
      <div className="px-32">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center text-xl font-bold text-color-primary"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-8 w-auto mr-2"
              />
              OEMAH SOLUTION INDONESIA
            </Link>
          </div>

          <div className="hidden sm:flex flex-grow justify-center space-x-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={typeof link.href === "function" ? "#" : link.href}
                onClick={
                  typeof link.href === "function" ? link.href : undefined
                }
                className={`text-base font-medium inline-flex items-center px-2 pt-1 ${
                  isActiveLink(link.href)
                    ? "text-color-secondary"
                    : "text-color-primary hover:text-color-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="relative group w-44">
            <a
              href="#"
              onClick={handleContactClick}
              className="inline-block bg-color-primary text-white items-center pl-5 py-2 rounded-full transition-all duration-300 group ease-in-out group-hover:pr-8"
            >
              Get In Touch
              <span className="inline-block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 transform group-hover:translate-x-2 ml-2">
                ➔
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
