import alt from '../alt.js';

import Actions from '../actions/Actions.js';
import axios from 'axios';

class Store {
  constructor() {
    console.log('STORE: store created');
    this.bindListeners({
      getUserList: Actions.GET_USER_LIST,
      setUsers: Actions.SET_USERS,
    });

    this.state = {
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
}

Store.displayName = 'Store';

export default alt.createStore(Store);
