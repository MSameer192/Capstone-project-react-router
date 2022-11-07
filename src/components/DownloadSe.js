import React from 'react';

export default function DownloadSe() {
  return (
    <section className="container-fluid mt-5 py-5" id="Download-App">
    <div className="container mb-5">

      <div className="features-content-container text-center my-5">
        <p className="sub-heading text-white">
          Download This App Today!
        </p>
        <p className="sub-heading-text text-white">
          It won’t be a bigger problem to find one video game lover in your neighbor. Since the introduction of
          Virtual Game, it has been achieving great heights so far as its popularity and technological advancement
          are concerned. </p>
      </div>

      <div className="button-container d-flex justify-content-center row pb-5">
        <div className="download-button col-lg-6">
          <div className="app-icon float-start mt-1">
            <i className="fa-brands fa-apple fa-3x me-3"></i>
          </div>
          <a className="" href="https://www.apple.com/store" target="blank">
            <p className="">
              <span className="available">Available</span> <br/>
              <span className="button-text">on App Store</span>
            </p>
          </a>
        </div>

        <div className="download-button col-lg-6">
          <div className="app-icon float-start mt-3">
            <i className="fa-brands fa-google-play fa-2x me-3"></i>
          </div>
          <a href="https://play.google.com" target="blank">
            <p>
              <span className="available">Available</span> <br/>
              <span className="button-text">on Play Store</span>
            </p>
          </a>
        </div>
      </div>



    </div>
  </section>
  );
}
