import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';

const CustomLogin = ({
  formData: { username, password },
  onInputChange,
  onHandleSubmit,
  goRegister,
  isValid,
  goForgot,
}) => {
  return (
    <div>
      <Form size="large">
        <Segment stacked style={{ backgroundColor: 'rgb(33, 33, 33)' }} basic>
          <Form.Input
            fluid
            icon="at"
            iconPosition="left"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onInputChange(e)}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Senha"
            type="password"
            name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
          />
          <Button
            type="submit"
            color="red"
            fluid
            size="large"
            onClick={() => onHandleSubmit()}
            disabled={isValid()}
          >
            Entrar
          </Button>
        </Segment>
        <Button
          inverted
          color="red"
          onClick={() => goRegister()}
          animated="fade"
        >
          <Button.Content visible>Ainda não tenho conta</Button.Content>
          <Button.Content hidden>Cadastrar</Button.Content>
        </Button>
        <Button
          inverted
          color="red"
          onClick={() => goForgot()}
          animated="fade"
        >
          <Button.Content visible>Esqueceu a senha ?</Button.Content>
          <Button.Content hidden>Lembrar</Button.Content>
        </Button>
      </Form>
    </div>
  );
};

CustomLogin.propTypes = {
  formData: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  goRegister: PropTypes.func.isRequired,
};

export default CustomLogin;
