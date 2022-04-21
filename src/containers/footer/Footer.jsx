import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src="https://res.cloudinary.com/doipe9nqx/image/upload/v1650455405/Copy_of_Logo_moeah7.png" alt="E-Cell Logo" className="ecellLogo" />
        <p>Illuminate 2022 <br /> Entrepreneurship Bootcamp</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <a href="https://www.linkedin.com/company/ecellnita/mycompany/" target="_blank" rel="noopener noreferrer">
          <p>LinkedIn</p>
        </a>
        <a href="https://www.facebook.com/ecellnita/" target="_blank" rel="noopener noreferrer">
          <p>Facebook</p>
        </a>
        <a href="https://www.instagram.com/ecellnita/?hl=en" target="_blank" rel="noopener noreferrer">
          <p>Instagram</p>
        </a>
        <a href="https://twitter.com/ecellnita?lang=en" target="_blank" rel="noopener noreferrer">
          <p>Twitter</p>
        </a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <h6>Room G-07, APJ Abdul Kalam Block (CSE Building), NIT Agartala, Jirania, Agartala, Tripura - 799046</h6>
        <h6>nitaecell@gmail.com</h6>
        <a href="https://nita.ac.in/ecell" target="_blank" rel="noopener noreferrer">
          <h6>nita.ac.in/ecell/</h6>
        </a>
        <h6>+91-9368935647</h6>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 E-Cell NIT Agartala. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
