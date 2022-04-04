import MarketContainer from "components/market/MarketContainer";
import itemList from "samplejson/ItemList.json";

const MarketPage = () => {
    return (
        <div>
            <MarketContainer items = {itemList}/>
        </div>
    );
}

export default MarketPage;