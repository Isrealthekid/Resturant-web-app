import React from 'react';

import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';


const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>


    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">At Gericht, we believe in crafting extraordinary </p>
        </div>
          <p className='p__opensans'>culinary experiences blending innovative techniques with the finest ingredients, curated to perfection. Every dish tells a story of passion, artistry, and uncompromising dedication to gastronomic excellence.</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kelvin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div> 

  </div>
);

export default Chef;
