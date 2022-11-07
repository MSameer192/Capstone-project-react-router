import React from 'react';

export default function MainSection() {
    return (
        <>
            <section id="section-main-container">
                <div className="container p-5">
                    <div className="row">
                        <div className="section-heading col-sm-12 col-lg-6 text-white">
                            <p className="main-heading pt-2 mt-5">
                                The Best App in the Universe
                            </p>
                            <p className="section-text mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipis corporis <br/>
                                    delectus accusamus ex error tio excepturi debitis!
                            </p>
                            <button type="button" className="mt-4 px-5 section-button">
                                LOAD MORE ITEM
                            </button>
                        </div>
                        <div className="section-image col-sm-12 col-lg-6">
                            <img src="./images/mobile.webp" alt="mobile-pic" className="main-image img-fluid"/>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
