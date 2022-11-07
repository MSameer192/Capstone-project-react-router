import React from 'react';

export default function Footer() {
  return (
    <footer className="container-fluid pt-5" id="footer">
      <div className="container pt-5">
        <div className="row footer-main-container">
          <div className="top-products col-lg-3">
            <ul className="no-bullets lh-lg">
              <li className="list-heading">Top Products</li> <br />
              <li className="list-text">Managed Website</li>
              <li className="list-text">Manage Reputation</li>
              <li className="list-text">Power Tools</li>
              <li className="list-text">Marketing Service</li>
            </ul>
          </div>

          <div className="news-letter col-lg-6 pe-4">
            <div className="list-heading lh-lg">
              Newsletter
            </div>

            <div className="list-text py-4">
              You can trust us. we only send promo offers, not a single spam.
            </div>

            <div className="input-buttons row pb-2">
              <div className="col-lg-8">
                <input type="email" placeholder="Enter Email" />
              </div>

              <div className="col-lg-4 pt-2 css-button-arrow--rose">
                &nbsp; &nbsp; SUBSCRIBE
              </div>


            </div>
            <div className="submit pt-4">Submitting...</div>
          </div>

          <div className="instagram-feed col-lg-3">
            <div className="insta-heading  list-heading">
              Instragram Feed
            </div>

            <ul className="no-bullets d-flex flex-wrap between-flax">
              <li><img src="./images/instaimg.webp" alt="" /></li>
              <li><img src="./images/instaimg2.webp" alt="" /></li>
              <li><img src="./images/instaimg3.webp" alt="" /></li>
              <li><img src="./images/instaimg4.webp" alt="" /></li>
              <li><img src="./images/instaimg5.webp" alt="" /></li>
              <li><img src="./images/instaimg6.webp" alt="" /></li>
              <li><img src="./images/insta7.webp" alt="" /></li>
              <li><img src="./images/instaimg8.webp" alt="" /></li>
            </ul>
          </div>
        </div>



        <div className="row container mt-5 py-5">
          <div className=" col-md-8 Copyright pb-5">
            Copyright ©2022 All rights reserved | This website is made <span className="color">&#9825;</span> by
            <span className="color">M. Sameer</span> (Memon's Production)
          </div>

          <div className="col-md-4 Copyright icon-container pb-5 text-end">
            <a href="https://www.facebook.com/sameer.farooq.144" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-facebook-f fa-1x"></i></a>
            <a href="https://github.com/MSameer192" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github fa-1x"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-twitter fa-1x"></i></a>
            <a href="https://www.linkedin.com/in/msameer192/" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-linkedin fa-1x"></i></a>
          </div>
      </div>
    </div>
  </footer>
  );
}
