import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';

export const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
  &:hover {
    color: #f06292;
    transition: 0.2s ease-in-out;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Wrapper = styled.div`
  color: white;
`;

export const Link = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;

  &:hover {
    color: #f06292;
    transition: 0.2s ease-in-out;
  }
`;

export const HiddenLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  padding: 20px 20px;

  &:hover {
    color: #f06292;
    transition: 0.2s ease-in-out;
  }
`

export const SideBtnWrap = styled(LinkR)`
  display: flex;
  justify-content: center;
  border-radius: 50px;
  background: pink;

  padding: 20px 20px;
  color: black;
  font-size: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;
  transitions: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f06292;
    color: black;
  }
`;

export const Route = styled(LinkR)`
  border-radius: 50px;
  background: pink;
  white-space: nowrap;
  padding: 16px 64px;
  color: black;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transitions: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f06292;
    color: black;
  }
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;