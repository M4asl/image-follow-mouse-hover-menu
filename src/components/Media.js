import React from 'react';

const Media = ({ url, active, x, y }) => {
  return (
    <img
      className={active ? 'is-active' : null}
      src={url}
      alt="sample data"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  );
};

export default Media;
