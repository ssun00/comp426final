import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const Container = styled.div`
  background: #f0e4d7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f0e4d7;
`;

export const Content = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  color: black;
  font-size: 48px;
  text-align: center;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const BtnWrapper = styled(LinkR)`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Btn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none
  }
`;

export const BtnLink = styled(LinkR)`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: pink;
    color: black;
  }
`;