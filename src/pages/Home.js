import React from 'react'

export default function Home() {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpg" alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7 text-start">
                      <p className="fs-4 text-white animated slideInRight">Welcome to
                        <strong>GrowMark</strong>
                      </p>
                      <h1 className="display-1 text-white mb-4 animated slideInRight">Unlock Your Business
                        Growth</h1>
                      <a href="true" className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Explore
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-2.jpg" alt="" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-end">
                    <div className="col-lg-7 text-end">
                      <p className="fs-4 text-white animated slideInLeft">Welcome to <strong>GrowMark</strong>
                      </p>
                      <h1 className="display-1 text-white mb-5 animated slideInLeft">Ready to Grow Your
                        Business</h1>
                      <a href="true" className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Explore
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}

      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 feature-row">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                  <img className="img-fluid" src="img/icon/icon-1.png" alt="Icon" />
                </div>
                <h5 className="mb-3">Award Winning</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                  <img className="img-fluid" src="img/icon/icon-2.png" alt="Icon" />
                </div>
                <h5 className="mb-3">Professional Staff</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                  <img className="img-fluid" src="img/icon/icon-3.png" alt="Icon" />
                </div>
                <h5 className="mb-3">Fair Prices</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="feature-item border h-100 p-5">
                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: 64, height: 64 }}>
                  <img className="img-fluid" src="img/icon/icon-4.png" alt="Icon" />
                </div>
                <h5 className="mb-3">24/7 Support</h5>
                <p className="mb-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* About Start */}
      <div className="container-xxl about my-5">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="h-100 d-flex align-items-center justify-content-center" style={{ minHeight: 300 }}>
                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                  <span />
                </button>
              </div>
            </div>
            <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-white rounded-top p-5 mt-lg-5">
                <p className="fs-5 fw-medium text-primary">About Us</p>
                <h1 className="display-6 mb-4">The Best Marketing Agency to Improve Your Business</h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                  diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
                <div className="row g-5 pt-2 mb-5">
                  <div className="col-sm-6">
                    <img className="img-fluid mb-4" src="img/icon/icon-5.png" alt="true" />
                    <h5 className="mb-3">Managed Services</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                  <div className="col-sm-6">
                    <img className="img-fluid mb-4" src="img/icon/icon-2.png" alt="true" />
                    <h5 className="mb-3">Dedicated Experts</h5>
                    <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                  </div>
                </div>
                <a className="btn btn-primary rounded-pill py-3 px-5" href="true">Explore More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Video Modal Start */}
      <div className="modal modal-video fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe className="embed-responsive-item" src="true" id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" title="Growmore" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-medium text-primary">Our Services</p>
            <h1 className="display-5 mb-5">Digital Marketing Services that We Offer</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 64, height: 64 }}>
                    <img className="img-fluid" src="img/icon/icon-5.png" alt="Icon" />
                  </div>
                  <h5 className="mb-3">Digital Marketing</h5>
                  <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                    stet</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="true">Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 64, height: 64 }}>
                    <img className="img-fluid" src="img/icon/icon-6.png" alt="Icon" />
                  </div>
                  <h5 className="mb-3">Internet Marketing</h5>
                  <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                    stet</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="true">Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 64, height: 64 }}>
                    <img className="img-fluid" src="img/icon/icon-7.png" alt="Icon" />
                  </div>
                  <h5 className="mb-3">Content Marketing</h5>
                  <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                    stet</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="true">Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 64, height: 64 }}>
                    <img className="img-fluid" src="img/icon/icon-8.png" alt="Icon" />
                  </div>
                  <h5 className="mb-3">Social Marketing</h5>
                  <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                    stet</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="true">Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 64, height: 64 }}>
                    <img className="img-fluid" src="img/icon/icon-9.png" alt="Icon" />
                  </div>
                  <h5 className="mb-3">B2B Marketing</h5>
                  <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                    stet</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="true">Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item position-relative h-100">
                <div className="service-text rounded p-5">
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: 64, height: 64 }}>
                    <img className="img-fluid" src="img/icon/icon-10.png" alt="Icon" />
                  </div>
                  <h5 className="mb-3">E-mail Marketing</h5>
                  <p className="mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam
                    stet</p>
                </div>
                <div className="service-btn rounded-0 rounded-bottom">
                  <a className="text-primary fw-medium" href="true">Read More<i className="bi bi-chevron-double-right ms-2" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Project Start */}
      <div className="container-xxl pt-5">
        <div className="container">
          <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-medium text-primary">Our Projects</p>
            <h1 className="display-5 mb-5">We've Done Lot's of Awesome Projects</h1>
          </div>
          <div className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-1.jpg" alt="true" />
                <div className="project-overlay">
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-1.jpg" data-lightbox="project"><i className="fa fa-eye" /></a>
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="true"><i className="fa fa-link" /></a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href="true">Data Analytics &amp; Insights</a>
                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-2.jpg" alt="true" />
                <div className="project-overlay">
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-2.jpg" data-lightbox="project"><i className="fa fa-eye" /></a>
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="true"><i className="fa fa-link" /></a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href="true">Marketing Content Strategy</a>
                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-3.jpg" alt="true" />
                <div className="project-overlay">
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-3.jpg" data-lightbox="project"><i className="fa fa-eye" /></a>
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="true"><i className="fa fa-link" /></a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href="true">Business Target Market</a>
                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
              </div>
            </div>
            <div className="project-item mb-5">
              <div className="position-relative">
                <img className="img-fluid" src="img/project-4.jpg" alt="true" />
                <div className="project-overlay">
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="img/project-4.jpg" data-lightbox="project"><i className="fa fa-eye" /></a>
                  <a className="btn btn-lg-square btn-light rounded-circle m-1" href="true"><i className="fa fa-link" /></a>
                </div>
              </div>
              <div className="p-4">
                <a className="d-block h5" href>Social Marketing Strategy</a>
                <span>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Project End */}

      {/* Quote Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="fs-5 fw-medium text-primary">Get A Quote</p>
              <h1 className="display-5 mb-4">Need Our Expert Help? We're Here!</h1>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita
                erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo</p>
              <a className="d-inline-flex align-items-center rounded overflow-hidden border border-primary" href="true">
                <span className="btn-lg-square bg-primary" style={{ width: 55, height: 55 }}>
                  <i className="fa fa-phone-alt text-white" />
                </span>
                <span className="fs-5 fw-medium mx-4">+012 345 6789</span>
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <h2 className="mb-4">Get A Free Quote</h2>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                    <label htmlFor="mail">Your Email</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                    <label htmlFor="mobile">Your Mobile</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <select className="form-select" id="service">
                      <option selected>Digital Marketing</option>
                      <option value="Social Marketing">Social Marketing</option>
                      <option value="Content Marketing">Content Marketing</option>
                      <option value="E-mail Marketing">E-mail Marketing</option>
                    </select>
                    <label htmlFor="service">Choose A Service</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 130 }} defaultValue={""} />
                    <label htmlFor="message">Message</label>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote Start */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-medium text-primary">Our Team</p>
            <h1 className="display-5 mb-5">Our Expert People Ready to Help You</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-1.jpg" alt="true" />
                <h5>Alex Robin</h5>
                <span className="text-primary">Founder &amp; CEO</span>
                <ul className="team-social">
                  <li><a className="btn btn-square" href="true"><i className="fab fa-facebook-f" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-twitter" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-instagram" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-2.jpg" alt="true" />
                <h5>Adam Crew</h5>
                <span className="text-primary">Co Founder</span>
                <ul className="team-social">
                  <li><a className="btn btn-square" href="true"><i className="fab fa-facebook-f" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-twitter" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-instagram" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-3.jpg" alt="true" />
                <h5>Boris Johnson</h5>
                <span className="text-primary">Executive Manager</span>
                <ul className="team-social">
                  <li><a className="btn btn-square" href="true"><i className="fab fa-facebook-f" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-twitter" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-instagram" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item rounded overflow-hidden pb-4">
                <img className="img-fluid mb-4" src="img/team-4.jpg" alt="true" />
                <h5>Robert Jordan</h5>
                <span className="text-primary">Digital Marketer</span>
                <ul className="team-social">
                  <li><a className="btn btn-square" href="true"><i className="fab fa-facebook-f" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-twitter" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-instagram" /></a></li>
                  <li><a className="btn btn-square" href="true"><i className="fab fa-linkedin-in" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Testimonial Start */}
      <div className="container-xxl pt-5">
        <div className="container">
          <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
            <p className="fs-5 fw-medium text-primary">Testimonial</p>
            <h1 className="display-5 mb-5">What Clients Say About Our Services!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src="img/testimonial-1.jpg" alt="true"/>
              <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                sit, sed stet lorem sit clita duo justo</p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src="img/testimonial-2.jpg" alt="true"/>
              <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                sit, sed stet lorem sit clita duo justo</p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src="img/testimonial-3.jpg" alt="true"/>
              <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                sit, sed stet lorem sit clita duo justo</p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
            <div className="testimonial-item rounded p-4 p-lg-5 mb-5">
              <img className="mb-4" src="img/testimonial-4.jpg" alt="true"/>
              <p className="mb-4">Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                sit, sed stet lorem sit clita duo justo</p>
              <h5>Client Name</h5>
              <span className="text-primary">Profession</span>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </>
  )
}
