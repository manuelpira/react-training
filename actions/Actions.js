import alt from '../alt.js';

class Actions {

  getUserList() {
  	console.log('ACTIONS: list action fired.');
    this.dispatch();
  }

  submitForm(data) {
  	console.log('ACTIONS: saving form data action fired');
  	this.dispatch(data);
  }

  setUsers(data) {
  	this.dispatch(data);
  }
}

export default alt.createActions(Actions);
