import {Routes, Route} from "react-router-dom";
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage";
import DonatePage from "pages/DonatePage";
import MarketPage from "pages/MarketPage";
import RankingPage from "pages/RankingPage";
import ItemDetail from "pages/ItemDetailpage";
import SalesRegist from "pages/SalesRegistPage";

export default function routes(){
    return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/donate" element={<DonatePage/>}/>
        <Route path="/market" element={<MarketPage/>}/>
        <Route path="/ranking" element={<RankingPage/>}/>
        <Route path="/market/:itemId" element={<ItemDetail/>}/>
        <Route path="/profile/:itemId" element={<SalesRegist/>}/>
    </Routes>
    );
}