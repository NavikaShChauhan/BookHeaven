import React from "react";

export default function BookCard({ book, onAddToCart, onAddToFavorites }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <button onClick={() => onAddToCart(book)}>🛒 Add to Cart</button>
      <button onClick={() => onAddToFavorites(book)}>❤️ Add to Favorites</button>
    </div>
  );
}
