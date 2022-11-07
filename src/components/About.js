import React from 'react';

export default function About() {
    return (
        <section className="container-fluid" id="about-container">
            <div className="container mt-5">
                <div className="row">
                    <div className="about-left-container pt-5 col-lg-6 col-md-12">
                        <p className="sub-heading about-main-heading">
                            We Believe that
                            Interior beautifies the
                            Total Architecture
                        </p>

                        <p className="sub-heading-text about-para pt-2 pb-4">
                            inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards
                            especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond
                            reproach. inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct
                            standards especially in the workplace. That’s why it’s crucial that.
                        </p>

                        <button className="about-button px-5"> SEE DETAILS</button>

                    </div>

                    <div className="about-right-container col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src="./images/about_img.webp" alt="About-pic" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
