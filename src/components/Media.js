import React from 'react';

const Media = ({ url, active }) => {
  return (
    <img
      className={active ? 'is-active' : null}
      src={url}
      alt="sample data"
    />
  );
};

export default Media;
