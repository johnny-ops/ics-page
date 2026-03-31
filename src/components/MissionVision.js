import './MissionVision.css';
import { FaBullseye, FaEye, FaCode, FaBriefcase, FaChartLine, FaLaptopCode, FaHandshake } from 'react-icons/fa';

function MissionVision() {
  const objectives = [
    {
      icon: <FaCode />,
      text: "Aims to prepare students to design and create algorithmically complex software and develop new and useful algorithms to solve computing problems, designs, and practice software, and devise new systems to use computers."
    },
    {
      icon: <FaBriefcase />,
      text: "Train computer professionals competent in the fast-growing demand for software developers and IT experts in the business economics and related industries."
    },
    {
      icon: <FaChartLine />,
      text: "Continuously upgrade training programs standardized to the rapid developments in computer industry."
    },
    {
      icon: <FaLaptopCode />,
      text: "Provide adequate experience to widen the actual practices in the world of computers."
    },
    {
      icon: <FaHandshake />,
      text: "Adhere themselves in the sense of professional values and ethics as they respond in the demands of the present time."
    }
  ];

  return (
    <section className="mission-vision">
      <div className="mv-header">
        <h2 className="section-title">Mission & Vision</h2>
      </div>

      <div className="mv-container">
        <div className="mv-card mission">
          <div className="card-icon">
            <FaBullseye />
          </div>
          <h3>Mission</h3>
          <p>The Institute of Computer Studies aims to educate future engineers and IT professionals to globally competitive in a rapidly changing world.</p>
        </div>

        <div className="mv-card vision">
          <div className="card-icon">
            <FaEye />
          </div>
          <h3>Vision</h3>
          <p>The Institute of Computer Studies envisions itself to be recognized as the nation's premier Engineering and IT educational institution that delivers state-of-the-art method of instructions and up-to-date curriculum.</p>
        </div>
      </div>

      <div className="objectives-section">
        <h3 className="objectives-title">Institutional Objectives</h3>
        <div className="objectives-list">
          {objectives.map((objective, index) => (
            <div key={index} className="objective-item">
              <div className="objective-icon">{objective.icon}</div>
              <p>{objective.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
