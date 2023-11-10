import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allCategories } from "../services/CategoryService";
import { fetchBooksFromAPI } from "../services/BookService";

export const AddBooks = () => {
  const navigate = useNavigate();
  const [fullCategories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState(new Set());

  const postNewBook = async (event) => {
    event.preventDefault();
    await fetch(`http://localhost:8000/books`, {
      method: "POST",
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("token")).token
        }`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...newItem,
        categories: Array.from(chosenCategory),
      }),
    });
    await fetchBooksFromAPI();
    navigate("/allBooks");
  };

  const [newItem, setNewItem] = useState({
    title: "",
    author: "",
    isbn_number: 0,
    cover_image: "",
  });
  useEffect(() => {
    allCategories().then((categoryArray) => {
      setCategories(categoryArray);
    });
  }, []);

  const handleCategoryChosen = (category) => {
    const copy = new Set(chosenCategory);
    copy.has(category.id) ? copy.delete(category.id) : copy.add(category.id);
    setChosenCategory(copy);
  };

  const handleInputChange = (e) => {
    const itemCopy = { ...newItem };
    itemCopy[e.target.name] = e.target.value;
    setNewItem(itemCopy);
  };

  return (
    <form>
      <h1 className="title">Add A New Book!</h1>
      <fieldset>
        <div>
          <label>Book Title: </label>
          <input
            name="title"
            type="text"
            className="form-field"
            placeholder="Title of Book Here"
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Book Author: </label>
          <input
            name="author"
            type="text"
            className="form-field"
            placeholder="Book Author Here"
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Book ISBN number: </label>
          <input
            name="isbn_number"
            type="text"
            className="form-field"
            placeholder="ISBN Number Here"
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div>
          <label>Book Image: </label>
          <input
            name="cover_image"
            type="text"
            className="form-field"
            placeholder="Paste A Image URL"
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <label htmlFor="type">Categories: </label>
        <br />
        {fullCategories.map((category) => (
          <div key={category.id}>
            <input
              type="checkbox"
              checked={chosenCategory.has(category.id)}
              onChange={() => handleCategoryChosen(category)}
            />
            {category.name}
          </div>
        ))}
      </fieldset>
      <button
        className="submit-btn p-2 border-black bg-lime-400 border-2 rounded-lg"
        onClick={postNewBook}
      >
        Submit Book So Others Can Enjoy
      </button>
    </form>
  );
};
