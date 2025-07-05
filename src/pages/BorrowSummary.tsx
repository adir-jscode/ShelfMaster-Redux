import Spinner from "@/components/Spinner";
import { Card } from "@/components/ui/card";
import { useBorrowSummaryQuery } from "@/redux/api/baseApi";

type BorrowSummaryItem = {
  title: string;
  isbn: string;
  totalBorrowed: number;
};

const BorrowSummary = () => {
  const { data, isLoading, isError } = useBorrowSummaryQuery(
    {},
    { refetchOnFocus: true, refetchOnMountOrArgChange: true }
  );

  // Safely map API response to the format needed for the table
  const summary: BorrowSummaryItem[] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?.data?.map((item: any) => ({
      title: item.book.title,
      isbn: item.book.isbn,
      totalBorrowed: item.totalQuantity,
    })) || [];

  return (
    <div className="container mx-auto py-10">
      <Card className="p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-primary">Borrow Summary</h2>
        <p className="text-muted-foreground mb-6">
          Overview of total books borrowed from your library.
        </p>
        <div className="overflow-x-auto rounded-lg border bg-background shadow">
          <table className="min-w-full divide-y divide-muted">
            <thead className="bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                  Book Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground">
                  ISBN
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-muted-foreground">
                  Total Quantity Borrowed
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={3}>
                    <div className="py-10">
                      <Spinner size={36} />
                      <p className="mt-2 text-muted-foreground text-sm text-center">
                        Loading summary...
                      </p>
                    </div>
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-destructive"
                  >
                    Failed to load summary.
                  </td>
                </tr>
              ) : summary.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-4 py-6 text-center text-muted-foreground"
                  >
                    No borrow records found.
                  </td>
                </tr>
              ) : (
                summary.map((item) => (
                  <tr
                    key={item.isbn}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3">{item.title}</td>
                    <td className="px-4 py-3">{item.isbn}</td>
                    <td className="px-4 py-3 text-center font-semibold text-primary">
                      {item.totalBorrowed}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default BorrowSummary;
