import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function CentralContextProvider({ children }) {
  return <Context.Provider>{children}</Context.Provider>;
}

CentralContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CentralContextProvider;
