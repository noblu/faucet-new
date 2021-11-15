import React from 'react';

import { Wrapper, Context, Lists } from './ListStyle';
import { ListItem } from '../ListItem/ListItem';

export const List = ({ todos }) => (
  <Wrapper>
    <Context>
      <Lists>
        {todos.map(todo => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </Lists>
    </Context>
  </Wrapper>
);
