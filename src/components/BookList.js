import React, { useState, useEffect } from 'react';
import useBooks from '../hooks/useBooks';
import useActions from '../hooks/useActions';
import { MdShoppingCart } from "react-icons/md";
import '../css/BookList.scss';
import defaultImage from '../assets/no-picture.jpg';
import { Link } from 'react-router-dom';

const BookList = () => {

  const { books } = useBooks();
  const { addToOrder, onModal, updateToggle, setUpdateToggle } = useActions();

  return (
    <div className='book-list-wrap'>
      {books?.documents?.map((book) => {
        const click = () => {
          addToOrder(book);
        };

        return (
          <div className='info-wrap' key={book.title}>
            {/* 책 이미지 */}
            <div>
              {/* 책 이미지 클릭 시, 해당 책의 상세 페이지 이동 */}
              <Link to='book-detail' state={book}>
                <img src={book.thumbnail ? book.thumbnail : defaultImage} alt={book.thumbnail} />
              </Link>
            </div>

            {/* 북 정보 */}
            <div className='book-info'>
              <div className='text-of'><b>제목</b> {book.title}</div>
              <div>
                <span>정상가 {book.price.toLocaleString()} </span>  <br />
                <b>할인가</b> {book.sale_price.toLocaleString()}
              </div>
              {/* CART아이콘 */}
              <div className='cart-icon'>
                <MdShoppingCart onClick={() => {
                  click()
                  onModal(true)
                }} size="22" />
              </div>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default BookList;