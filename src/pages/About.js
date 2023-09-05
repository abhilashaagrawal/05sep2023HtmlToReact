import React from 'react'

export default function About() {
  return (
    <>
      {/* About Start */}
      <div className="container-xxl about mb-5" style={{ marginTop: '6rem' }}>
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
    </>
  )
}
