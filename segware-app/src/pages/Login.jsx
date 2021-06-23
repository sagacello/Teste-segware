import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomLogin from '../components/CustomLogin';
import CustomHeader from '../components/CustomHeader';

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());

  const register = () => history.push('/register');
  const forgotPassword = () => history.push('/forgot');

  const validate = () => {
    const passLimit = 5;
    const username = formData.get('username');

    const password = formData.get('password');
    if (!password || password.length <= passLimit) {
      return true;
    }
    if (username) {
      const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
      if (!regexName.test(username)) {
        return true;
      }
    }
    return false;
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => new Map(prevState).set(name, value));
  }, []);

  const handleSubmit = async () => {
    const username = formData.get('username');
    const password = formData.get('password');
    // history.push('/');
  };

  return (
    <Grid
      textAlign="center"
      style={ { height: '105vh', backgroundColor: 'rgb(33, 33, 33)' } }
      verticalAlign="middle"
    >
      <Grid.Column style={ { maxWidth: 500 } }>
      <CustomHeader message="SEGWARE" />
        <CustomLogin
          formData={ formData }
          onInputChange={ handleInputChange }
          onHandleSubmit={ handleSubmit }
          goRegister={ register }
          goForgot = { forgotPassword }
          isValid={ validate }
        />
      </Grid.Column>
    </Grid>
  );
}

export default Login;
