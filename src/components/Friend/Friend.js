import React from "react";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, username, email } = friend;
  return (
    <div className="border p-5 py-10 text-start  bg-gray-100 ">
      <h1 className="text-2xl">{name}</h1>
      <p>Username : {username}</p>
      <p>Email : {email}</p>
      <Link to= {`/friend/${id}`}>
        <button className="border px-5 py-1 bg-slate-800 text-white mt-4">
          Details
        </button>
      </Link>
    </div>
  );
};

export default Friend;
