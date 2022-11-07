import React from 'react';

export default function Feature() {
    return (
        <section className="container text-center" id="features-container">
            <div className="features-content-container">
                <p className="sub-heading">
                    Some Features that Made us Unique
                </p>
                <p className="sub-heading-text">
                    Who are in extremely love with eco friendly system.
                </p>
            </div>

            <div className="features-icons-container row mt-5 ">
                <div className="myfeatures col-lg-4 col-md-6 py-5 mb-4">
                    <img src="./images/moon.jpg" alt="moon-img" className="feature-img"/>
                        <p className="feature-name mt-4">
                            Expert Technicians
                        </p>
                </div>

                <div className="myfeatures col-lg-4 col-md-6 py-5 mb-4">
                    <img src="./images/key.webp" alt="key-img" className="feature-img"/>
                        <p className="feature-name  mt-4">
                            Professional Service
                        </p>
                </div>

                <div className="myfeatures col-lg-4 col-md-6 py-5 mb-4">
                    <img src="./images/pencil.webp" alt="pencil-img" className="feature-img"/>

                        <p className="feature-name  mt-4">
                            Great Support
                        </p>
                </div>

                <div className="myfeatures col-lg-4 col-md-6 py-5 mb-4">
                    <img src="./images/baloon.webp" alt="baloon-img" className="feature-img"/>

                        <p className="feature-name mt-4">
                            Expert Technicians
                        </p>
                </div>

                <div className="myfeatures col-lg-4 col-md-6 py-5 mb-4">
                    <img src="./images/flag.webp" alt="flag-container" className="feature-img"/>
                        <p className="feature-name mt-4">
                            Professional Service
                        </p>
                </div>

                <div className="myfeatures col-lg-4 col-md-6 py-5 mb-4">
                    <img src="./images/circle.webp" alt="circle-pic" className="feature-img"/>
                        <p className="feature-name mt-4">
                            Great Support
                        </p>
                </div>
            </div>
        </section>
    );
}
