function ContactModal() {
    return (
        <>
            <div class="modal fade" id="contactUsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="contactUsModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header bg-success">
                            <h5 class="modal-title text-white fw-bold" id="contactUsModalLabel"><i class="fa-solid fa-headset"></i> Contact Us</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="contactForm">
                                <div class="mb-3">
                                    <label for="fullName" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="fullName" placeholder="Enter your full name" required />
                                </div>
                                <div class="mb-3">
                                    <label for="emailAddress" class="form-label">Email Address</label>
                                    <input type="email" class="form-control" id="emailAddress" placeholder="Enter your email" required />
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Message</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="Your message here" required></textarea>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="subscribeNews" />
                                    <label class="form-check-label" for="subscribeNews">Subscribe to newsletter</label>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div className='modal-body '>
                            <div className="row ">
                                <div className="col-2 ">
                                    <a href="https://www.linkedin.com/company/kuveytturk/?originalSubdomain=tr" target='_blank' title='Linkedin'> <i class="fa-brands fa-linkedin fa-2xl"></i></a>
                                </div>
                                <div className="col-2">
                                    <a className='text-danger' href="https://www.instagram.com/kuveytturk/" target='_blank' title='Instagram'> <i class="fa-brands fa-square-instagram fa-2xl"></i></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://twitter.com/kuveytturk" target='_blank' title='Twitter'> <i class="fa-brands fa-twitter fa-2xl"></i></a>
                                </div>
                                <div className="col-2">
                                    <a href="https://www.facebook.com/kuveytturk" target='_blank' title='Facebook'> <i class="fa-brands fa-facebook fa-2xl"></i></a>
                                </div>

                                <div className="col-2">
                                    <a className='text-danger' href="https://www.youtube.com/user/kuveytturk" target='_blank' title='Youtube'> <i class="fa-brands fa-youtube fa-2xl"></i></a>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> <i class="fa-solid fa-xmark"></i> Cancel</button>
                            <button type="button" class="btn btn-success" onclick="submitContactForm()"> <i class="fa-solid fa-envelope-open-text"></i> Send Message</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactModal;