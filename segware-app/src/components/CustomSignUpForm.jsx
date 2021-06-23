import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';
import CentralContext from '../context/Context';

import 'semantic-ui-css/semantic.min.css';

const CustomSignUpForm = ({
  formData: { username, password },
  onInputChange,
  onHandleSubmit,
  isValid,
}) => {
  const { isUsernameExist } = useContext(CentralContext);
  useEffect(() => {}, [isUsernameExist]);
  return (
    <Form size="large">
      <Segment stacked style={ { backgroundColor: 'rgb(33, 33, 33)' } }>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Username"
          value={ username }
          name="username"
          onChange={ (e) => onInputChange(e) }
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          value={ password }
          type="password"
          name="password"
          onChange={ (e) => onInputChange(e) }
        />

        <Button
          color="red"
          fluid
          size="large"
          onClick={ () => onHandleSubmit() }
          disabled={ isValid() }
        >
          Cadastrar
        </Button>

        {!isUsernameExist ? null : (
          <span>Já existe um usuário com esse e-mail.</span>
        )}
      </Segment>
    </Form>
  );
};

CustomSignUpForm.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,

};

export default CustomSignUpForm;
