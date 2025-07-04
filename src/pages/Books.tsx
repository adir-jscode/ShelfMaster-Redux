import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import AddBookModal from "@/module/books/AddBookModal";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { Pencil, Trash2 } from "lucide-react";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery({});
  const books: IBook[] = data?.data || [];
  // For edit and delete modals (not implemented here)
  // const [selectedBook, setSelectedBook] = useState<IBook | null>(null);

  return (
    <>
      <div className="flex justify-end items-center mb-5">
        <AddBookModal />
      </div>

      <div className="overflow-x-auto rounded-lg border bg-background shadow">
        <table className="min-w-full divide-y divide-muted">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Author
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                Genre
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                ISBN
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground">
                Copies
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground">
                Availability
              </th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={7}>
                  <div className="py-10">
                    <Spinner size={40} />
                    <p className="mt-2 text-muted-foreground text-sm text-center">
                      Loading books...
                    </p>
                  </div>
                </td>
              </tr>
            ) : books.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-muted-foreground"
                >
                  No books found.
                </td>
              </tr>
            ) : (
              books.map((book) => (
                <tr
                  key={book._id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3">{book.title}</td>
                  <td className="px-4 py-3">{book.author}</td>
                  <td className="px-4 py-3">{book.genre}</td>
                  <td className="px-4 py-3">{book.isbn}</td>
                  <td className="px-4 py-3 text-center">{book.copies}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        book.copies === 0 || book.available === false
                          ? "bg-destructive/20 text-destructive"
                          : "bg-success/20 text-success"
                      }`}
                    >
                      {book.copies === 0 || book.available === false
                        ? "Unavailable"
                        : "Available"}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex justify-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon" /* onClick={() => handleEdit(book)} */
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon" /* onClick={() => handleDelete(book)} */
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Books;
