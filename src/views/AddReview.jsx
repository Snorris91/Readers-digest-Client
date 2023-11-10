import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookByBookId } from "../services/BookService";
// import { getUserById } from "../services/userService";
// import { postNewReview } from "../services/reviewService";

export const AddReview = ({ currentUser }) => {

    const [book, setBook] = useState({});
    // const navigate = useNavigate()
  
    // useEffect(() => {
    //   getBookByBookId(bookId).then((bookObj) => {
    //     setBook(bookObj);
    //   });
  
  
    // }, [bookId]);
//   const [book, setBook] = useState({});
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

  const { bookId } = useParams();
  useEffect(() => {
    getBookByBookId(bookId).then((bookObj) => {
      setBook(bookObj);
    })});

//     getUserById(currentUser.id).then((userObj) => {
//       setUser(userObj[0]);
//     });
//   }, [bookId]);

//   const [newReview, setNewReview] = useState({
//     bookId: parseInt(bookId),
//     userId: currentUser.id,
//     text: "",
//   });

//   const handleInputChange = (e) => {
//     const itemCopy = { ...newReview };
//     itemCopy[e.target.name] = e.target.value;
//     setNewReview(itemCopy);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     postNewReview(newReview).then(() => {
//       navigate(-1);
//     });
//   };

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
            name="text"
            className="text"
            rows={10}
            placeholder="Enter Your Review Here"
            required
            // onChange={handleInputChange}
          ></textarea>
          <button  className="review-btn">
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
 };
// onClick={handleSubmit}