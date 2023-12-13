import KtCoin from '../../images/KTCOIN.png'

function RegisterModal() {
    return (
        <>

            <div className="modal fade" id="registerModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-success">
                            <h5 className="modal-title text-white" id="registerModalLabel"><i className="fa-solid fa-user-plus"></i> Register for a New Account</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg-light">
                            <div className="text-center mb-4">
                                <img src={KtCoin} title='Kuveyt Türk Coin' alt="Kuveyt Türk Coin" className="img-fluid rounded-circle w-25" style={{ height: '25%' }} />
                            </div>
                            <form id="registerForm">
                                <div className="mb-3">
                                    <label htmlFor="registerFullName" className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="registerFullName" placeholder="Enter your full name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerEmail" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="registerEmail" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="registerPassword" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="registerPassword" placeholder="Create a password" required />
                                </div>
                                <div className="d-grid">
                                    <button type="button" className="btn btn-success" onClick="{submitRegisterForm}"><i className="fa-solid fa-user-plus"></i> Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal"><i className="fa-solid fa-xmark"></i> Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default RegisterModal;