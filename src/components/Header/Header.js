import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Header = () => {
    return (
      <div className="flex justify-between p-5 bg-sky-900 text-white ">
        <div className="mx-16 text-3xl font-semibold">
          <h1>FriendShop</h1>
        </div>
        <div className="menu mx-16 text-xl">
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