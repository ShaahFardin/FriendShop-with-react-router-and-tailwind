import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friendDetials = useLoaderData();
  console.log(friendDetials);
  const {name, address, email, phone, username, website} = friendDetials;
  const {city, street, suite, zipcode} = address;
  return (
    <div>
      <h1 className="text-6xl m-5 underline text-green-600">This is the friend details page </h1>
      <div className="border container mx-auto mt-20 p-20 flex items-center justify-center bg-gray-100">
        <div className="text-start border leading-8 p-8 bg-white shadow-2xl rounded-lg">
          <h1 className="text-5xl my-5">{name}</h1>
          <h2>{email}</h2>
          <h2>{phone}</h2>
          <h2>Username : {username}</h2>
          <h2>Website : {website}</h2>
          <div>
            <h1>
              Address : {city}, {street}, {suite},{zipcode}{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
