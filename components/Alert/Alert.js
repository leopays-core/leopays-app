/*
import 'semantic-ui-css/semantic.min.css';
import * as React from 'react';
import { Button, Modal } from 'semantic-ui-react';




class Alert extends React.Component {
  // (title = '', message = '', buttons = [], options = {})
  state = {
    open: true,
    closeOnEscape: false,
    closeOnDimmerClick: false,
  };

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render() {
    const { title = '', message = '', buttons = [], options: { }, } = this.props;
    const { open, closeOnEscape, closeOnDimmerClick } = this.state;

    return (
      <Modal
        open={open}
        closeOnEscape={closeOnEscape}
        closeOnDimmerClick={closeOnDimmerClick}
        onClose={this.close}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          <p>{message}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.close} negative>
            No
          </Button>
          <Button
            onClick={this.close}
            positive
            labelPosition='right'
            icon='checkmark'
            content='Yes'
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
export default {};
*/

// alert(title, message?, buttons?, options?)
export const alert = (title = '', message = '', buttons = [], options = {}) => {
  return (window.alert(`${title}\n${message}`));
  return (window.confirm(message));
  /*
  return (
    <Alert
      title={title}
      message={message}
      buttons={buttons}
      options={options}
    />
  );
  */
}
