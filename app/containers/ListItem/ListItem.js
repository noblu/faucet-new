import React from 'react';

import { Wrapper } from './ListItemStyle';

export const ListItem = ({ todo }) => {
  const { id, title } = todo;
  return <Wrapper>{title}</Wrapper>;
};
