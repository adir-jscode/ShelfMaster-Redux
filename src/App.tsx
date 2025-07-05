import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
