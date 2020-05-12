import React from 'react';
import Layout from '../components/Layout.js'

// import images
import pic04 from '../assets/Images/4.png'
import pic07 from '../assets/Images/5.png'
import pic08 from '../assets/Images/1.jpg'
import pic09 from '../assets/Images/2.jpg'


const IndexPage = () => (
       <Layout>
         
        <div className="xy">
          <div className='c'>
              <div className='d'><img src={pic04} alt="" /></div>
              <div><h1>IDENTITY CARD</h1>
              <p>ID 000000001</p></div>
          </div>
          <div className='e'>
          <div className='g'>
          <img src={pic07} alt="" />
          </div>
          <div>
              <p>Full name</p>
              <h1>John Smith</h1>
              <p>D.O.B.</p>
              <h1>11/8/2020</h1>
              <p>Occupation</p>
              <h1>Worker</h1>
              <div className='f'>
                  <div className='i'>
                      <h2>issue date</h2>
                      <h3>11/8/2020</h3>
                  </div>
                  <div>
                      <h2>expiry date</h2>
                      <h3>11/8/2025</h3>
                  </div>
              </div>
          </div>
          <div className='h'>
              <p>Location</p>
              <h1>Canada</h1>
              <img src={pic08} alt="" />
              <img src={pic09} alt="" />
          </div>
          </div>
        </div>
      </Layout>
  
);

export default IndexPage;
