import React from 'react';

import axios from 'axios';

import Actions from '../actions/Actions';
import FormStore from '../stores/FormStore';

import App from './App';
import GenericInput from './GenericInput';
import SubmitButton from './SubmitButton';
import FormAlert from './FormAlert';

class FormNewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = FormStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

    FormStore.listen(this.onChange);
  }

  componentWillUnmount() {
    FormStore.unlisten(this.onChange);
  }

  onChange() {
    this.setState(FormStore.getState());
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
