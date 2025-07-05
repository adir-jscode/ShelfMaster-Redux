import App from "@/App";
import Books from "@/pages/Books";
import BorrowSummary from "@/pages/BorrowSummary";
import CreateBook from "@/pages/CreateBook";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/books",
        Component: Books,
      },
      {
        path: "/create-book",
        Component: CreateBook,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
