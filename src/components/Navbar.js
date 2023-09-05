import React from 'react'

export default function Navbar() {
    return (
        <>
            {/* Navbar Start */}
            <div className="container-fluid bg-white sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                        <a href="/" className="navbar-brand d-lg-none">
                            <h1 className="fw-bold m-0">GrowMark</h1>
                        </a>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <a href="/" className="nav-item nav-link active">Home</a>
                                <a href="/about" className="nav-item nav-link">About</a>
                                <a href="/service" className="nav-item nav-link">Services</a>
                                <a href="/project" className="nav-item nav-link">Projects</a>
                                <div className="nav-item dropdown">
                                    <a href="true" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                        <a href="/feature" className="dropdown-item">Features</a>
                                        <a href="/team" className="dropdown-item">Our Team</a>
                                        <a href="/testimonial" className="dropdown-item">Testimonial</a>
                                        <a href="/quote" className="dropdown-item">Quotation</a>
                                        <a href="/404" className="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="/contact" className="nav-item nav-link">Contact</a>
                            </div>
                            <div className="ms-auto d-none d-lg-block">
                                <a href="true" className="btn btn-primary rounded-pill py-2 px-3">Get A Quote</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}

        </>
    )
}
