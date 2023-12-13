
import KtCoin from '../images/KTCOIN.png'
import React, { Component } from 'react'


export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="px-3 py-2 text-bg-success border-bottom rounded-2">
                    <div className="container">

                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto canlandir  text-decoration-none">
                                <img src={KtCoin} className='rounded-circle logo' alt="" />

                                <span className="fs-4 ms-4 fw-bold fst-italic ">Kuveyt Türk Coin Investment</span>
                            </a>

                            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                <li>
                                    <a href="" className="nav-link canlandir fw-bold">
                                        <i class="fa-solid fa-house me-1"></i>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <button data-bs-toggle="modal" data-bs-target="#guidanceService" type='button' className="nav-link canlandir fw-bold">

                                        <i class="fa-solid fa-book"></i>  Guidance
                                    </button>
                                 
                                </li>
                                <li>
                                    <a href="#" className="nav-link canlandir fw-bold">
                                        <i class="fa-solid fa-wallet me-1"></i>
                                        Wallet
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link canlandir fw-bold">
                                        <i class="fa-solid fa-newspaper me-1"></i>
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <button data-bs-toggle="modal" data-bs-target="#contactUsModal" type='button' className="nav-link  fw-bold canlandir">
                                        <i class="fa-solid fa-headset me-1"></i>
                                        Contact

                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-2 border-bottom  bg-dark rounded-1">
                    <div className="container d-flex flex-wrap justify-content-center ">
                        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">

                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>


                        <div className="text-end" id="LogInOut">
                            <button type="button" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn canlandir me-2 fw-bold"> Login</button>
                            <button type="button"  data-bs-toggle="modal" data-bs-target="#registerModal" className="btn btn-outline-light"><i class="fa-solid fa-user-tie me-1"></i> Join Us</button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
