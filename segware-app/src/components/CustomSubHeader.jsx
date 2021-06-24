import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CustomSubHeader = ({ message }) => (
  <div>
    <Header color="red" size="tiny">{message}</Header>
  </div>
);

CustomSubHeader.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomSubHeader;
