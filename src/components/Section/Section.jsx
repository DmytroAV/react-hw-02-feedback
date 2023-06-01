import React from 'react';
// import PropTypes from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <div className="container-section">
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {};

export default Section;
