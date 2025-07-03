// src/components/Navbar.tsx

import { Link, useLocation } from "react-router-dom"; // If using React Router
// If not using React Router, replace <Link> with <a> and adjust hrefs accordingly.

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "All Books", path: "/books" },
    { name: "Add Book", path: "/create-book" },
    { name: "Borrow Summary", path: "/borrow-summary" },
  ];

  return (
    <nav className="w-full bg-background border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold tracking-tight text-primary">
          Minimal Library 📚
        </Link>
        {/* Navigation Links */}
        <div className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-primary underline underline-offset-4"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
