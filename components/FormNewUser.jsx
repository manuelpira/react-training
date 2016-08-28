import React from 'react';

import axios from 'axios';

import Actions from '../actions/Actions';
import Store from '../stores/Store';

import App from './App';
import GenericInput from './GenericInput';
import SubmitButton from './SubmitButton';
import FormAlert from './FormAlert';

class FormNewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = Store.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

    Store.listen(this.onChange);
  }

  componentWillUnmount() {
    Store.unlisten(this.onChange);
  }

  onChange() {
    this.setState(Store.getState());
  }

  render() {
    return (
      <App>
        <FormAlert status={this.state.status}/>
        <GenericInput
          name="id"
          onChange={this.handleId}
          value={this.state.id}
        />
        <GenericInput
          name="name"
          onChange={this.handleName}
          value={this.state.name}
        />
        <GenericInput
          name="job"
          onChange={this.handleJob}
          value={this.state.job}
        />
        <SubmitButton value="Click me and send the form!" />
      </App>
      )
  }

  handleId(event) {

    Actions.setId(event.target.value);
  }

  handleName(event) {

    Actions.setName(event.target.value);
  }

  handleJob(event) {

    Actions.setJob(event.target.value);
  }
};

export default FormNewUser;
