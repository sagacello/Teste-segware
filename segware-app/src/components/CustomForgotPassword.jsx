import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';
import CentralContext from '../context/Context';

import 'semantic-ui-css/semantic.min.css';

const CustomForgotPassword = ({
  formData: { username },
  onInputChange,
  onHandleSubmit,
  isValid,
  showPassword,
}) => {
  const { isUsernameExist } = useContext(CentralContext);
  useEffect(() => {}, [isUsernameExist]);
  return (
    <Form size="large">
      <Segment stacked style={{ backgroundColor: 'rgb(33, 33, 33)' }}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Username"
          value={username}
          name="username"
          onChange={(e) => onInputChange(e)}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          value={!showPassword ? ' ' : showPassword}
          loading={!showPassword ? true : false}
        />
        <Button
          disabled={isValid()}
          color="red"
          fluid
          size="large"
          onClick={() => onHandleSubmit()}
        >
          Enviar
        </Button>
      </Segment>
    </Form>
  );
};

CustomForgotPassword.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

export default CustomForgotPassword;
