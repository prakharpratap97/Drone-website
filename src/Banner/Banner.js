import './Banner.css';

function Banner() {

  const handleHover = (event) => {
    console.log('check', event.clientX,event.clientY)
    const div = document.querySelector('.hole');
    // const ele = document.querySelector('.text');
    // ele.style.left = event.clientX + 'px'
    // ele.style.top = event.clientY + 'px'
    div.style.setProperty('--x', event.clientX + 50 + 'px');
    div.style.setProperty('--y', event.clientY + 'px');
    }
  return (
    <div>
     
    <div className="hole figure-img img-fluid rounded container-fluid 	.col-	.col-sm-	.col-md-	.col-lg-	.col-xl-	.col-xxl-" onMouseOver={(e)=>handleHover(e)} onMouseMove={(e)=>handleHover(e)} > 
    <div  className='text figure-caption text-end'>We Build <span className='text-color'>Smart</span> and <span className='text-color'>Scalable</span> Drones</div>
  <div className='p'> Leverage the potential of Internet of Drones and Its' Platform</div>
  </div>
  </div>
  )
}

export default Banner