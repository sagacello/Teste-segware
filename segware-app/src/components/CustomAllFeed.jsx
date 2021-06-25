import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Segment, Container, Divider } from 'semantic-ui-react';
import CustomSubHeader from './CustomSubHeader';

const CustomAllFeed = ({
  index,
  item,
  key,
}) => {
  const [markedLike, setMarkedLike] = useState(false);
  const [markedHeart, setMarkedHeart] = useState(false);
  useEffect(() => {}, [setMarkedLike]);
  useEffect(() => {}, [setMarkedHeart]);
  
  
  const handleSubmitLike = (e) => {
    setMarkedLike(!markedLike);
    // cada veze que eu clico eu nego o estado e atualizo
  };
  const handleSubmitHeart = (e) => {
    setMarkedHeart(!markedHeart);
  };
 
  return (
    <Segment inverted>
      <CustomSubHeader message={`TEXTO ${index + 1}`}></CustomSubHeader>
      <Item.Group>
        <Container
          fluid
          textAlign="justified"
          style={{ color: 'whitesmoke' }}
          text="true"
        >
          <p>{item.content}</p>
        </Container>
        <Divider />
        <Item>
          <Item.Content>
            <Item.Extra>
              <Icon
                rotated={markedHeart ? 'counterclockwise' : 'clockwise'}
                color={markedHeart ? 'red' : 'grey'}
                size="big"
                style={{ marginRight: '30vh' }}
                name="like"
                onClick={ (e) => handleSubmitHeart(e)}
          
              />
              <Icon
                rotated={markedLike ? 'clockwise' : 'counterclockwise'}
                color={markedLike ? 'yellow' : 'grey'}
                size="big"
                name="favorite"
                onClick={(e) => handleSubmitLike(e)}
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
