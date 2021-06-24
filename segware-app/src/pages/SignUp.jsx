import React, { useState, useCallback, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomMessage from '../components/CustomMessage';
import CustomHeader from '../components/CustomHeader';
import CustomSignUp from '../components/CustomSignUp';
import CustomSubHeader from '../components/CustomSubHeader';
import fetchSignUp from '../service/signUpService';

import CentralContext from '../context/Context';

function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());

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
      style={{ height: '105vh', backgroundColor: 'rgb(33, 33, 33)' }}
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
          Já possui conta ? <Link to="/sign-in">logar</Link>
        </CustomMessage>
      </Grid.Column>
    </Grid>
  );
}

export default SignUp;
