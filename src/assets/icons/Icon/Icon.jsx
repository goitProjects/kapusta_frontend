import React from 'react';
import PropTypes from 'prop-types';

import * as Icons from '..';

const Icon = ({ icon, ...rest }) => {
  // eslint-disable-next-line import/namespace
  const Svg = Icons[icon];

  return <Svg {...rest} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
