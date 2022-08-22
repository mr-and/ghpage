import React from "react";

import bookData from "../../data/BookList";

import "./Books.css";

function Books() {
  return (
    <div class="book__container">
      <p>Collection</p>
      <div class="books">
      {bookData.map((book, index) => (
        <div key={index} className="book__box">
          <img src={`img/books_img/${book.img}`} className="book__img" alt="book-img" title={book.title} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default Books;