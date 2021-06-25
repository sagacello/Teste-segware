import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Container, Card } from 'semantic-ui-react';
import CustomAllFeed from '../components/CustomAllFeed';
import fetchAllFeed from '../service/allFeedService';
import CustomHeader from '../components/CustomHeader';

function AllFeed() {
  const history = useHistory();

  const [allContent, setAllContent] = useState();

  useEffect(() => {
    const allFeed = async () => {
      const result = await fetchAllFeed();
      setAllContent(result);
      return result;
    };
    allFeed();
  }, [setAllContent]);

  const backLogin = () => history.push('/');

  const renderContent = useCallback(
    () => (
      <Grid style={{ marginTop: '-10vh' }}>
        {!allContent
          ? null
          : allContent.slice(0, 9).map((item, index) => (
              <Grid.Column style={{ padding: 50 }} floated="left" width={5}>
                <CustomAllFeed key={index} index={index} item={item.content} />
              </Grid.Column>
            ))}
      </Grid>
    ),
    [allContent]
  );
  return (
    <Grid
      textAlign="center"
      style={{ height: '125vh', backgroundColor: 'rgb(33, 33, 33)' }}
      verticalAlign="top"
    >
      <CustomHeader message="TODOS OS POSTS" />
      {renderContent()}
      <Grid.Column style={{ maxWidth: 600 }}></Grid.Column>
    </Grid>
  );
}

export default AllFeed;
