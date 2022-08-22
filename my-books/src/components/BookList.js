import React from 'react';
import styled from 'styled-components';
import useBooks from '../hooks/useBooks';
import useActions from '../hooks/useActions';
import { MdShoppingCart } from "react-icons/md";
import '../css0/BookList.css'

const BookList = () => {
  const { books } = useBooks();
  const { addToOrder } = useActions();
  
  return (
    <div>
      {books.map((book) => {
        const { isbn, thumbnail, title, price, sale_price, publisher, url } =
          book;
        const click = () => {
          addToOrder(isbn);
        };
          
        return (
          <div key={isbn} className='bookList'>
            {/* 책 이미지 */}
            <div className='bookImg'>
              <a href={url} target='_blank' rel='noreferrer'>
                <img src={thumbnail} alt={thumbnail} />
              </a>
            </div>

            {/* 북 정보 */}
            <div className='bookContents'>
              <div className='bookPublisher'>{publisher}</div>
              <div className='bookTitle'>{title}</div>

              <div className='bookPrice'>
                가격 {sale_price.toLocaleString()}
                <span>{price.toLocaleString()}</span>
              </div>

              {/* CART아이콘 */}
              <div> 
                <MdShoppingCart />
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};


export default BookList;