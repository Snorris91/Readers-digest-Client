import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
import { Register } from '../pages/Register.jsx'
import { AllBooks } from "../views/AllBooks.jsx"
import { AddBooks } from "../views/AddBook.jsx"
import { BookDetails } from "../views/BookDetails.jsx"
import { AddReview } from "../views/AddReview.jsx"
import { useEffect, useState } from "react"


export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
      const localBookUser = localStorage.getItem("user");
      const bookUserObject = JSON.parse(localBookUser);
  
      setCurrentUser(bookUserObject);
    }, []);

    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
            <Route index element={<Home />}/>
                <Route path="/allBooks">
                <Route index element={<AllBooks />}/>
                <Route path=":bookId" element={<BookDetails />}/>
                <Route path=":bookId/addReview" element={<AddReview  currentUser={currentUser}/>}/>
            </Route>
            <Route path="/create" element={<AddBooks />} />
                {/* <Route path="/mine" element={<RockList rocks={rocksState} fetchRocks={fetchRocksFromAPI} showAll={false}/>} /> */}
</Route>
        </Routes>
    </BrowserRouter>
}