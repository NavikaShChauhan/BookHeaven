import React, { useState } from "react";

// Dummy book data
const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 450,
    image: "https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL.jpg"
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 299,
    image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg"
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    price: 510,
    image: "https://m.media-amazon.com/images/I/81qW97ndkvL.jpg"
  }
];

export default function BuyerDashboard({ user }) {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const addToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  return (
    <div className="container dashboard">
      <h2>Buyer Dashboard</h2>
      <p>Welcome, {user.email}!</p>

      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Price:</strong> ₹{book.price}</p>
            <button onClick={() => addToCart(book)}>🛒 Add to Cart</button>
            <button onClick={() => addToFavorites(book)}>❤️ Add to Favorites</button>
          </div>
        ))}
      </div>

      <hr />
      <h3>🛒 Cart ({cart.length})</h3>
      <ul>{cart.map((b) => <li key={b.id}>{b.title}</li>)}</ul>

      <h3>❤️ Favorites ({favorites.length})</h3>
      <ul>{favorites.map((b) => <li key={b.id}>{b.title}</li>)}</ul>
    </div>
  );
}
