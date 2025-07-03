import { Image } from "lucide-react";

export default function Banner() {
  return (
    <section className="w-full bg-muted/50 py-12 md:py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Minimal Library Management System{" "}
            <span role="img" aria-label="books">
              📚
            </span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            A clean, functional client-side app built with React, Redux Toolkit
            Query, and TypeScript. Easily manage your library: view, add, edit,
            delete, and borrow books—all with a minimalist, responsive UI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/books"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-colors hover:bg-primary/90"
            >
              View Books
            </a>
            <a
              href="/create-book"
              className="inline-block px-6 py-3 border border-primary text-primary rounded-md font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Add New Book
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Replace with your own image */}
          <Image />
        </div>
      </div>
    </section>
  );
}
