import React from 'react';

import './Footer.css';
import { FooterOverlay,Newsletter } from '../../components';
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>   
    <Newsletter/> 

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">12 Hamburg, louisiana,Lagos, NIG. </p>
        <p className="p__opensans">+234-801-234-5678</p>
        <p className="p__opensans">+234-908-765-4321</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:'15px'}} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>


      </div>
    </div>

    <div className="footer_copyright">
      <p className="p__opensans"> &copy; 2023 Gericht. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
