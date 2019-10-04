import React from 'react'
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {

    let type = this.props.formType;
    let antiType;
    let antiTitle;

    if (type === 'login') {
      type = "Log In";
      antiType = '/signup';
      antiTitle = 'Sign Up!'
    }
    else {
      type = "Sign Up";
      antiType = '/login';
      antiTitle = 'Log In!'
    }

    return (
      <div>
        <Link to={antiType}>{antiTitle}</Link>
        <h1>{type}</h1>
        <p>Errors: </p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Username
            <input type="text" onChange={this.update('username')} />
          </label>
          <label htmlFor="">
            Password
            <input type="password" onChange={this.update('password')} />
          </label>
          <input type="submit" value={type} />
        </form>
      </div>
    )
  }
}

export default SessionForm;