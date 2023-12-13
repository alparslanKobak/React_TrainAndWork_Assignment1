import Future from "../images/InvestFuture.png"
import Stake from "../images/StakeChest.png"
import theme from "../images/YeniNesilYatirim.png"

function Slider() {
    return (
        <div className="bg-success">

            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a target="_blank" href="https://www.kuveytturk.com.tr/">

                            <img src={Stake} title="Stake Your Coin" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h2 className="fst-italic fw-bold">Ramadan Mubarak</h2>
                                <h5>If you Invest in Ramadan, we have share more +20% ...</h5>
                            </div>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a target="_blank" href="https://www.kuveytturk.com.tr/">
                            <img src={Future} title="Invest with us" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h2 className="fst-italic fw-bold">Successful and Halal</h2>
                                <h5>Our Coin Growth Graph</h5>
                            </div>
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a target="_blank" href="https://www.kuveytturk.com.tr/">
                            <img src={theme} title="Choose your new theme" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                            <h2 className="fst-italic fw-bold">Join Us</h2>
                                <h5>Be our Partner, claim with us</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
}

export default Slider;