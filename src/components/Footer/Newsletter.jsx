import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';
const Newsletter = () => (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title="News Letter"/>
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter </h1>

      <p className="p__opensans">Never miss latest updates</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='Enter your e-mail address' />
      <button className="custom__button">Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
