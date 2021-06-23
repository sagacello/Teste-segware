import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Context from './Context';

function CentralContextProvider({ children }) {
  const [isUsernameExist, setIsUsernameExist] = useState(false);

  return (
    <Context.Provider
      value={ {
        isUsernameExist,
        setIsUsernameExist
      } }
    >
      {children}
    </Context.Provider>
  );
}

CentralContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CentralContextProvider;
