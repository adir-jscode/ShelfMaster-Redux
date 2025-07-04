export default function Footer() {
  return (
    <footer className="w-full py-6 border-t bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Minimal Library Management System. Built
          with React, Redux Toolkit, and shadcn/ui.
        </p>
        <div className="flex gap-4">
          <a href="/books" className="underline underline-offset-4">
            All Books
          </a>
          <a href="/borrow-summary" className="underline underline-offset-4">
            Borrow Summary
          </a>
        </div>
      </div>
    </footer>
  );
}
