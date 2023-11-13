import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookByBookId } from "../services/BookService";
import { postNewReview } from "../services/ReviewService";
// import { getUserById } from "../services/userService";
// import { postNewReview } from "../services/reviewService";

export const AddReview = () => {
  const [book, setBook] = useState({});
  const navigate = useNavigate();

  const { bookId } = useParams();
  useEffect(() => {
    getBookByBookId(bookId).then((bookObj) => {
      setBook(bookObj);
    });
  }, [bookId]);


  const [newReview, setNewReview] = useState({
    book_id: parseInt(bookId),
    rating: 0,
    comment: "",
  });

  const handleInputChange = (e) => {
    const itemCopy = { ...newReview };
    itemCopy[e.target.name] = e.target.value;
    setNewReview(itemCopy);
  };
  const handleInputChangeReview = (e) => {
    const itemCopy = { ...newReview };
    itemCopy[e.target.name] = parseInt(e.target.value);
    setNewReview(itemCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postNewReview(newReview).then(() => {
      navigate(-1);
    });
  };

  return (
    <>
      <h1>ADD BOOK REVIEW</h1>
      <div className="add-review-container flex">
        <div className="book-details">
          <Link to={`/allBooks/${book.id}`}>
            <img src={book.cover_image} alt={book.title} />
          </Link>

          <h2 className="book-title">
            <span>{book.title}</span>
          </h2>
        </div>
        <form className="book-form">
          <h1 className="title-text"></h1>
          <textarea
            name="comment"
            className="comment"
            rows={10}
            placeholder="Enter Your Review Here"
            required
            onChange={handleInputChange}
          ></textarea>
          <fieldset name="rating" className="rating" required onChange={handleInputChangeReview}>
                      <input type="number" name="rating" className="rating" placeholder="Please enter a number 1-10"/> 
          </fieldset>

          <button className="review-btn" onClick={handleSubmit}>
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
};
