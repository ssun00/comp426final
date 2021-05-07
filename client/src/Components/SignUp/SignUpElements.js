import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  min-height: 1100px;
  position: flex;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #F0E4D7;
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Icon = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: white;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 50px 50px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 25px 25px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: black;
  font-size: 20px;
  font-weight: 700;
  text-align: center
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: black;
  font-weight: 400;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: black;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    color: black;
    background: pink;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

export const Text = styled(Link)`
  text-align: center;
  margin-top: 24px;
  color: black;
  font-size: 14px;
`;