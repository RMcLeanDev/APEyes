import React from 'react';
import '../scss/styles.scss';
import * as ROUTES from '../constants/Routes';
import firebase from 'firebase/app';

const INITIAL_STATE ={
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ...INITIAL_STATE
    }
  }

  onChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit = event => {
    const {username, email, passwordOne} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, passwordOne).then(authUser => {
      this.setState({...INITIAL_STATE});
      this.props.history.push(ROUTES.HOME)
    }).catch(error => {
      this.setState({error})
    })
    event.preventDefault();
  }

  render(){
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return(
      <div>
      <h1>Create your new account</h1>
      <form className="form" onSubmit={this.onSubmit}>
        <input
          name='username'
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"/>
        <input
          name='email'
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"/>
        <input
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"/>
        <input
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"/>
        <button disabled={isInvalid} type="submit">Create Account</button>

      </form>
      {error && <p>{error.message}</p>}
      </div>
    )
  }
}

export default SignUp;
