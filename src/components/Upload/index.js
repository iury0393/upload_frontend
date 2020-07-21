import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

// import { Container } from './styles';

export default class Upload extends Component {
  render() {
    return (
      <Dropzone accept="image/*, application/pdf" onDropAccepted={() => {}}>

      </Dropzone>
    );
  }
}
