import { useState } from "react";
import { Link } from "react-router-dom";

const AdminTable = () => {
  const books = [
    {
      name: "Book Title 1",
      isbn: "123-4567890123",
      category: "Fiction",
      quantity: 100,
      available: 80,
      price: "$20.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
    {
      name: "Book Title 2",
      isbn: "987-6543210987",
      category: "Non-Fiction",
      quantity: 50,
      available: 40,
      price: "$25.00",
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(books.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBooks = books.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="table-container">
        <div className="add-page">
          <h1 style={{ marginBottom: "10px" }}>Book List</h1>
          <Link to={"/admin/dashboard/create-book"}><button className="add-btn">Add Book</button></Link>
        </div>
        <div className="book-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>ISBN</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Available</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.name}</td>
                  <td>{book.isbn}</td>
                  <td>{book.category}</td>
                  <td>{book.quantity}</td>
                  <td>{book.available}</td>
                  <td>{book.price}</td>
                  <td>
                   <div className="multiple-btn" style={{display:"flex",alignItems:"center",gap:"10px",justifyContent:"center"}}>
                   <Link to={"/books"}>
                      <button className="view-btn">View</button>
                    </Link>
                    <Link to={"/books"}>
                      <button className="view-btn">Edit</button>
                    </Link>
                    <Link to={"/books"}>
                      <button className="view-btn" style={{backgroundColor:"purple"}}>Delete</button>
                    </Link>
                   </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination-container">
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              className={`pagination-btn ${
                pageIndex + 1 === currentPage ? "active" : ""
              }`}
              onClick={() => handlePageChange(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AdminTable;
