import React from 'react';
// import PropTypes from 'prop-types'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="items-stc">
      <p className="item">Good: {good}</p>
      <p className="item">Neutral: {neutral}</p>
      <p className="item">Bad: {bad}</p>
      <p className="item">Total: {total}</p>
      <p className="item">Positive feedback: {positivePercentage} %</p>
    </div>
  );
};

Statistics.propTypes = {};

export default Statistics;
