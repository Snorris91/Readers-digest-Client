import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login.jsx"
import Home from "../pages/Home"
// import { RockForm } from "./RockForm.jsx"
// import { RockList } from "./RockList.jsx"
import { Register } from '../pages/Register.jsx'
import { AllBooks } from "../views/AllBooks.jsx"
import { AddBooks } from "../views/AddBook.jsx"


export const ApplicationViews = () => {


    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/" element={<Home />} />
                <Route path="/allBooks" element={<AllBooks />} />
                <Route path="/create" element={<AddBooks />} />
                {/* <Route path="/mine" element={<RockList rocks={rocksState} fetchRocks={fetchRocksFromAPI} showAll={false}/>} /> */}
            </Route>
        </Routes>
    </BrowserRouter>
}