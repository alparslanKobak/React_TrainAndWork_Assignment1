function FAQModal() {
    return (
        <>

            <div className="modal fade" id="faqModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="faqModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-success">
                            <h5 className="modal-title text-white" id="faqModalLabel"><i className="fa-solid fa-circle-question"></i> Frequently Asked Questions</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-light">
                            {/* FAQ Questions and Answers */}
                            <div className="accordion" id="accordionFAQ">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                            How do I start investing?
                                        </button>
                                    </h2>
                                    <div id="collapseEight" className="accordion-collapse collapse show" aria-labelledby="headingEight" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            <strong>To start investing,</strong> you need to create an account and log in. Then, you can explore the market and make your investments.
                                        </div>
                                    </div>
                                </div>
                                {/* ... More Questions ... */}
                            </div>
                            <div className="accordion" id="accordionFAQ">
                                {/* Question 1 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is Kuveyt Türk Coin Investment?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            Kuveyt Türk Coin Investment is a digital currency investment platform that allows you to invest in a variety of cryptocurrencies in a secure and Sharia-compliant manner.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 2 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How do I deposit funds to my account?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            To deposit funds, navigate to the Wallet section after logging in, and follow the instructions to add funds using your preferred payment method.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 3 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What cryptocurrencies can I invest in on this platform?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            Our platform offers a wide range of cryptocurrencies, including Bitcoin, Ethereum, Litecoin, and more. You can view the full list in the Market section.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 4 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Are my investments secure?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            Yes, we take security very seriously. Our platform employs advanced security measures to protect your investments and personal information.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 5 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            How is cryptocurrency regulated in Islamic finance?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            In Islamic finance, cryptocurrency is regulated by ensuring that the investment complies with Sharia principles, which prohibit interest, excessive uncertainty, and investment in prohibited industries.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 6 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Can I access my investment portfolio on mobile devices?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            Absolutely! Our platform is mobile-friendly, allowing you to manage and monitor your investments from anywhere, on any device.
                                        </div>
                                    </div>
                                </div>
                                {/* Question 7 */}
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                            What support options are available if I have questions?
                                        </button>
                                    </h2>
                                    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body">
                                            We offer comprehensive support through our Help Center, live chat, email, and phone. Our team is available to assist you with any inquiries you may have.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default FAQModal;