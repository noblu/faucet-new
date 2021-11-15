import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #333;
`;

export const Title = styled.h1``;
export const Context = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
color: rgba(160, 156, 156)
border-radius: 5px;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(226, 223, 223);
  border-radius: 5px;
  min-width: 660px;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

export const Span = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weigth: 100;
  color: black;
`;
