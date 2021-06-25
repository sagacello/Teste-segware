import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Segment, Container, Divider } from 'semantic-ui-react';
import CustomSubHeader from './CustomSubHeader';
import fetchReactions from '../service/ReactionsService';

const CustomAllFeed = ({ index, item }) => {
  const [markedLike, setMarkedLike] = useState(false);
  const [markedHeart, setMarkedHeart] = useState(false);

  const handleSubmitLike = () => {
    setMarkedLike(!markedLike);
    // cada veze que eu clico eu nego o estado e atualizo
  };
  const handleSubmitHeart = () => {
    setMarkedHeart(!markedHeart);
  };

  const markekedReaction = async (index) => {
    console.log(index, markedLike, markedHeart)
    await fetchReactions(index, markedLike, markedHeart);
    console.log(await fetchReactions())
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
                  await markekedReaction(index);
                }}
              />
              <Icon
                rotated={markedLike ? 'clockwise' : 'counterclockwise'}
                color={markedLike ? 'yellow' : 'grey'}
                size="big"
                name="favorite"
                onClick={async () => {
                  handleSubmitLike();
                  await markekedReaction(index);
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
