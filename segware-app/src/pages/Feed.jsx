import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomFeed from '../components/CustomFeed';
import feedService from '../service/feedService';
import { getUsername } from '../helpers/localStorage';

function Feed() {
  const history = useHistory();
  const [formData, setFormData] = useState(new Map());
  
  const allContent = () => history.push('/allFeed');

  const handleInputChange = useCallback(({ target: { name, value } }) => {
    setFormData((prevState) => new Map(prevState).set(name, value));
  }, []);

  const handleSubmit = async () => {
    const content = formData.get('text');
    console.log(content)
    await feedService(content)
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
          formData={formData}
          onHandleSubmit={handleSubmit}
          onInputChange={handleInputChange}
          showUsername={getUsername()}
          goAllContent={allContent}
          
        />
      </Grid.Column>
    </Grid>
  );
}

export default Feed;
