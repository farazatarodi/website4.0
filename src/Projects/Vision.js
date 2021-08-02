import Nav from './Nav';
import bg from '../media/title/vision.jpg';
import paper from '../media/Faraz_Atarodi-Bachelor_Thesis.pdf';
import linkArrow from '../media/diagonal-arrow.png';

const Vision = () => {
  return (
    <div>
      <Nav />
      <div className="pr-container">
        <div className="pr-row1">
          <div className="pr-col1">
            <div className="pr-title">Computer Vision and Smart Assistant</div>
            <div className="pr-desc">2017 - 2018</div>
            <div className="pr-desc-title">Type:</div>
            <div className="pr-desc">Bachelor's Thesis</div>
            <div className="pr-desc-title">Role:</div>
            <div className="pr-desc" style={{ marginBottom: '1rem' }}>
              Student
            </div>
            <div className="pr-link">
              <a
                className="links"
                href={paper}
                target="_blank"
                rel="noreferrer"
              >
                View Paper
                <img src={linkArrow} alt="" className="link-arrow" />
              </a>
            </div>
          </div>
          <div className="pr-col2">
            <img src={bg} alt="" className="pr-title-image" />
          </div>
        </div>
        <div className="pr-row2">
          I studied mechatronics engineering for my bachelor's degree in my
          hometown of Tehran, Iran. My program consisted of three main subjects,
          mechanical and electronics engineering and computer science. For my
          final thesis, I decided to study a topic that covers all of these
          subjects. The autonomous vehicles topic was the first thing that came
          to mind as it is a rather traditional industry going through
          modernization. During my initial research, I realized that there are
          extensive papers regarding the technology surrounding the topic.
          However, one approach was not studied and that was the approach of
          converting current vehicles to autonomous vehicles.
          <br />I managed to get one of the most published professors in my
          country as a supervisor and with his approval, I began my main
          research. After several months, I provided a detailed report with
          great accuracy on the components needed for this conversion. This
          initial report although detailed did not satisfy my supervisor. He
          needed me to come up with a method to make this conversion process
          optimized.
          <br />
          The next step for me was to study each component and understand its
          functionality. This process helped me understand the relationship
          between components and how I can add or remove elements to make the
          system more efficient.
          <br />
          One of the main subjects in my paper was the implementation of speed
          controllers and proximity sensors to achieve complete speed control. I
          studied and provided several controllers and different technologies
          that can be used for this purpose.
          <br />
          This paper is in my native language of Persian, but I have provided a
          download link just in case. I hope you enjoy reading it and find it
          useful.
        </div>
      </div>
    </div>
  );
};

export default Vision;
