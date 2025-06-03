import React, { useState } from "react";

// Default books to show initially
const initialBooks = [
  {
    id: 1,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 650,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 700,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 450,
    image: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

export default function SellerDashboard({ user }) {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    if (
      !newBook.title.trim() ||
      !newBook.author.trim() ||
      !newBook.price ||
      !newBook.image.trim()
    ) {
      alert("Please fill all fields");
      return;
    }
    setBooks([...books, { ...newBook, id: Date.now() }]);
    setNewBook({ title: "", author: "", price: "", image: "" });
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "700px",
        margin: "auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ color: "#2c3e50" }}>Seller Dashboard</h2>
      <p style={{ color: "#34495e" }}>Welcome, {user.email}!</p>
      <p style={{ color: "#34495e" }}>Here you can list your books for sale.</p>

      {/* Book entry form */}
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "2rem",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={newBook.title}
          onChange={handleChange}
          style={{
            flex: "2 1 150px",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={newBook.author}
          onChange={handleChange}
          style={{
            flex: "2 1 150px",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={newBook.price}
          onChange={handleChange}
          style={{
            flex: "1 1 80px",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newBook.image}
          onChange={handleChange}
          style={{
            flex: "3 1 200px",
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addBook}
          style={{
            flex: "1 1 100px",
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            padding: "0.6rem 1rem",
            fontWeight: "600",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#219150")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#27ae60")}
        >
          Add Book
        </button>
      </div>

      {/* Book listings */}
      <div>
        {books.length === 0 ? (
          <p>No books listed yet.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {books.map((book) => (
              <div
                key={book.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "1rem",
                  borderRadius: "6px",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
                />
                <h3 style={{ margin: "0.5rem 0 0.25rem", color: "#2c3e50" }}>{book.title}</h3>
                <p style={{ margin: "0", color: "#7f8c8d", fontSize: "0.9rem" }}>
                  <b>Author:</b> {book.author}
                </p>
                <p style={{ margin: "0.5rem 0", fontWeight: "bold", color: "#27ae60" }}>
                  ₹{book.price}
                </p>
                <button
                  onClick={() => deleteBook(book.id)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "auto",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#c0392b")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "#e74c3c")}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


