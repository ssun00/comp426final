// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React from 'react'
import '../../styles.css'
import { 
  FormContent, 
  FormWrap,
  Icon,
  Form,
  FormLabel,
  FormInput,
  Text,
  Container,
  FormH1,
  FormButton,
  IconContainer,
  ErrorLogin
} from './SignInElements'
import { useAuth } from '../../useAuth.js'
import { useHistory } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginError: false,
      successfulLogin: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`/getUser?username=${this.state.email}&password=${this.state.password}`)
      .then(response => response.json())
      .then(data => this.setState({ successfulLogin: data.success, loginError: data.error }))
      .then(_ => {
        if(this.state.successfulLogin) {
          this.props.auth.signin(this.state.email);
          this.props.history.push("/");
        }
      });
      console.log("hello");
  }

  render() {
    return (
      <Container>
        <FormWrap>
          <IconContainer>
            <Icon to="/">unc aasa.</Icon>
          </IconContainer>

            { this.state.loginError  ? <ErrorLogin>Error Logging In.</ErrorLogin> : null }
            { this.state.successfulLogin || this.state.successfulLogin == null ? null : <ErrorLogin>Wrong email or password.</ErrorLogin> }
          
          <FormContent>
            <Form action="#" onSubmit={this.handleSubmit}>
              <FormH1>Sign into your account</FormH1>
              
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} name="email" required />
  
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} type="password" required />
  
              <FormButton type="submit">Continue</FormButton>
              <Text to="/signup">Don't Have An Account</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    )
  }
}

function withSignInHook(SignIn) {
  return function WrappedSignInComponent(props) {
    const auth = useAuth();
    let history = useHistory();
    return <SignIn {...props} auth={auth} history={history} />;
  }
}

export default withSignInHook(SignIn);