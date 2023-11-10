export const allCategories = () => {
    return fetch("http://localhost:8000/categories",
    {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem("token")).token}`
        }
    }).then(res => res.json())
}

