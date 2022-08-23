import React from "react";

import BookData from "../../data/BookList";

import "./Books.css";

function Books() {
  return (
    <div className="books">
      <p>Collection</p>
      <div className="books__container">
        {BookData.map((book, index) => (
          <div key={index} className="books__container__item">
            <img src={`img/books_img/${book.img}`} 
              className="books__container__item__img" 
              alt="book-img" 
              title={book.title} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;