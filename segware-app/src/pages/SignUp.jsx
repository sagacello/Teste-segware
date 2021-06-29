import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomMessage from '../components/CustomMessage';
import CustomHeader from '../components/CustomHeader';
import CustomSignUp from '../components/CustomSignUp';
import CustomSubHeader from '../components/CustomSubHeader';
import fetchSignUp from '../service/signUpService';

function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());
  const validate = () => {
    const passLimit = 0;
    const username = formData.get('username');
    const password = formData.get('password');
    if (username) {
      const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
      if (!regexName.test(username)) {
        return true;
      }
    }
    if (!password || password.length <= passLimit) {
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    const username = formData.get('username');
    const password = formData.get('password');
    await fetchSignUp(username, password);
    history.push('/sign-in');
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => new Map(prevState).set(name, value));
  }, []);

  return (
    <Grid
      textAlign="center"
      style={{
        height: '115vh',
        backgroundColor: 'rgb(33, 33, 33)',
        marginTop: '-15vh',
      }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <CustomHeader message="SEGWARE" />
        <CustomSubHeader message="CADASTRO" />

        <CustomSignUp
          formData={formData}
          onInputChange={handleInputChange}
          onHandleSubmit={handleSubmit}
          isValid={validate}
        />
        <CustomMessage>
          Já possui conta ?{' '}
          <Link data-testid="btn-link" to="/sign-in">
            logar
          </Link>
        </CustomMessage>
      </Grid.Column>
    </Grid>
  );
}

export default SignUp;
