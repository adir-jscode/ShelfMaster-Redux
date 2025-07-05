import { useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Books", to: "/books" },
    { label: "Borrow Summary", to: "/borrow-summary" },
  ];

  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-[#003366] shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 md:px-8">
        {/* Brand */}
        <Link to="/" className="flex flex-col items-start">
          <span
            className="uppercase tracking-[.25em] font-extrabold text-[#ffcc00] text-[1.5rem] leading-none font-sans"
            style={{ letterSpacing: "0.25em" }}
          >
            SHELFMASTER
          </span>
          <span
            className="text-xs text-white tracking-widest mt-1 font-bold"
            style={{ letterSpacing: "0.18em" }}
          >
            YOUR FAVORITE BOOKSHELF
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`uppercase text-sm font-bold tracking-[.18em] transition relative pb-1 ${
                isActive(link.to)
                  ? "text-[#ffcc00] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded"
                  : "text-white hover:text-[#ffcc00]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-[#ffcc00] transition-all duration-300 ${
              open ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#ffcc00] my-1 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#ffcc00] transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#003366] px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`uppercase text-base font-bold tracking-[.18em] transition relative pb-1 ${
                  isActive(link.to)
                    ? "text-[#ffcc00] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded"
                    : "text-white hover:text-[#ffcc00]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
