// src/pages/Home.tsx

import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center py-16 px-4 bg-gradient-to-br from-primary/10 to-background">
        <div className="max-w-2xl w-full text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/library-hero.svg"
              alt="Library Illustration"
              className="w-32 h-32 object-contain"
              loading="lazy"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            Minimal Library Management System
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Effortlessly manage your library’s books and borrowing — clean,
            fast, and fully responsive. No login required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/books">
              <Button size="lg" className="w-full sm:w-auto">
                📚 View All Books
              </Button>
            </Link>
            <Link to="/create-book">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                ➕ Add New Book
              </Button>
            </Link>
            <Link to="/borrow-summary">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                📊 Borrow Summary
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border p-6 shadow-sm text-center">
            <div className="text-3xl mb-2">🛠️</div>
            <h3 className="font-semibold text-lg mb-1">Book Management</h3>
            <p className="text-muted-foreground text-sm">
              Add, edit, delete, and manage your library’s collection with ease.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm text-center">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold text-lg mb-1">Instant Borrowing</h3>
            <p className="text-muted-foreground text-sm">
              Borrow books, track availability, and view summaries—all in real
              time.
            </p>
          </div>
          <div className="rounded-xl border p-6 shadow-sm text-center">
            <div className="text-3xl mb-2">📱</div>
            <h3 className="font-semibold text-lg mb-1">Responsive & Minimal</h3>
            <p className="text-muted-foreground text-sm">
              Clean, modern UI that works beautifully on any device.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
