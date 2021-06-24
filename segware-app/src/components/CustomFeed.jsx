import React from 'react';
import PropTypes from 'prop-types';
import { Header, Form, TextArea, Icon, Button } from 'semantic-ui-react';
import CustomSubHeader from '../components/CustomSubHeader';

const CustomFeed = ({ text, onInputChange, onHandleSubmit, showUsername }) => {
  return (
    <div>
      <Form>
        <Header style={{ marginTop: '4vh' }} color="red" as="h2">
          SEU TEXTO
        </Header>
        <Icon size="big" name="user" color="red" style={{ marginTop: '3vh' }} />
        <CustomSubHeader message={!showUsername ? 'username' : showUsername}>
          {' '}
        </CustomSubHeader>

        <TextArea
          placeholder="Escreva aqui"
          style={({ minHeight: 80 }, { marginTop: '6vh' })}
          name="text"
          value={text}
          onChange={(e) => onInputChange(e)}
        />
        <Button
          style={{ marginTop: '1vh' }}
          type="submit"
          color="red"
          fluid
          size="tiny"
          onClick={() => onHandleSubmit()}
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
};

CustomFeed.propTypes = {
  showUsername: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

export default CustomFeed;
