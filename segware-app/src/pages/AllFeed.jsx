import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import CustomAllFeed from '../components/CustomAllFeed';
import fetchAllFeed from '../service/allFeedService';
import CustomHeader from '../components/CustomHeader';

function AllFeed() {
  const history = useHistory();

  const [allContent, setAllContent] = useState();

  useEffect(() => {
    const allFeed = async () => {
      const all = await fetchAllFeed();
      setAllContent(all);
      return all;
    };
    allFeed();
  }, [setAllContent]);

  // const backLogin = () => history.push('/');

  const renderContent = () => (
    <Grid textAlign="center" style={{ padding: '10vh' }}>
      {!allContent
        ? null
        : allContent.slice(0, 12).map((item, index) => (
            <Grid.Column key={index} width={5}>
              <CustomAllFeed index={index} item={item} />
            </Grid.Column>
          ))}
    </Grid>
  );

  return (
    <Grid style={{ backgroundColor: 'rgb(33, 33, 33)' }}>
      <CustomHeader message="TODOS OS POSTS" />
      {renderContent()}
    </Grid>
  );
}

export default AllFeed;
