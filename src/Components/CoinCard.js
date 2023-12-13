function CoinCard() {
    return (
        <div className="col-12 col-md-6 mt-1 mb-1">
            <div class="card shadow-lg m-5 rounded-5 text-center p-3 bg-dark text-bg-dark" width="90%" height="90%">
                <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" class="card-img-top  m-1 ethereum" alt="..." />
                <div class="card-body p-1 border-top">
                    <h5 class="card-title">Etherium</h5>
                    <p class="card-text">Be Quick</p>

                </div>
                <hr />
                <div class="card-body">
                    <a href="#" class="btn btn-success me-3"><i class="fa-solid fa-arrow-trend-up fa-fade"></i> Buy</a>
                    <a href="#" class="btn btn-danger"><i class="fa-solid fa-arrow-trend-down fa-fade"></i> Sell</a>
                </div>
            </div>
        </div>
    );
}

export default CoinCard;