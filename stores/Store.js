import alt from '../alt.js';

import Actions from '../actions/Actions.js';
import axios from 'axios';

class Store {
  constructor() {
    console.log('STORE: store created');
    this.bindListeners({
      getUserList: Actions.GET_USER_LIST,
      setUsers: Actions.SET_USERS,
      /* form bindings */
      updateFormDataId: Actions.SET_ID,
      updateFormDataName: Actions.SET_NAME,
      updateFormDataJob: Actions.SET_JOB,
      saveForm: Actions.SUBMIT_FORM,
    });

    this.state = {
      id: 0,
      name: 'Default Name',
      job: 'Unemployed',
      userList: [],
    };
  }

  getUserList() {
    console.log('STORE: getting user list');

    axios
      .get('http://localhost:3033/users')
      .then((response) => {

        Actions.setUsers(response.data);
      });
  }

  setUsers(data) {

    this.setState({
      userList: data
    });    
  }

  updateFormDataId(id) {

    this.setState({
      id: id,
    });

    console.log('STORE: store state updated', this.state);
  }

  updateFormDataName(name) {

    this.setState({
      name: name,
    });

    console.log('STORE: store state updated', this.state);
  }

  updateFormDataJob(job) {

    this.setState({
      job: job,
    });

    console.log('STORE: store state updated', this.state);
  }

  saveForm(data) {

    const _this = this;

    console.log('FORM STATE BEFORE SAVE', this.state);

    axios
      .post('http://localhost:3033/users', this.state)
      .then((response) => {

        _this.setState({
          id: 0,
          name: 'Default Name',
          job: 'Default Job',
          status: 'data saved'
        });
      });
  }
}

Store.displayName = 'Store';

export default alt.createStore(Store);
