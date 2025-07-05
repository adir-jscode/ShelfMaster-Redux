import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { IBook } from "@/types";

type DeleteBookDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: IBook | null;
  onConfirm: () => void;
};

const DeleteBookDialog = ({
  open,
  onOpenChange,
  book,
  onConfirm,
}: DeleteBookDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete Book</DialogTitle>
      </DialogHeader>
      <div>
        Are you sure you want to delete <b>{book?.title}</b>? This action cannot
        be undone.
      </div>
      <DialogFooter>
        <Button variant="destructive" onClick={onConfirm}>
          Delete
        </Button>
        <Button variant="outline" onClick={() => onOpenChange(false)}>
          Cancel
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default DeleteBookDialog;
