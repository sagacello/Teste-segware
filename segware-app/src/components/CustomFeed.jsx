import React from 'react';
import PropTypes from 'prop-types';
import { Header, Form, TextArea, Icon, Button, Popup } from 'semantic-ui-react';
import CustomSubHeader from '../components/CustomSubHeader';

const CustomFeed = ({
  formData: { content },
  onInputChange,
  onHandleSubmit,
  showUsername,
  goAllContent,
}) => {
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
          value={content}
          onChange={(e) => onInputChange(e)}
        />
        <Popup
          content={
            <>
              <code>Texto enviado com sucesso</code>.
            </>
          }
          on="click"
          popper={{ id: 'popper-container', style: { zIndex: 2000 } }}
          trigger={
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
          }
        />
      </Form>
      <Button
        style={{ marginTop: '2vh' }}
        inverted
        color="red"
        onClick={() => goAllContent()}
        animated="fade"
      >
        <Button.Content visible>Ver todos os seus textos</Button.Content>
        <Button.Content hidden>visualizar</Button.Content>
      </Button>
    </div>
  );
};

CustomFeed.propTypes = {
  formData: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};

export default CustomFeed;
