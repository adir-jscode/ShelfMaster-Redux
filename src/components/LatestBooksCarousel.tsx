import { Card } from "@/components/ui/card";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import Spinner from "@/components/Spinner";

// Professional blank book cover from Pixabay (copyright-free)
const DEFAULT_BOOK_IMAGE =
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80";

export default function LatestBooksGrid() {
  const { data, isLoading, isError } = useGetBooksQuery({});
  const books = data?.data || [];

  // Sort by latest (optional)
  const latestBooks = [...books].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <section className="py-12 bg-[#faf9f6]">
      <h2 className="text-3xl font-extrabold mb-10 text-center text-primary tracking-tight">
        Latest Books
      </h2>
      {isLoading ? (
        <div className="flex justify-center py-16">
          <Spinner size={48} />
        </div>
      ) : isError ? (
        <div className="text-center text-destructive py-16 text-lg font-semibold">
          Failed to load books.
        </div>
      ) : latestBooks.length === 0 ? (
        <div className="text-center text-muted-foreground py-16 text-lg">
          No books found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
          {latestBooks.slice(0, 8).map((book) => (
            <Card
              key={book._id}
              className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow p-6 border border-[#f0ede8] w-64"
            >
              <div className="relative w-44 h-64 mb-5">
                <img
                  src={DEFAULT_BOOK_IMAGE}
                  alt={book.title}
                  className="w-full h-full object-cover rounded-lg border border-[#e6e2db] shadow"
                />
              </div>
              <div className="italic text-gray-400 text-sm mb-1">
                {book.author}
              </div>
              <div className="font-bold text-lg text-center mb-1 text-[#222] hover:text-primary transition-colors cursor-pointer">
                {book.title}
              </div>

              <div className="text-base text-[#ffcc00] font-semibold mt-2">
                Copies Available: {book.copies}
              </div>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}
