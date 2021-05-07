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
  IconContainer
} from './SignInElements'

const SignIn = () => {
  return (
    <Container>
      <FormWrap>
        <IconContainer>
          <Icon to="/">unc aasa.</Icon>
        </IconContainer>
        
        <FormContent>
          <Form action="#">
            <FormH1>Sign into your account</FormH1>
            
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />

            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />

            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
            <Text to="/signup">Don't Have An Account</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default SignIn
