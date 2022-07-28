import Nav from './Nav';
import bg from '../media/title/4.0.png';
import linkArrow from '../media/diagonal-arrow.png';
import pic1 from '../media/4.0/1.gif';
import pic2 from '../media/4.0/2.gif';
import pic3 from '../media/4.0/3.gif';
import pic4 from '../media/4.0/1.png';
import pic5 from '../media/4.0/2.png';
import pic6 from '../media/4.0/3.png';
import pic7 from '../media/4.0/4.png';
import pic8 from '../media/4.0/5.png';
import pic9 from '../media/4.0/6.png';
import pic10 from '../media/4.0/7.png';
import pic11 from '../media/4.0/8.png';

const Four = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Personal Website V4.0</div>
            <div className="pr-desc">Spring 2021</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Hobby</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc">Full Stack Engineer/Web Designer</div>
            <div className="pr-desc-title">Technologies:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              React - JavaScript - CSS - HTML - PHP - Node.js
            </div>
            <div className="pr-link">
              <a
                className="links"
                href="https://farazatarodi.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Website
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
            </div>
          </div>
          <div className="pr-col2">
            <img src={bg} alt="" className="pr-title-image" />
          </div>
        </div>
        <div
          className="pr-row2"
          style={{
            borderBottom: '1px white solid',
            paddingBottom: '2rem',
          }}
        >
          Previously during my master's studies, I made a simple personal
          website using HTML, CSS, and vanilla JavaScript. I attached my website
          to my CV and LinkedIn account as a small presentation of my work when
          I apply for internships and projects. The simplicity of it was
          refreshing amongst my more complicated projects and it was due to the
          lack of time in my schedule. However, it lacked the extensive details
          of my projects and didn't represent my potential and creativity. Soon
          after I finished my semester I began the next version but the design
          was not interesting for me.
          <br />
          I started to work on the next version immediately and it became the
          website that you're visiting right now. I am a fan of simplicity and
          wanted to dive into the world of React. I made use of the components
          feature in React and made sure to design the website in such a way
          that it represents me and my personality.
          <br />A big part of my life has always been my family and especially
          my pet dog Duke. Coming home every day and having him greet me has
          always been the highlight of my day. So it made sense to have a
          representation of him greet the visitors to my virtual home. He is a
          very playful and energetic dog and he loves his food so I made sure to
          have this trait visible. If you hover over the lower part of the
          website you will hold a bone and he will follow you. I also wanted to
          represent his loyalty and companionship so when you switch pages he
          will be there. :)
          <br />
          <img
            src={pic1}
            alt=""
            style={{
              width: '100%',
              padding: '1rem 2rem',
            }}
          ></img>
          <br />
          <br />
          As I mentioned the previous version had a small description of my
          career but I have been fortunate enough to have a career that needs
          more than a few lines. The next section of the website is a
          description of my career both as an electromechanical engineer and a
          developer. It is mostly text and that can be boring so I added a small
          animation to my skills. Again if you hover over each skill it will
          show an animation based on that skill.
          <br />
          <img
            src={pic2}
            alt=""
            style={{
              width: '100%',
              padding: '1rem 2rem',
            }}
          ></img>
          <br />
          Although my previous website was fair in terms of my career
          description it lacked a space dedicated to my projects and their
          details. That's why I added the experiences section and created a
          detailed page for each project. I would appreciate it if you spend
          time reading my project descriptions.
          <br />
          <img
            src={pic3}
            alt=""
            style={{
              width: '100%',
              padding: '1rem 2rem',
            }}
          ></img>
          <br />
          Last but not least, the contact section. Nothing fancy here, just a
          "Get in touch" prompt to encourage visitors to contact me. In this
          section different methods of contact are listed including a direct
          message form. You can also view and download my CV or visit my GitHub
          page.
          <br />
          Happy visiting and make sure to play around ;)
        </div>
        <div className="gallery">
          <div>
            <img src={pic4} alt="Section 1" />
            <figcaption>Section 1</figcaption>
          </div>
          <div>
            <img src={pic5} alt="Section 2" />
            <caption>Section 2</caption>
          </div>
          <div>
            <img src={pic6} alt="Section 3" />
            <caption>Section 3</caption>
          </div>
          <div>
            <img src={pic7} alt="Section 4" />
            <caption>Section 4</caption>
          </div>
          <div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '200%',
                flexWrap: 'wrap',
              }}
            >
              <img
                src={pic8}
                alt="Thin Stack"
                style={{
                  width: '22%',
                  border: '1px solid grey',
                  margin: ' 0 1rem',
                }}
              />
              <img
                src={pic9}
                alt="Machine"
                style={{
                  width: '22%',
                  border: '1px solid grey',
                  margin: ' 0 1rem',
                }}
              />
              <img
                src={pic10}
                alt="Machine"
                style={{
                  width: '22%',
                  border: '1px solid grey',
                  margin: ' 0 1rem',
                }}
              />
              <img
                src={pic11}
                alt="Machine"
                style={{
                  width: '22%',
                  border: '1px solid grey',
                  margin: ' 0 1rem',
                }}
              />
              <caption style={{ width: '100%', paddingTop: '1rem' }}>
                Mobile
              </caption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Four;
