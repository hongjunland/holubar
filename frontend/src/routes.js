import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "pages/Home";
import { ItemDetail } from "pages/ItemDetailpage";

export default function routes(){
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/items/:itemId" element={<ItemDetail/>}/>
        </Routes>
    </BrowserRouter>
    );
}