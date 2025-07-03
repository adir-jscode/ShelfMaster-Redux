// src/pages/index.tsx

import Footer from "@/components/Footer";
import Banner from "../components/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      {/* Other landing page content */}
      <Footer />
    </>
  );
}
