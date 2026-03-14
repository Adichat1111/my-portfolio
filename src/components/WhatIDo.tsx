import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    containerRef.current.forEach((container) => {
      if (container) {
        container.addEventListener("click", () => handleClick(container));
      }
    });

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>ROBOTICS</h3>
              <h4>Designing Autonomous Systems</h4>
              <p>
                Developing intelligent robotic and mechatronic systems by
                integrating sensors, control algorithms, and mechanical design.
                I focus on autonomous robotics, system modeling, and robot
                simulation using modern engineering tools.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">ROS</div>
                <div className="what-tags">Gazebo</div>
                <div className="what-tags">MATLAB</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">SolidWorks</div>
                <div className="what-tags">CATIA</div>
                <div className="what-tags">Robot Simulation</div>
                <div className="what-tags">Sensor Integration</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>SIMULATION</h3>
              <h4>Engineering Simulation & XR</h4>
              <p>
                Creating engineering simulations and immersive XR training
                environments for mechanical systems. My work combines CAD,
                CAE, and virtual reality to improve product design, safety
                training, and system validation.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">ANSYS</div>
                <div className="what-tags">Unity</div>
                <div className="what-tags">Blender</div>
                <div className="what-tags">Fusion 360</div>
                <div className="what-tags">AutoCAD</div>
                <div className="what-tags">XR / VR</div>
                <div className="what-tags">FEA</div>
                <div className="what-tags">System Simulation</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}