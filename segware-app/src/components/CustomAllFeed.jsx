import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Segment, Container, Divider } from 'semantic-ui-react';
import CustomSubHeader from './CustomSubHeader';
import fetchReactions from '../service/ReactionsService';

const CustomAllFeed = ({ index, item }) => {
  const [markedStar, setMarkedmarkedStar] = useState(false);
  const [markedHeart, setMarkedHeart] = useState(false);

  const handleSubmitStar = () => {
    setMarkedmarkedStar(!markedStar);
    // cada veze que eu clico eu nego o estado e atualizo
  };
  const handleSubmitHeart = () => {
    setMarkedHeart(!markedHeart);
  };

  useEffect(() => {
    Object.entries(item)
      .slice(0, 15)
      .map((i) => {
        if (i[0] === 'likes' && i[1] === 0) {
          console.log(i[0] ,'===', i[1]);
          return setMarkedmarkedStar(false);
        }
        else if (i[0] === 'likes' && i[1] === 1) {
          console.log(i[0] ,'===', i[1]);
          return setMarkedmarkedStar(true);
        }
        else if (i[0] === 'loves' && i[1] === 0) {
          console.log(i[0] ,'===', i[1]);
          return setMarkedHeart(false);
        }
        else if (i[0] === 'loves' && i[1] === 1) {
          return setMarkedHeart(true);
        }
      });
  }, [setMarkedmarkedStar, setMarkedHeart, item]);

  const markekedReaction = async (id) => {
    await fetchReactions(id, markedStar, markedHeart);
  };

  return (
    <Segment inverted>
      <CustomSubHeader message={`TEXTO ${index + 1}`}></CustomSubHeader>
      <Item.Group>
        <Container fluid textAlign="justified" style={{ color: 'whitesmoke' }}>
          <p>{item.content}</p>
        </Container>
        <Divider />
        <Item>
          <Item.Content>
            <Item.Extra>
              <Icon
                color={markedHeart ? 'red' : 'grey'}
                size="big"
                style={{ marginRight: '30vh' }}
                name="like"
                onClick={async () => {
                  handleSubmitHeart();
                  await markekedReaction(item.id);
                }}
                data-testid="like"
              />
              <Icon
                rotated={markedStar ? 'clockwise' : 'counterclockwise'}
                color={markedStar ? 'yellow' : 'grey'}
                size="big"
                name="favorite"
                // data-testid="favorite"
                onClick={async () => {
                  handleSubmitStar();
                  await markekedReaction(item.id);
                }}
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

CustomAllFeed.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomAllFeed;
