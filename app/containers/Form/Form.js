import React from 'react';
import Proptype from 'prop-types';
import { Context, Input, Select, Option, Wrapper, Button } from './FormStyle';
export const Form = ({ title, handleInput, handleSelect, handleSubmit }) => (
  <Wrapper>
    <Context onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        name="title"
        placeholder="Input your CMC Chain address.."
        onChange={handleInput}
      />
      <Button type="submit">
        <Select onChange={handleSelect}>
          <label>Give me CMC</label>
          <Option>1 CMC</Option>
        </Select>
      </Button>
    </Context>
  </Wrapper>
);

Form.propTypes = {
  title: Proptype.string,
  handleInput: Proptype.func,
  handleSelect: Proptype.func,
  handleSubmit: Proptype.func,
};
