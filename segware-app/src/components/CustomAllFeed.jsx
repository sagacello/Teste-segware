import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Segment, Container, Divider } from 'semantic-ui-react';
import CustomSubHeader from './CustomSubHeader';
import fetchReactions from '../service/ReactionsService';

const CustomAllFeed = ({ index, item }) => {
  const [markedStar, setMarkedmarkedStar] = useState(false);
  const [markedHeart, setMarkedHeart] = useState(false);
  console.log(item);
  const handleSubmitStar = () => {
    setMarkedmarkedStar(!markedStar);
    // cada veze que eu clico eu nego o estado e atualizo
  };
  const handleSubmitHeart = () => {
    setMarkedHeart(!markedHeart);
  };

  const markekedReaction = async (id) => {
    console.log(id, markedStar, markedHeart);
    await fetchReactions(id, markedStar, markedHeart);
    console.log(await fetchReactions());
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
              />
              <Icon
                rotated={markedStar ? 'clockwise' : 'counterclockwise'}
                color={markedStar ? 'yellow' : 'grey'}
                size="big"
                name="favorite"
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
  markedHeart: PropTypes.bool.isRequired,
  markedLike: PropTypes.bool.isRequired,
};

export default CustomAllFeed;
