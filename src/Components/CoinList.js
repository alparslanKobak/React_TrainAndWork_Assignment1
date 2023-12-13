import CoinCard from "./CoinCard";

function CoinList() {
    return (
        <div className="container">
            <div className="row">
                <CoinCard />
                <CoinCard />
                <CoinCard />
                <CoinCard />
            </div>
        </div>
    );
}

export default CoinList;