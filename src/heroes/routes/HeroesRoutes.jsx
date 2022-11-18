import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../auth/pages/LoginPage";
import { Navbar } from "../../ui";
import { DcPage, HeroId, MarvelPage, Search } from "../pages";


export const HeroesRoutes = () => {
    return (

        <>
        <Navbar/>
        <div className="container">
         <Routes>
            <Route path='marvel' element={<MarvelPage/>} />
            <Route path="dc"     element={<DcPage />} />
            <Route path='search' element={<Search />} />
            <Route path='hero/:id' element={<HeroId />} />
            <Route path='/'     element={<Navigate to="dc"/>} />
         </Routes>
        </div>
        </>
       );
}
