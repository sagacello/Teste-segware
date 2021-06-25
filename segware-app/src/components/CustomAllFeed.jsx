import React from 'react';
import PropTypes from 'prop-types';
import { Item, Icon } from 'semantic-ui-react';
import CustomSubHeader from './CustomSubHeader';
const CustomAllFeed = ({ index, item, marked }) => {
  return (
    <Item.Group>
      <Item style={{ marginTop: '3vh' }}>
        <Item.Content>
          <CustomSubHeader message={`TEXTO ${index + 1}`}></CustomSubHeader>
          <p style={({ color: 'whitesmoke' })}>
            {item}
          </p>
          <Item.Extra>
            <Icon
              rotated="counterclockwise"
              color="red"
              size="large"
              style={{ marginRight: '1vh' }}
              name="like"
            />
            <Icon
              rotated="counterclockwise"
              color="yellow"
              size="large"
              name="favorite"
            />
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};

CustomAllFeed.propTypes = {
  index: PropTypes.number.isRequired,
};

export default CustomAllFeed;
