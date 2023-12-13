import KtCoin from '../../images/KTCOIN.png'

function GuidanceModal() {
    return (
        <>

            <div class="modal fade" id="guidanceService" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered ">
                    <div class="modal-content">
                        <div class="modal-header bg-success">
                            <h1 class="modal-title fs-3 fw-bold text-white ms-5" id="staticBackdropLabel">How Can You Invest With Kuveyt Türk Coin Investment </h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body row">
                            <div class="col-12 col-md-4">

                                <img src={KtCoin} alt="İslami Coin Görseli" class="img-fluid rounded-5 shadow-lg" />
                                <hr />
                                <img src="https://s3.coinmarketcap.com/static/img/portraits/62f11f1a606ece06c56f256c.png" alt="İslami Coin Görseli" class="img-fluid" />

                            </div>
                            <div class="col-12 col-md-8 overflow-auto bg-dark text-white p-3">
                                <p><b>Welcome</b>, valued investors! We are delighted to see you on the "Kuveyt Türk Coin Investment" platform. Before you embark on your investment journey, we have prepared a short guide to understand the features of this platform and how to use them.</p>

                                <h6>Main Page and Navigation</h6>
                                <p>The homepage of our website is your gateway to the world of Kuveyt Türk Coin Investment. We have crafted a design that combines elegance, ease of use, and quick access to make currency trading an artwork.</p>

                                <ul>
                                    <li><strong>Toolbar:</strong> At the top of the page, our toolbar is placed for easy access. Here, you can quickly browse through different sections: Home, Guidance, Wallet, Blog, and Contact. Each tab provides specific information and tools for you.</li>
                                    <li><strong>Search:</strong> The search bar enables you to reach the information you need swiftly. Type any information you are looking for here to access the relevant results.</li>
                                    <li><strong>Login and Membership:</strong> In the top right corner, you can log in to your existing account or create a new account on our platform.</li>
                                </ul>

                                <h6>Footer Menu</h6>
                                <p>At the bottom of the page, you can access additional information such as "Discover Us" and "Our Address". These areas are used to learn more about us and to find our contact information.</p>

                                <h6>Usage Steps</h6>
                                <ol>
                                    <li><strong>Sign Up or Log In:</strong> To start investing, first create an account or log in to your existing account.</li>
                                    <li><strong>Explore the Market:</strong> Review the cryptocurrency options we offer and select the currency you wish to invest in.</li>
                                    <li><strong>Make Transactions:</strong> Complete your transactions easily with our user-friendly interface that allows for quick buying and selling.</li>
                                    <li><strong>Get Support:</strong> If you have any questions, you can utilize the "Guidance" section or contact us directly through the "Contact" section.</li>
                                </ol>

                                <p>We wish you successful and enjoyable investments on our platform!</p>
                                <br />
                                <p class="fw-bold">© 2023 Kuveyt Türk Coin Investment</p>
                            </div>
                        </div>

                        <button data-bs-toggle="modal" data-bs-target="#faqModal" type='button' className="btn btn-info rounded-0">
                            <i class="fa-solid fa-clipboard-question"></i> Any Question ?
                        </button>
                        <button data-bs-toggle="modal" data-bs-target="#contactUsModal" type='button' className="btn btn-warning mt-2 rounded-0">
                            <i class="fa-solid fa-headset"></i> Need Support ?
                        </button>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-success" data-bs-dismiss="modal"><i class="fa-solid fa-check"></i> Understrood</button>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default GuidanceModal;