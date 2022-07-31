import React from 'react';

import linkArrow from '../media/diagonal-arrow.png';
import bg from '../media/title/ha2.png';

import Nav from './Nav';

const HA = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Hamrahan Atebba Co.</div>
            <div className="pr-desc">2013 - 2016 / 2021</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Part-time Job / Freelance Job</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">IT Manager / Full Stack Engineer</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Python - WordPress - WooCommerce - CSS - JavaScript - PHP
            </div>
            <div className="pr-link">
              <a className="links" href="https://poopakmall.com" target="_blank" rel="noreferrer">
                View Website
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
            </div>
          </div>
          <div className="pr-col2">
            <img src={bg} alt="" className="pr-title-image" />
          </div>
        </div>
        <div className="pr-row2">
          After I finished high school, I got accepted to the top university in my country. In that
          summer that I looked for internships and part-time jobs to gather some experience. I was
          hired as an IT intern by Hamrahan Atebba Co. and started in the August of 2013. The
          company was moving to a new office and their IT department needed extra help. I was given
          the role of network designer for the new space. That project took 3 months to complete and
          afterward, I was promoted to a part-time job. The company was happy with my performance so
          they promoted me again after 3 months to IT manager. I maintained that position for 3
          years until I sensed the need to work in a more related field of work to my studies.
          <br />
          The business had around 50 employees and to maintain that network I decided to build two
          Microsoft Windows servers. The tasks of the servers were to store company documents, share
          financial accounts and track customer orders. I used several well-established software
          (like Holoo) and my scripts to manage these tasks.
          <br />
          The Hamrahan Atebba Co. is in the business of medical supplies, mostly disposables. They
          would conduct their business in traditional ways, so in my last year, I proposed that they
          start an online shop. The obvious platform was WordPress with the addition of WooCommerce.
          I started the store and for better performance, I made two plugins using PHP and WordPress
          functions. The site was customized using CSS code and was delivered.
          <br />
          Although it was not the first time I was working with web platforms, it was the first time
          I was in a practical environment. The needs of the company dictated much more
          customization than what I was taught in theory. I made sure to gather as much experience
          as I could and it proved to be very helpful in the coming years.
          <br />I ended my contract in 2016 to join a job in my field. In the year 2021, the company
          contacted me for another project. They wanted to rebrand their website to feature a
          broader selection of products. You can visit the new website using the provided link.
        </div>
      </div>
    </div>
  );
};

export default HA;
