export const fetchBooksFromAPI = async () => {
    return fetch("http://localhost:8000/books",
    {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("token")).token}`
        }
    }).then(res => res.json())
}

export const postNewBook = (book) => {
    return fetch(`http://localhost:8088/books` , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
    })
}

export const getBookByBookId = (book) => {
    return fetch(`http://localhost:8000/books/${book}`, 
    {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("token")).token}`
        }
    }).then(res => res.json())
}