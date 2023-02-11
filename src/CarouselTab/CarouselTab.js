import React, { Component } from 'react';
import './tab.css';
import Tabs from './components/Tabs';

import ReactCompareImage from 'react-compare-image';
class CarouselTab extends Component {
  
  render(){
    
    const transparentButtonStyles = {
      color: 'transparent',
      backgroundColor: 'transparent',
      border: 'none',
    };
    
    <button style={transparentButtonStyles}>Button</button>    
  return (
    <div className='container-lg shadow-lg p-3 mb-5 bg-body-tertiary rounded container-fluid'>
    <Tabs>
      <div className='.container-md' label="Slider">
      <div className='specify'>
      <div className="m-4">
        <ul  id="myTab"> 
        </ul>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="home">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://d3nn873nee648n.cloudfront.net/900x600/18896/1-SM876047.jpg" className="d-block w-100" alt="..." />
                 
                </div>
                <div className="carousel-item">
                  <img src="https://d3nn873nee648n.cloudfront.net/900x600/16940/220-SM735516.jpg" className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                  <img src="https://www.medianama.com/wp-content/uploads/2022/09/UAVs-help2.jpeg" className="d-block w-100" alt="..." />
                  
                </div>
              </div>
              <button style={transparentButtonStyles} className="carousel-control-prev transparent-button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button style={transparentButtonStyles} className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          
          
        </div>

      </div>
    </div>
      </div>
      <div className='.container-md' label="Video">
          
            <video className="w-100  p-4" autoPlay loop muted>
              <source src="https://mdbootstrap.com/img/video/animation-intro.mp4" />
            </video>
          
      </div>
      
      <div className='.container-md' label="Comparison">
      <div className='p-4'>
      <ReactCompareImage leftImage="https://thumbs.dreamstime.com/b/drone-professional-flight-gps-83829913.jpg" rightImage="https://thumbs.dreamstime.com/b/flying-drone-air-100755092.jpg" />
      </div>
      </div>
    </Tabs>
    </div>
  );
}
}
export default CarouselTab;