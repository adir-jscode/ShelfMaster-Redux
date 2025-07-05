import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { IBook } from "@/types";

type BorrowBookFormValues = {
  quantity: number;
  dueDate: string;
};

type BorrowBookModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: IBook | null;
  onSubmit: (form: BorrowBookFormValues) => void | Promise<void>;
};

const BorrowBookModal = ({
  open,
  onOpenChange,
  book,
  onSubmit,
}: BorrowBookModalProps) => {
  const form = useForm<BorrowBookFormValues>({
    defaultValues: {
      quantity: 1,
      dueDate: "",
    },
  });

  const handleSubmit: SubmitHandler<BorrowBookFormValues> = (data) => {
    onSubmit(data);
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Borrow Book{book ? `: ${book.title}` : ""}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="quantity"
              rules={{
                required: true,
                min: 1,
                max: book?.copies || 1,
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={1}
                      max={book?.copies || 1}
                      placeholder="Quantity"
                      disabled={!book || book.copies === 0}
                    />
                  </FormControl>
                  <FormMessage />
                  {book && (
                    <span className="text-xs text-muted-foreground">
                      Available: {book.copies}
                    </span>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dueDate"
              rules={{ required: true }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Due Date</FormLabel>
                  <FormControl>
                    <Input {...field} type="date" disabled={!book} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end gap-2 pt-2">
              <Button type="submit" disabled={!book || book.copies === 0}>
                Borrow
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BorrowBookModal;
