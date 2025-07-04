import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="max-2-7xl max-auto h-16 flex justify-between items-center gap-3 px-5">
      <div className="flex items-center">
        <span className="font-bold ml-2">ShelfMaster</span>
      </div>
      <Link to={"/books"}>Books</Link>
      <Link to={"/books"}>Add Book</Link>
      <Link to={"/books"}>Borrow Summary</Link>
    </nav>
  );
}
