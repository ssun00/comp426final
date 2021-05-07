import React from 'react'
import Autocomplete from '../Autocomplete'
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

const SignUp = () => {
  return (
    <Container>
      <FormWrap>
        <IconContainer>
          <Icon to="/">unc aasa.</Icon>
        </IconContainer>
        
        <FormContent>
          <Form action="#" id="regForm">
            <FormH1>Sign Up</FormH1>

            <FormLabel htmlFor="for">First Name</FormLabel>
            <FormInput type="text" required />

            <FormLabel htmlFor="for">Last Name</FormLabel>
            <FormInput type="text" required />

            <FormLabel htmlFor="for">Graduation Year</FormLabel>
            <Autocomplete autofillers={["2025", "2024", "2023", "2022"]} />

            <FormLabel htmlFor="for">Birthday</FormLabel>
            <FormInput type="date"/>
            
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" id="email" required />

            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" id="password" required />

            <FormButton type="submit" value="Submit Form">Continue</FormButton>
            <Text to="/signin">Already Have An Account</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

// const form = document.getElementById('regForm');
// form.addEventListener('submit', registerUser);

// async function registerUser(event) {
//   event.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;

//   const result = await fetch('/api/register', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       email, 
//       password
//     })
//   }).then((res) => res.json())
// }


export default SignUp
