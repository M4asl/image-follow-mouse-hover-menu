import React, { useCallback, useLayoutEffect, useState } from 'react';

const getDimensionObject = (node) => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
  };
};

const useSize = () => {
  const [dimensions, setDimensions] = useState({});
  const [node, setNode] = useState(null);

  const ref = useCallback((node) => {
    setNode(node);
  }, []);

  useLayoutEffect(() => {
    if (node) {
      const measure = () => setDimensions(getDimensionObject(node));
      measure();
    }
  }, []);

  return [ref, dimensions];
};

const Media = ({ url, active, x, y }) => {
  const [ref, { width, height }] = useSize();
  return (
    <img
      className={active ? 'is-active' : null}
      ref={ref}
      src={url}
      alt="sample data"
      style={{
        transform: `translate(${x - width / 2}px, ${
          y - height / 2
        }px)`,
      }}
    />
  );
};

export default Media;
