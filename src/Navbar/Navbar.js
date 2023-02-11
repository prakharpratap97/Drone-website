import React from 'react'
import "../CSS/Design.css"
function Navbar() {
  return (
    <div>
 <nav className="navbar  navbar-expand-lg" >
    <div className="container-fluid">
      <a className="navbar-brand text-white" href="#">
        <img src="https://hawaiadda.in/wp-content/uploads/2021/05/cropped-android-chrome-192x192-1.png" alt="Logo" width="50" height="40" className="NavbarImage d-inline-block text-white" />
        {/* <img src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2017/01/Swan-by-Yuri-Kartashev-560x420.jpg" alt="Logo" width="30" height="24" className="NavbarImage d-inline-block text-white align-text-top" /> */}
       Hawaiadda
      </a>
      <button className="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto  text-white">
          <li className="nav-item mx-5  text-white">
            <a className="nav-link  btn btn-light text-light btn-lg" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item mx-5  text-white">
            <a className="nav-link  btn btn-light text-light btn-lg"  href="/About">About</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link   btn btn-light text-light btn-lg" href="#">How it work</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link   btn btn-light text-light btn-lg" href="#">Pricing</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link  btn btn-light text-light btn-lg"  href="#">Solution</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link  btn btn-light text-light btn-lg"  href="#">Features</a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link active btn btn-light text-dark btn-lg"  href="/LoginPage">Login</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>


    </div>
  )
}

export default Navbar