import React, { useState } from 'react';

// import { v4 as uuidv4 } from 'uuid';
import { FaBath } from 'react-icons/fa';
import { MdRssFeed } from 'react-icons/md';
import { ImDatabase } from 'react-icons/im';
import { RiHeartPulseFill } from 'react-icons/ri';
import { BsBank2 } from 'react-icons/bs';

import { Wrapper, Context, Filter, Title, Span, FilterItem } from './AppStyle';

import { Form } from '../Form/Form';
import { List } from '../List/List';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  console.log(todos);
  const [cmc, setCmc] = useState(false);
  const handleInput = e => {
    setTitle(e.target.value);
  };

  const handleSelect = e => {
    setCmc(e.target.value);
  };
  const getDetailMerc = async address =>
    await fetch(
      `http://us-central1-ftxtoken.cloudfunctions.net/fauceCMC?address=${address}`,
    )
      .then(res => res.text())
      .catch(err => console.log(err));

  const handleSubmit = async e => {
    e.preventDefault();
    if (title === '') {
      setTodos([...todos]);
      alert('nhap gia tri');
      setCmc(true);
    } else {
      if (title.length !== 42) {
        alert('err');
        return;
      }
      const respon = JSON.parse(await getDetailMerc(title));
      if (respon.message === 'OK') {
        alert('OK');
      }
      // const singTodo = { id: uuidv4(), title };
      // setTodos([singTodo,...todos])
      // setTitle('')
    }
  };

  const styles = {
    marginRight: '5px',
  };

  return (
    <Wrapper>
      <Context>
        <FaBath size={30} style={styles} />
        <Title>CMC Chain Faucet</Title>
      </Context>
      <Form
        title={title}
        cmc={cmc}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
      />
      <List todos={todos} />
      <Filter>
        <FilterItem>
          <MdRssFeed style={styles} />
          <Span>1 Feer</Span>
        </FilterItem>
        <FilterItem>
          <ImDatabase style={styles} />
          <Span>0 blocks</Span>
        </FilterItem>
        <FilterItem>
          <RiHeartPulseFill style={styles} />
          <Span>0 CMC</Span>
        </FilterItem>
        <FilterItem>
          <BsBank2 style={styles} />
          <Span>0 funded</Span>
        </FilterItem>
      </Filter>
    </Wrapper>
  );
}
