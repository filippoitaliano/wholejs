import React from 'react';
import PropTypes from 'prop-types';

import './animatedSquareStyle.scss';

const AnimatedSquare = ({ x, y }) => (
  <div style={{ left: y, top: x }} className="animated-square" />
);

AnimatedSquare.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default AnimatedSquare;
