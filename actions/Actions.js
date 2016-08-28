import alt from '../alt.js';

class Actions {

  getUserList() {
  	console.log('ACTIONS: list action fired.');
    this.dispatch();
  }

  setUsers(data) {
  	this.dispatch(data);
  }

  /* form related actions */

  setId(data) {
  	this.dispatch(data);
  }

  setName(data) {
  	this.dispatch(data);
  }

  setJob(data) {
  	this.dispatch(data);
  }

  submitForm(data) {
  	console.log('ACTIONS: saving form data action fired');
  	this.dispatch(data);
  }
}

export default alt.createActions(Actions);
