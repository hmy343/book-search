import React, { useState } from 'react';
import styled from 'styled-components';
import BookList from './BookList';
import BookSearch from './BookSearch';
import Order from './Order';
import useBooks from '../hooks/useBooks';

const LiBrary = () => {
  const { searchBook } = useBooks();
  const [ text, setText ] = useState('');

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchBook(text);
    }
  }

  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <Order />
        <BookSearch />
        <input 
          type='search' 
          placeholder='도서명을 검색하세요.'
          name='query'
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text}
          className="TitleInput" 
        />
      </div>
      <ul>
        <BookList />
      </ul>
    </div>
  );
};

export default LiBrary;