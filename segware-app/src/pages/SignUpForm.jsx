import React, { useState, useCallback, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomMessage from '../components/CustomMessage';
import CustomHeader from '../components/CustomHeader';
import CustomSignUpForm from '../components/CustomSignUpForm';

import CentralContext from '../context/Context';

function SignUp() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());

  const validate = () => {
    const passLimit = 5;
    const usernameLimit = 12;
    const username = formData.get('username');
    const password = formData.get('password');
    if (!password || password.length <= passLimit) {
      return true;
    }
    if (username) {
      const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
      if (!regexName.test(username) || username.length < usernameLimit) {
        return true;
      }
    }
    return false;
  };

  const handleSubmit = async () => {
    const username = formData.get('username');
    const password = formData.get('password');
    // history.push('/admin/orders');
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => new Map(prevState).set(name, value));
  }, []);

  return (
    <Grid
      textAlign="center"
      style={ { height: '105vh', backgroundColor: 'rgb(33, 33, 33)' } }
      verticalAlign="middle"
    >
      <Grid.Column style={ { maxWidth: 450 } }>
        <CustomHeader message="SEGWARE" />
        <CustomSignUpForm
          formData={ formData }
          onInputChange={ handleInputChange }
          onHandleSubmit={ handleSubmit }
          isValid={ validate }
        />
        <CustomMessage>
          Já possui conta ?
          {' '}
          <Link to="/login">logar</Link>
        </CustomMessage>
      </Grid.Column>
    </Grid>
  );
}

export default (SignUp);
