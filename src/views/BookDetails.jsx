import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBookByBookId } from "../services/BookService";

export const BookDetails = () => {
  const [bookObj, setBook] = useState({});
  const { bookId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getBookByBookId(bookId).then((bookObj) => {
      setBook(bookObj);
    });


  }, [bookId]);


  return (
  <>
    <div className="container">
      <section className="book-details-container">
        <div className="book-img">
          <Link to="/allBooks">
            <img src={bookObj.cover_image} alt={bookObj.title} />
          </Link>
  </div>
        <div>
          <h1>Reviews</h1>
          <p className="text-details">Click a review to visit their profile!</p>
          {bookObj.books_reviews?.map((review) => {
            return (
                <li key={review.id} className="review">"{review.comment}" ~ </li>
            );
          })}
        </div>           <div className="button-area" key={bookObj?.id}>
             <button className="review-btn1"
              onClick={() => {
                navigate(`/allBooks/${bookObj.id}/addReview`);
              }}
            >
              Leave a Review
            </button>
          </div>
        </section></div>


  </>)
};
