import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GoogleMap from './GoogleMap'
import './Getin.css';
const GetIn = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lhar1ou', 'template_02zlnea', form.current, '2rfB5O6I0ct9OQ4yE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
    
        <div>
          <h3 className='form-heading'>GET IN TOUCH</h3>
    <p>YOU ARE ONE STEP CLOSER TO MAKING UR BUSINESS OPERATIONS ONLINE</p>
      <div className="card shadow-lg p-3 mb-5 bg-white rounded">
        <div className="card-body">
        <form ref={form} onSubmit={sendEmail} className="form-overlay container-sm col row align-items-end ">
          
          <div className="form-outline mb-4">
            <input type="text" id="form3Example1cg" placeholder="NAME" className="form-control form-control-lg" />
          
          </div>
    
          <div className="form-outline mb-4">
            <input type="email" id="form3Example3cg" placeholder="Email" className="form-control form-control-lg" />
         
          </div>
    
          <div className="form-outline mb-4">
            <input type="tel" id="form3Example4cg"  name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone No"  className="form-control form-control-lg" />
           
          </div>
    
          <div className="form-outline mb-4">
            <input type="text" id="form3Example1cg" placeholder="Subject" className="form-control form-control-lg" />
    
          </div>
          <textarea rows="3" name="comment" form="usrform" placeholder="Drop your message here and we will get back to you soon" className="form-control form-control-lg"></textarea>
    
          {/* <button type="button" value="Send" className="btn btn-primary  form-control form-control-lg">submit</button> */}
          <input type="submit" value="Send" className='send' />
        </form>
      </div>
      <div className='mapcontainer'>
      
        <GoogleMap/>
      </div>
    
    
    </div>
    </div>
    </div>
  
    
      
    
  );
};
export default GetIn