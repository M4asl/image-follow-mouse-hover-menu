import React from 'react';

const Media = ({ url, active }) => {
  return (
    <img
      className={active && 'is-active'}
      src={url}
      alt="sample data"
    />
  );
};

export default Media;
