import React from 'react';
import BookList from '../components/BookList';
import Header from '../components/Header';
import LiBrary from '../components/LiBrary';
import Order from '../components/Order'
import TitleImg from '../components/TitleImg';
// import '../css/MainPage.scss'
import '../css0/MainPage.css'


const MainPage = () => {
  return (
    <div>
    
    <Header />
    <TitleImg />
    
      <div>
        <LiBrary>
          <BookList />
        </LiBrary>
      </div>

    </div>
  );
};

export default MainPage;