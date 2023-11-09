export const fetchBooksFromAPI = async () => {
    return fetch("http://localhost:8000/books",
    {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("token")).token}`
        }
    }).then(res => res.json())
}