export const postNewReview = (review) => {
    return fetch(`http://localhost:8000/reviews` , {
        method: "POST",
        headers: {
            Authorization: `Token ${
                JSON.parse(localStorage.getItem("token")).token
              }`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(review),
    })
}