import React from 'react';

export default function Services() {
    return (
        <section className="text-center bg-white container-fluid" id="services-container">
            <div className="container">
                <div className="services-content">
                    <p className="sub-heading">
                        Latest News from all categories
                    </p>

                    <p className="sub-heading-text service-text-margin px-5 mx-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto officiis recusandae fugit nisi est qui
                        unde,
                        totam porro eligendi, qu et dolore error id?
                    </p>
                </div>

                <div className="services-row row mt-5">
                    <div className="first-service col-sm-12 col-md-6 col-lg-4">
                        <div className="first-service-icon hexagon bi bi-hexagon ">
                            <i className="icon fa-sharp fa-solid fa-wand-magic-sparkles fa-lg mt-4 pt-1">
                            </i>
                        </div>

                        <div className="first-service-heading mt-5">
                            <p className="service-heading">
                                Maintenance
                            </p>
                        </div>

                        <div className="first-service-text">
                            <p className="sub-heading-text service-text-margin px-5">
                                Lorem ipsum dolor . Veritatis optio corrupti ad quis aut
                                obcaecati
                                omnis odio doloremque consequatur eius.
                            </p>
                        </div>
                    </div>

                    <div className="second-service col-sm-12 col-md-6 col-lg-4">
                        <div className="second-service-icon hexagon">
                            <i className="icon fa-sharp fa-solid fa-rocket fa-lg  mt-4 pt-1"></i>
                        </div>

                        <div className="second-service-heading mt-5">
                            <p className="service-heading">
                                Residental Service
                            </p>
                        </div>

                        <div className="second-service-text">
                            <p className="sub-heading-text service-text-margin px-5">
                                Lorem ipsum dolor elit. Veritatis optio corrupti ad quis aut
                                obcaecati
                                omnis odio doloremque consequatur eius.
                            </p>
                        </div>
                    </div>

                    <div className="third-service col-md-12 col-lg-4">
                        <div className="third-service-icon hexagon">
                            <i className="icon fa-solid fa-bug fa-lg mt-4 pt-1"></i>
                        </div>

                        <div className="third-service-heading mt-5">
                            <p className="service-heading">
                                Commercial Service
                            </p>
                        </div>

                        <div className="third-service-text">
                            <p className="sub-heading-text service-text-margin px-5">
                                Lorem ipsum dolor elit. Veritatis optio corrupti ad quis aut
                                obcaecati
                                omnis odio doloremque consequatur eius.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
