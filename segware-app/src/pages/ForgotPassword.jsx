import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomMessage from '../components/CustomMessage';
import CustomHeader from '../components/CustomHeader';
import CustomForgotPassword from '../components/CustomForgotPassword';
import CustomSubHeader from '../components/CustomSubHeader';
import fetchForgotPassword from '../service/forgotPasswordService';

function ForgotPassword() {
  const [formData, setFormData] = useState(new Map());
  const [inputEnable, setInputEnable] = useState('');

  const validate = () => {
    const username = formData.get('username');
    if (!username) {
        return true;
      }
    
    return false;
  };

  const handleSubmit = async () => {
    const username = formData.get('username');
    const password = await fetchForgotPassword(username);
    setInputEnable(password);
    return password;
  };

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => new Map(prevState).set(name, value));
  }, []);

  return (
    <Grid
      textAlign="center"
      style={{ height: '115vh', backgroundColor: 'rgb(33, 33, 33)', marginTop: '-15vh'}}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <CustomHeader message="SEGWARE" />
        <CustomSubHeader message="RECUPEAR SENHA" />

        <CustomForgotPassword
          formData={formData}
          onInputChange={handleInputChange}
          onHandleSubmit={handleSubmit}
          isValid={validate}
          showPassword={inputEnable}
        />
        <CustomMessage>
          Já possui conta ? <Link to="/sign-in">logar</Link>
        </CustomMessage>
      </Grid.Column>
    </Grid>
  );
}

export default ForgotPassword;
