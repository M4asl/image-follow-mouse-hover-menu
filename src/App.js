import React, { useEffect, useState } from 'react';
import Media from './components/Media';
import Title from './components/Title';
import sampleData from './utils/sampleData';
import './styles/home.scss';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

const App = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const { x, y } = useMousePosition();

  console.log(x, y);

  return (
    <div className="page-wrapper">
      <div className="project-list">
        {sampleData.map(({ title }, index) => (
          <Title
            key={index}
            title={title}
            setActiveIndex={setActiveIndex}
            index={index}
          />
        ))}
      </div>
      <div className="project-media">
        {sampleData.map(({ mediaUrl }, index) => {
          const isActive = index === activeIndex;
          return (
            <Media
              url={mediaUrl}
              active={isActive}
              x={x}
              y={y}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
