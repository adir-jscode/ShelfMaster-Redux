import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import AddBookModal from "@/module/books/AddBookModal";
import BorrowBookModal from "@/module/books/BorrowBookModal";
import DeleteBookDialog from "@/module/books/DeleteBookDialog";
import EditBookModal, {
  type EditBookFormValues,
} from "@/module/books/EditBookModal";
import {
  useBorrowBookMutation,
  useDeleteBookMutation,
  useGetBooksQuery,
  useUpdateBookMutation,
} from "@/redux/api/baseApi";
import type { IBook } from "@/types";
import { showErrorAlert, showSuccessAlert } from "@/utils/alert";
import { BookOpen, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const Books = () => {
  const { data, isLoading } = useGetBooksQuery({});
  const books: IBook[] = data?.data || [];
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteBook] = useDeleteBookMutation();
  const [updateBook] = useUpdateBookMutation();
  const [borrowBookMutation] = useBorrowBookMutation();
  const [borrowOpen, setBorrowOpen] = useState(false);
  const [borrowBook, setBorrowBook] = useState<IBook | null>(null);

  const handleBorrow = (book: IBook) => {
    setBorrowBook(book);
    setBorrowOpen(true);
  };
  const handleBorrowSubmit = async (form: {
    quantity: number;
    dueDate: string;
  }) => {
    if (!borrowBook) return;

    const payload = {
      book: borrowBook._id,
      quantity: form.quantity,
      dueDate: form.dueDate,
    };
    const res = await borrowBookMutation(payload).unwrap();
    showSuccessAlert(res.message || "Book borrowed successfully!");
    setBorrowOpen(false);
    setBorrowBook(null);
  };

  const handleDelete = (book: IBook) => {
    setDeleteOpen(true);
    setSelectedBook(book);
  };

  const handleDeleteConfirm = async () => {
    if (selectedBook) {
      const res = await deleteBook(selectedBook._id);
      if (res.error) {
        showErrorAlert("Failed to Delete");
      } else {
        showSuccessAlert(res.data.message);
      }
      setDeleteOpen(false);
      setSelectedBook(null);
    }
  };

  const handleEdit = (book: IBook) => {
    setSelectedBook(book);
    setEditOpen(true);
  };

  const handleEditSubmit = async (formData: EditBookFormValues) => {
    if (!selectedBook) return;
    const id = selectedBook._id;
    const updatedBook = { ...selectedBook, ...formData };
    const res = await updateBook({ id, ...updatedBook });

    if (res.error) {
      showErrorAlert("Failed to update");
    } else {
      showSuccessAlert(res.data.message);
    }
    setEditOpen(false);
    setSelectedBook(null);
  };

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
                      size="icon"
                      onClick={() => handleEdit(book)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(book)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleBorrow(book)}
                      disabled={book.copies === 0 || book.available === false}
                    >
                      <BookOpen className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <EditBookModal
        open={editOpen}
        onOpenChange={setEditOpen}
        book={selectedBook}
        onSubmit={handleEditSubmit}
      />
      <DeleteBookDialog
        open={deleteOpen}
        onOpenChange={setDeleteOpen}
        book={selectedBook}
        onConfirm={handleDeleteConfirm}
      />
      <BorrowBookModal
        open={borrowOpen}
        onOpenChange={setBorrowOpen}
        book={borrowBook}
        onSubmit={handleBorrowSubmit}
      />
    </>
  );
};

export default Books;
