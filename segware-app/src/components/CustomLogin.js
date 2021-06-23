import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Segment } from 'semantic-ui-react';

const CustomLogin = ({
  formData: { email, password },
  onInputChange,
  onHandleSubmit,
  goRegister,
  isValid,
}) => {

  return (
    <div>
      <Form size="large">
        <Segment stacked style={{ backgroundColor: 'rgb(33, 33, 33)' }} basic>
          <Form.Input
            data-testid="email-input"
            fluid
            icon="at"
            iconPosition="left"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
          <Form.Input
            data-testid="password-input"
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
            data-testid="signin-btn"
            color="orange"
            fluid
            size="large"
            onClick={() => onHandleSubmit()}
            disabled={isValid()}
          >
            Entrar
          </Button>
        </Segment>
        <Button style={{ backgroundColor: 'rgb(33, 33, 33)' }}
          data-testid="no-account-btn"
          inverted
          color="orange"
          onClick={() => goRegister()}
          animated="fade"
        >
          <Button.Content visible>Ainda não tenho conta</Button.Content>
          <Button.Content hidden>Cadastrar</Button.Content>
        </Button>
        <Button
          data-testid="no-account-btn"
          inverted
          color="orange"
          onClick={() => goRegister()}
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
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
  goRegister: PropTypes.func.isRequired,
};

export default CustomLogin;
