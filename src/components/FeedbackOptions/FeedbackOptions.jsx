import React from 'react';
// import PropTypes from 'prop-types';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <form className="btn-container" onClick={onLeaveFeedback}>
        <button className="" type="button" name="good">
          Good
        </button>
        <button className="" type="button" name="neutral">
          Neutral
        </button>
        <button className="" type="button" name="bad">
          Bad
        </button>
      </form>
    </div>
  );
}

FeedbackOptions.propTypes = {};

export default FeedbackOptions;
