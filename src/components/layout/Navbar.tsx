import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full h-20 sticky top-0 z-50 bg-[#003366] shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-8">
        {/* Brand */}
        <Link to="/" className="flex flex-col items-start">
          <span
            className="uppercase tracking-[.25em] font-extrabold text-[#ffcc00] text-[1.5rem] leading-none font-sans"
            style={{
              // If you load Singapore Sling or similar, set fontFamily here
              // fontFamily: "'Singapore Sling', Montserrat, Arial, sans-serif",
              letterSpacing: "0.25em",
            }}
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

        {/* Navigation */}
        <div className="flex gap-8">
          <Link
            to="/"
            className={`uppercase text-sm font-bold tracking-[.18em] transition relative pb-1 ${
              isActive("/")
                ? "text-[#ffcc00] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded"
                : "text-white hover:text-[#ffcc00]"
            }`}
          >
            Home
          </Link>
          <Link
            to="/books"
            className={`uppercase text-sm font-bold tracking-[.18em] transition relative pb-1 ${
              isActive("/books")
                ? "text-[#ffcc00] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded"
                : "text-white hover:text-[#ffcc00]"
            }`}
          >
            Books
          </Link>
          <Link
            to="/borrow-summary"
            className={`uppercase text-sm font-bold tracking-[.18em] transition relative pb-1 ${
              isActive("/borrow-summary")
                ? "text-[#ffcc00] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#ffcc00] after:rounded"
                : "text-white hover:text-[#ffcc00]"
            }`}
          >
            Borrow Summary
          </Link>
        </div>
      </div>
    </nav>
  );
}
