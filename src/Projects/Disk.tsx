import React from 'react';

import pic3 from '../media/disk/Feeder.gif';
import pic1 from '../media/disk/FuncDecon.png';
import pic2 from '../media/disk/Gearbox.gif';
import pic7 from '../media/disk/Simulation.gif';
import pic4 from '../media/disk/Sorter.gif';
import pic5 from '../media/disk/Thick.gif';
import pic6 from '../media/disk/Thin.gif';
import bg from '../media/title/disk.png';

const Disk = () => {
  return (
    <div className="pr-container">
      <div className="pr-row1">
        <div className="pr-col1">
          <div className="pr-title">Disk Sorter</div>
          <div className="pr-desc">2019</div>
          <div className="pr-desc-title">Type:</div>
          <div className="pr-desc">Academic</div>
          <div className="pr-desc-title">Role:</div>
          <div className="pr-desc">Student / Project Manager</div>
          <div className="pr-desc-title">Technologies:</div>
          <div className="pr-desc" style={{ marginBottom: '1rem' }}>
            SolidWorks - Enterprise Dynamics
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
          paddingBottom: '2rem'
        }}>
        In the second semester of my master&apos;s program, I took a course called &quot;Engineering
        Experience 4&quot;. The students were divided into groups of 3 or 4 and one professor was
        assigned to each group. The groups were assigned the task of designing a disk sorter based
        on some requirements and standards. For evaluation, our designs would be simulated and
        tested by the professors. <br />
        The input of the machine was a stack of disks and they could be in 3 different thicknesses
        but the same diameter. Two thicknesses would be chosen randomly and provided during the
        test. The sorter had to be capable of sorting the thin and thick disks and be adjustable to
        work with the three possible combinations of thicknesses. The machine was powered by a motor
        and a gearbox and no other electrical component was allowed. Only the basic values for the
        gearbox were provided and other calculations were assigned as a task
        <br />
        To come up with an efficient design our group decided to create a functional decomposition
        of the system. We broke down the system into key components and studied the different
        possible designs. <br />
        <img
          src={pic1}
          alt="Disk Sorter Functional Decomposition"
          style={{
            width: '100%',
            padding: '1rem 5rem'
          }}
        />
        <br />
        After deciding on the approximate design of the machine we started the gearbox design
        process. The gears and the box were modeled based on the provided gear ratios and mounting
        options of the machine. During this phase and due to my background in CAD modeling I was
        assigned the role of project manager and helped my teammates with the measurements,
        modeling, and verification of each component.
        <br />
        The machine was planned to be laser cut from a 10mm MDF board. The components were designed
        in such a way to allow a simple shape to have the same functionality as a complex 3D-printed
        one. Components fit in a way that requires minimum modification after initial production.
        After 5 months of hard work and dedication, a total of 16 parts for the gearbox and 49 parts
        for the rest of the machine were modeled.
        <br />
        Due to the complexity and the extreme detail of the models, simulating the system was a task
        in itself. The machine was broken down into several subsystems and each subsystem was
        simulated using the built-in simulation system of SolidWorks. We verified the workings of
        the subsystems carefully and then it was time to run the final simulation. It took more than
        10 hours for a 40-second video.
        <br />
        The team and the professor were happy with the results and the project was marked 16 out of
        20. It was the 3rd rank between 25 teams. This project is one of my favorites as it helped
        me show how a practical design process can help with the efficiency of the whole system. I
        learned that critical thinking not only at the beginning but during the process is the key
        to achieving a system that is designed to specifically suit your needs. Getting feedback
        from the professor during the process also helped us get back on track in situations when we
        were not thinking clearly or overthinking. His advice and guidance made us familiar with the
        standards of the industry. I was fortunate to have the opportunity to part take in this
        project and get more familiar with mechanical design.
      </div>
      <div className="gallery">
        <div>
          <img src={pic2} alt="Gearbox" />
          <figcaption>Gearbox</figcaption>
        </div>
        <div>
          <img src={pic3} alt="Feeder" />
          <caption>Feeder</caption>
        </div>
        <div>
          <img src={pic4} alt="Sorter" />
          <caption>Sorter</caption>
        </div>
        <div>
          <img src={pic5} alt="Thick Stack" />
          <caption>Thick Stack</caption>
        </div>
        <div>
          <img src={pic6} alt="Thin Stack" />
          <caption>Thin Stack</caption>
        </div>
        <div>
          <img src={pic7} alt="Machine" />
          <caption>Machine</caption>
        </div>
      </div>
    </div>
  );
};

export default Disk;
