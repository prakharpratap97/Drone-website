import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import "../CSS/Design.css"
function Footer() {
  return (
    <>
    <div>
    <footer className="footer ">
  
  <div className=" p-4 text-left fw-bold">
    
    <div className="row">
     
      <div className="col-sm-12 col-md-12 col-lg-3 text-white">
        <h5 className="text-uppercase text-white">India Guide</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">Overview</a>
          </li>
          <li>
            <a href="#!" className="text-white">Indian Drone Ecosysytem</a>
          </li>
          <li>
            <a href="#!" className="text-white">Drone Training</a>
          </li>
          <li>
            <a href="#!" className="text-white">Drone Events</a>
          </li>
        </ul>
      </div>
     

     
      <div className="col-sm-12 col-md-12 col-lg-2">
        <h5 className="text-uppercase text-white mb-0">Drone Insurance</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-white">Get Drone Insurance</a>
          </li>
          <li>
            <a href="#!" className="text-white">BVLOS</a>
          </li>
          <li>
            <a href="#!" className="text-white">My Coverages</a>
          </li>
          <li>
            <a href="#!" className="text-white">FAQs</a>
          </li>
        </ul>
      </div>
     

     
      <div className="col-sm-12 col-md-12 col-lg-2">
        <h5 className="text-uppercase text-white">Air Sherpa</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-white">Air Sherpa Risk Score</a>
          </li>
          
        
        </ul>
      </div>
     

     
      <div className="col-sm-12 col-md-12 col-lg-2">
        <h5 className="text-uppercase mb-0 text-white">Supports</h5>

        <ul className="list-unstyled">
          <li>
            
            <a  className="text-blue-200 leading-relaxed" href="mailto:hello@tropogo.com" title="Send me an email">
            hello@tropogo.com
              </a>
          </li>
          <li>
          <a className="leading-relaxed text-blue-200" href="tel:(+91) 7439324645" title="Give us a call">(+91) 7439324645</a>
         
          </li>
        </ul>
      </div>
        <div className="col-sm-12 col-md-12 col-lg-3">
          <h5 className="text-uppercase text-white">SkyStore</h5>
  
          <ul className="list-unstyled  mb-0">
            <li>
              <a href="/blog" className="text-white Blogs"  >Blogs</a>
            </li>
            
            <li>
              <a href="#!" className="text-white">About US</a>
            </li>
            <li>
              <a href="#!" className="text-white">Contact US</a>
            </li>
                 
    <span className="flex justify-left md:justify-start mt-2">
      
      <a href="https://www.linkedin.com/company/hawaiadda/"target="_blank"rel="noopener noreferrer"className="text-white mx-3">
        <FaLinkedin className="w-8 h-8" />
      </a>
      <a href="https://www.facebook.com/Hawaiaddainnovations"target="_blank"rel="noopener noreferrer"className="text-white mx-3">
        <FaFacebook className="w-8 h-8" />
      </a>
      <a href="https://www.instagram.com/hawaiadda/"target="_blank"rel="noopener noreferrer"className="text-white mx-3">
        <FaInstagram className="w-8 h-8" />
      </a>
    </span>
          </ul>
        </div>
     
     
    </div>
  </div>
   

  

  <div className="">
  <div className=" d-flex justify-content-between">
    
    <div className="icons">
    <a className="btn  btn-floating m-1" href="#!" role="button"
      ><i className="bi bi-facebook"></i>
    </a>

    
    <a className="btn  btn-floating m-1" href="#!" role="button"><i className="bi bi-twitter"></i></a>

    
    <a className="btn  btn-floating m-1" href="#!" role="button"
      ><i className="bi bi-instagram"></i></a>

    
    <a className="btn  btn-floating m-1" href="#!" role="button"
      ><i className="bi bi-linkedin"></i></a>
  </div>
  <div className="playstore">
    <a href="/"><img height="100px" width="100px" src="https://static.vecteezy.com/system/resources/thumbnails/006/656/871/small/google-play-and-download-playstore-free-vector.jpg"/></a>
    {/* <a href="/"><img height="100px" width="100px" src="https://static.vecteezy.com/system/resources/thumbnails/006/656/871/small/google-play-and-download-playstore-free-vector.jpg"/></a> */}
  </div>
  </div>
  
</div>
<div className="footerTwo">
<div className="">
  <div className="d-flex justify-content-between">
  <span className="text-start text-white"> © 2020 Copyright:</span>
   
   <span> <a className="text-white text-end" target="_blank" href="https://hawaiadda.in/">https://hawaiadda.in/</a></span>
  </div>
  </div>
</div>
  
</footer> 
    </div>
    </>
  )
}

export default Footer