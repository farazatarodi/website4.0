import React, { ReactNode } from 'react';

import ContactForm from '../ContactForm';
import cv from '../media/Faraz Atarodi - CV.pdf';
import linkArrow from '../media/diagonal-arrow.png';
import '../css/Contact.css';

const Contact = ({ children }: { children: ReactNode }) => {
  return (
    <section id="contact" className="four">
      <div className="contact-wrapper">
        {/* left side */}
        <div className="contact1">
          {/* info div */}
          <div className="details">
            Info
            <div className="contact-links">
              <a href="tel:+32492839028" className="links">
                +32 492 83 92 28
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
              <br />
              <a href="mailto:f.atarodi.contact@gmail.com" className="links">
                f.atarodi.contact@gmail.com
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
            </div>
          </div>

          {/* social div */}
          <div className="social">
            Social Media
            <div className="contact-links">
              <a
                className="links"
                href="https://www.linkedin.com/in/faraz-atarodi/"
                target="_blank"
                rel="noreferrer">
                LinkedIn
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
              <br />
              <a
                className="links"
                href="https://www.facebook.com/f.atarodi"
                target="_blank"
                rel="noreferrer">
                Facebook
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
            </div>
          </div>

          {/* cv div */}
          <div className="cv">
            CV
            <div className="contact-links">
              <a className="links" href={cv} target="_blank" rel="noreferrer">
                View
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
              <br />
              <a
                className="links"
                href="https://drive.google.com/uc?export=download&id=1p1vC4Jvnc5EcstR-SmMV2-WX3xkP8eVj"
                target="_blank"
                rel="noreferrer">
                Download
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
              <br />
              <a
                className="links"
                href="https://github.com/farazatarodi"
                target="_blank"
                rel="noreferrer">
                Github
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="contact2">
          {/* main form */}
          <div>Direct</div>
          <div style={{ height: '55%' }}>
            <ContactForm />
          </div>
        </div>
      </div>

      {children}
    </section>
  );
};

export default Contact;
