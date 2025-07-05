export default function Footer() {
  return (
    <footer className="w-full bg-[#003366] pt-10 pb-4 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Address and Contact */}
        <div className="text-base mb-8 md:mb-0 leading-relaxed text-[#ffcc00]">
          <div className="uppercase font-bold tracking-widest mb-2 text-lg">
            Contact Us
          </div>
          <div>
            1418 River Drive, Suite 35
            <br />
            Cottonhall, CA 9622 United States
          </div>
          <div className="mt-2">
            <a
              href="tel:+15303474607"
              className="hover:underline block text-white"
            >
              +1 530 347 4607
            </a>
            <a
              href="mailto:info@shelfmaster.com"
              className="hover:underline block text-white"
            >
              info@shelfmaster.com
            </a>
          </div>
        </div>
        {/* Logo/Brand */}
        <div className="flex flex-col items-start md:items-end">
          <div className="flex items-center mb-2">
            {/* Gold "wing" icon inspired by Singapore Airlines */}
            <svg
              width={40}
              height={40}
              viewBox="0 0 24 24"
              fill="none"
              className="mr-2"
            >
              <path d="M8 20L18 4H15L5 20H8Z" fill="#ffcc00" />
              <path d="M13 20L21 8H18L10 20H13Z" fill="#ffcc00" opacity="0.8" />
            </svg>
            <span
              className="font-extrabold text-2xl tracking-widest uppercase"
              style={{
                letterSpacing: "0.2em",
                fontFamily: "Montserrat, Oswald, Arial, sans-serif",
                color: "#ffcc00",
              }}
            >
              ShelfMaster
            </span>
          </div>
          <span className="text-xs tracking-widest uppercase text-[#ffcc00] font-semibold">
            Library Platform
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ffcc00] my-8 opacity-40" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm">
        {/* Policy and copyright */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-center md:text-left">
          <a
            href="/privacy-policy"
            className="text-[#ffcc00] hover:underline font-bold uppercase"
          >
            Privacy Policy
          </a>
          <span className="hidden md:inline mx-2 text-[#ffcc00]">|</span>
          <span className="text-white">
            ShelfMaster © {new Date().getFullYear()} /{" "}
            <a
              href="/terms"
              className="text-[#ffcc00] hover:underline font-bold uppercase"
            >
              All Rights Reserved
            </a>
          </span>
        </div>
        {/* Navigation */}
        <div className="flex gap-6 justify-center">
          <a
            href="/books"
            className="hover:underline uppercase text-[#ffcc00] font-semibold"
          >
            Books
          </a>
          <a
            href="/authors"
            className="hover:underline uppercase text-[#ffcc00] font-semibold"
          >
            Authors
          </a>
          <a
            href="/about"
            className="hover:underline uppercase text-[#ffcc00] font-semibold"
          >
            About Us
          </a>
          <a
            href="/contacts"
            className="hover:underline uppercase text-[#ffcc00] font-semibold"
          >
            Contacts
          </a>
        </div>
      </div>
    </footer>
  );
}
