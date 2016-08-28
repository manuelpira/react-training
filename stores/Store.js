import alt from '../alt.js';

import Actions from '../actions/Actions.js';
import axios from 'axios';

class Store {
  constructor() {
    console.log('STORE: store created');
    this.bindListeners({
      getUserList: Actions.GET_USER_LIST,
      saveForm: Actions.SUBMIT_FORM,
      setUsers: Actions.SET_USERS,
    });

    this.state = {
      formData: {
        fields: {

        },
        status: null
      },
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

  saveForm(data) {

    console.log('STORE: saving form data', data);
  }
}

Store.displayName = 'Store';

export default alt.createStore(Store);
