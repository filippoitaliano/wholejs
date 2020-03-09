import React from 'react';
import PropTypes from 'prop-types';

const AnimatedSquare = ({ x, y }) => (
  <div style={{ left: y, top: x }} className="animated-square" />
);

AnimatedSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default AnimatedSquare;
