import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.secondary ? '#ffffff' : '#ffffff'};
  background-color: ${props => props.secondary ? '#0F5D7F' : '#d52332'};
  padding: 0.8em 5em;
  font-size: 0.9em;
  font-weight: 200;
  cursor: pointer;
  margin-top: 20px;
  `

export default Button;
