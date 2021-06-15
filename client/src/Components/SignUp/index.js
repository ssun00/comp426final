// Code styling based on https://www.youtube.com/watch?v=Nl54MJDR2p8&t=11559s

import React from 'react'
import Autofill from '../Autofill'
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
  IconContainer
} from './SignUpElements'
import { useAuth } from '../../useAuth.js'
import { useHistory } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      gradYear: 2000
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGradChange = this.handleGradChange.bind(this);
  }

  handleGradChange(event) {

    this.setState({
      gradYear: event.target.value
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const options = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password,
        gradYear: parseInt(this.state.gradYear, 10)
      })
    };
    fetch('/addUser', options)
      .then(response => response.json())
      .then(data => this.props.auth.signin(data.username))
      .then(_ => this.props.history.push("/"));
  }
  
  render() {
    return (
      <Container>
      <FormWrap>
        <IconContainer>
          <Icon to="/">unc aasa.</Icon>
        </IconContainer>
        
        <FormContent>
          <Form action="#" id="regForm" onSubmit={this.handleSubmit}>
            <FormH1>Sign Up</FormH1>

            <FormLabel htmlFor="for">Graduation Year</FormLabel>
            <Autofill id="gradYear" name="gradYear" value={this.state.gradYear} onChange={this.handleGradChange} autofillers={["2025", "2024", "2023", "2022"]} />
            
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="text" id="email" value={this.state.email} onChange={this.handleEmailChange} required />

            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} type="password" />

            <FormButton type="submit" value="Submit Form">Continue</FormButton>
            <Text to="/signin">Already Have An Account</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>  
    )
  }
}

function withSignUpHook(SignUp) {
  return function WrappedSignUpComponent(props) {
    const auth = useAuth();
    let history = useHistory();
    return <SignUp {...props} auth={auth} history={history} />;
  }
}

export default withSignUpHook(SignUp);
