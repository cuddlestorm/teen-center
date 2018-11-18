import React, {Component} from 'react';
import fire from '../../utils/fire';

// log in to the site
class Authorize extends Component {
  state = {
    email: '',
    password: ''
  }

  // update state with contents of input field
  handleTermChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // log in with form data
  login = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  // log user out
  logout = () => {
    fire.auth().signOut();
  }

  
  render() {

    // show login form or logout link depending on user state
    let logInOut = null;
    if (this.props.user) {
      logInOut = (
        /* eslint-disable-next-line */ 
        < a onClick = { this.logout } > log out</a >
      )
    } else {
      logInOut = (
        <form>
          <input
            value={this.state.email}
            onChange={this.handleTermChange}
            type="email"
            name="email"
            placeholder="Enter email" />
          <input
            value={this.state.password}
            onChange={this.handleTermChange}
            type="password"
            name="password"
            placeholder="Password" />
          <button type="submit" onClick={this.login}>Login</button>
        </form>
      )
    }

    return (
      <React.Fragment>
        {logInOut}
      </React.Fragment>
    )
  }
}

export default Authorize;