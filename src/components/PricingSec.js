import React from 'react';

export default function PricingSec() {
  return (
    <section className="container-fluid mt-5 pt-5" id="pricing-container">
    <div className="container mt-5 pb-5">
      <div className="features-content-container text-center mb-5">
        <p className="sub-heading">
          Choose the Perfect Plan for you
        </p>
        <p className="sub-heading-text">
          Who are in extremely love with eco friendly system.
        </p>
      </div>

      <div className="row">
        <div className="card-border col-lg-4 col-md-6">
          <div className="my-card">
            <div className="card-body ps-4 mt-3 py-4 pe-4">
              <span className="card-data pt-3">
                <p className="card-name">Standard</p>
                <p className="card-text">For the individuals</p>
              </span>
              <span>
                <p className="card-price ms-5">£199</p>
              </span>
            </div>
            <div className="card-hover">
              <hr/>
              <div className="card-detail">
                <p className="card-text ps-5 py-4 pe-4">“Few would argue that, despite the advancements</p>
              </div>
              <hr/>
              <div className="card-more-detail py-4 ps-5">
                <p className="card-text">2.5 GB Free Photos</p>
                <p className="card-text">Secure Online Transfer Indeed</p>
                <p className="card-text">Unlimited Styles for interface</p>
                <p className="card-text">Reliable Customer Service</p>
                <p className="card-text">Manual Backup Provided</p>
              </div>
              <div className="card-button ms-5 mt-3 mb-4">PURCHASE PLAN</div>
            </div>
          </div>
        </div>

        <div className="card-border col-lg-4 col-md-6">
          <div className="my-card">
            <div className="card-body ps-4 mt-3 py-4 pe-4">
              <span className="card-data pt-3">
                <p className="card-name">Business</p>
                <p className="card-text">For the Small Company</p>
              </span>
              <span>
                <p className="card-price ms-5">£399</p>
              </span>
            </div>
            <div className="card-hover">
              <hr/>

              <div className="card-detail">
                <p className="card-text ps-5 py-4 pe-4">“Few would argue that, despite the advancements</p>
              </div>
              <hr/>
              <div className="card-more-detail py-4 ps-5">
                <p className="card-text">2.5 GB Free Photos</p>
                <p className="card-text">Secure Online Transfer Indeed</p>
                <p className="card-text">Unlimited Styles for interface</p>
                <p className="card-text">Reliable Customer Service</p>
                <p className="card-text">Manual Backup Provided</p>
              </div>
              <div className="card-button ms-5 mt-3 mb-4">PURCHASE PLAN</div>
            </div>
          </div>
        </div>

        <div className="card-border col-lg-4">
          <div className="my-card">
            <div className="card-body ps-4 mt-3 py-4 pe-4">
              <span className="card-data pt-3">
                <p className="card-name">Ultimate</p>
                <p className="card-text">For the Large Company</p>
              </span>
              <span>
                <p className="card-price ms-5">£499</p>
              </span>
            </div>
            <div className="card-hover">
              <hr/>
              <div className="card-detail">
                <p className="card-text ps-5 py-4 pe-4">“Few would argue that, despite the advancements</p>
              </div>
              <hr/>
              <div className="card-more-detail py-4 ps-5">
                <p className="card-text">2.5 GB Free Photos</p>
                <p className="card-text">Secure Online Transfer Indeed</p>
                <p className="card-text">Unlimited Styles for interface</p>
                <p className="card-text">Reliable Customer Service</p>
                <p className="card-text">Manual Backup Provided</p>
              </div>
              <div className="card-button ms-5 mt-3 mb-4">PURCHASE PLAN</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
