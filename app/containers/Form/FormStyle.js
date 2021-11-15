import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 5px;
  min-width: 700px;
  min-height: 40px;
`;

export const Select = styled.select`
  height: 40px;
  width: 100px;
  border-radius: 5px;
  background-color: transparent;
  text-align: center;
  color: rgb(63, 62, 62);
  outline: none;
  cursor: pointer;
`;
export const Option = styled.option`
  font-family: 'Montserrat', sans-serif;
  color: rgb(146, 141, 141);
  height: 40px;
`;

export const Input = styled.input`
  height: 40px;
  min-width: 550px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid grey;
  outline: none;
`;

export const Button = styled.button`
  border: transparent;
`;
export const Context = styled.form``;
