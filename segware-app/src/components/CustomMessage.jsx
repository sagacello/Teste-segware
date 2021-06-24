import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const CustomMessage = ({ children }) => {
  return (
    <Message compact color="red" style={ { backgroundColor: 'rgb(33, 33, 33)' } }>
      { children }
    </Message>
  );
};

CustomMessage.propTypes = {
  children: PropTypes.array.isRequired,
};

export default CustomMessage;
