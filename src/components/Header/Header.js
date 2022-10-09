import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Header = () => {
    return (
      <div className="flex justify-between p-5 bg-sky-900 text-white text-xl">
        <div className='mx-16'>
            <h1>FriendShop</h1>
        </div>
        <div className='menu mx-16'>
          <Link to="/home">Home</Link>
          <Link to="/friends">Friends</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
};

export default Header;