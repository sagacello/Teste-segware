import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomFeed from '../components/CustomFeed';
import fetchSignIn from '../service/signInService';
import { getUsername } from '../helpers/localStorage';

function Feed() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());
  const [inputText, setInputText] = useState('');

  
  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => new Map(prevState).set(name, value));
  }, []);

  const handleSubmit = async () => {
    const password = formData.get('password');
    // history.push('/');
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: '105vh', backgroundColor: 'rgb(33, 33, 33)' }}
      verticalAlign="top"
    >
      <Grid.Column style={{ maxWidth: 600 }}>
        <CustomFeed
          onHandleSubmit={handleSubmit}
          onInputChange={handleInputChange}
          showUsername={getUsername()}
        />
      </Grid.Column>
    </Grid>
  );
}

export default Feed;
