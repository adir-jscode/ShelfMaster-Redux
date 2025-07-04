import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

// Optional: Spinner component for loading state
function Spinner({ size = 20 }: { size?: number }) {
  return (
    <svg
      className="animate-spin text-primary"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
}

const AddBookModal = () => {
  const [open, setOpen] = useState(false);
  const form = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      copies: 1,
      available: true,
    },
  });

  const [createBook, { isLoading, isSuccess }] = useCreateBookMutation();
  if (isSuccess && open) {
    setTimeout(() => {
      setOpen(false);
      form.reset();
    }, 500);
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    await createBook(data);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add Book</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Book</DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">
            Fill up the form
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Book Title"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Author Name"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Genre</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Genre (e.g. Fiction, History)"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ISBN Number"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="copies"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Copies</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          min={0}
                          placeholder="Number of copies"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="available"
                  render={({ field }) => (
                    <FormItem className="flex items-center pt-6">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="mr-2 accent-primary"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormLabel className="mb-0">Available</FormLabel>
                    </FormItem>
                  )}
                />
              </div>
              {/* Error Message */}
              {/* {isError && (
                <div className="text-destructive text-sm">
                  {typeof error === "object" && error && "data" in error
                    ? (error as any).data?.message || "An error occurred."
                    : "An error occurred."}
                </div>
              )} */}
              {/* Success Message */}
              {isSuccess && (
                <div className="text-success text-sm">
                  Book added successfully!
                </div>
              )}
              <div className="flex justify-end gap-2 pt-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Spinner size={18} />
                      <span className="ml-2">Adding...</span>
                    </>
                  ) : (
                    "Add Book"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddBookModal;
