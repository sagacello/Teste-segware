import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomSignIn from '../components/CustomSignIn';
import CustomHeader from '../components/CustomHeader';
import CustomSubHeader from '../components/CustomSubHeader';
import fetchSignIn from '../service/signInService';

function SignIn() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());

  const register = () => history.push('/sign-up');
  const forgotPassword = () => history.push('/forgot-password');
  const validate = () => {
    const username = formData.get('username');
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
    await fetchSignIn(username, password);
    history.push('/');
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: '105vh', backgroundColor: 'rgb(33, 33, 33)' }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 500 }}>
        <CustomHeader message="SEGWARE" />
        <CustomSubHeader message="LOGIN" />

        <CustomSignIn
          formData={formData}
          onInputChange={handleInputChange}
          onHandleSubmit={handleSubmit}
          goRegister={register}
          goForgot={forgotPassword}
          isValid={validate}
        />
      </Grid.Column>
    </Grid>
  );
}

export default SignIn;
