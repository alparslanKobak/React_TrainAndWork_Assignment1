import React, { Component } from 'react'
import KtCoinLogo from '../images/KTCOIN.png'

export default class Footer extends Component {
  render() {
    return (
      <div className='bg-success border border-black rounded-1'>
        <div class="container">
          <footer class="row  py-5 my-5 border-top">
            <div class="col-3 mb-3 border-end">
              <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                {/* <img ><use xlink: href="#bootstrap"> */}
                <img src={KtCoinLogo} title='Kuveyt Türk Coin Tree' class="bi me-2 rounded-circle" width="50" height="50" />
              </a>
              <p class="text-white fst-italic fw-bold fs-4">Kuveyt Türk Coin Investment <hr /> © 2023</p>
            </div>

            {/* <div class="col mb-3">

            </div> */}

            <div class="col-3 mb-3 text-center border-end">
              <h5 className='text-white  fw-bold fst-italic'><i class="fa-solid fa-magnifying-glass"></i> Discover Us</h5>

              <ul class="nav flex-column mt-3">
                <li class="nav-item mb-2"><a href="#" class="nav-link p-0 canlandir"> <i class="fa-solid fa-house"></i> Home</a></li>
                <li class="nav-item mb-2"><a href="#" className="nav-link p-0 canlandir"><i class="fa-solid fa-star-and-crescent"></i> Why Kuveyt Türk ?</a></li>
                

                <li class="nav-item mb-2"><a type="button" data-bs-toggle="modal" data-bs-target="#faqModal" class="nav-link p-0 canlandir"><i class="fa-solid fa-circle-question"></i> FAQs</a></li>
                <li class="nav-item mb-2"><a class="nav-link p-0 canlandir"><i class="fa-solid fa-people-group"></i> About Us</a></li>
                <li class="nav-item mb-2"><a type="button" data-bs-toggle="modal" data-bs-target="#contactUsModal" href="#" class="nav-link p-0 canlandir"><i class="fa-solid fa-headset me-1"></i> Contact Us</a></li>
              </ul>
            </div>



            <div class="col-6 mb-3 text-center">
              <h5><i class="fa-solid fa-map-location-dot text-white"></i> <a className='canlandir text-decoration-none' target='_blank' href="https://www.google.com/maps/place/Kuveyt+T%C3%BCrk+Bankac%C4%B1l%C4%B1k+%C3%9Css%C3%BC/@40.8670222,29.3795336,17z/data=!4m14!1m7!3m6!1s0x14cad8e6e17ffb03:0xab4df18164d1daf3!2zS3V2ZXl0IFTDvHJrIEJhbmthY8SxbMSxayDDnHNzw7w!8m2!3d40.8677038!4d29.3803383!16s%2Fg%2F11fy22_rk6!3m5!1s0x14cad8e6e17ffb03:0xab4df18164d1daf3!8m2!3d40.8677038!4d29.3803383!16s%2Fg%2F11fy22_rk6?entry=ttu">Our Address</a></h5>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.190027434264!2d29.377763376033545!3d40.86770377137061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad8e6e17ffb03%3A0xab4df18164d1daf3!2zS3V2ZXl0IFTDvHJrIEJhbmthY8SxbMSxayDDnHNzw7w!5e0!3m2!1str!2str!4v1702284116243!5m2!1str!2str" width="100%" height="80%" className='rounded-4 shadow' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}
