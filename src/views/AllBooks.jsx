import { useEffect, useState } from "react";
import { fetchBooksFromAPI } from "../services/BookService";


export const AllBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooksFromAPI().then((booksArray) => {
            setBooks(booksArray)
        })
    },[])



    return (
        <>
        <div className="title text-4xl text-center font-bold">All Books</div>
        <div>
            <div className="books-container">
        {books.map((book) => {
          return (
            <div key={book.id} className="book-card my-2">
              <img src={book.cover_image} alt={book.name} className="book-img w-64 h-80" />
              <div className="book-name">
                <i>{book.title}</i>
              </div>
              <div className="book-author">{book.author}</div>
            </div>
          )
          })}
        </div>
        </div>
        </>

    )
}