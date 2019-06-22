import React from 'react';

const NavBar = () => (
  <nav className="m-4">
    <ul className="list-group d-flex flex-row justify-content-around">
      <li className="list-group-item active">About</li>
      <li className="list-group-item">Home</li>
      <li className="list-group-item">Profile</li>
      <li className="list-group-item">Contact Us</li>
      <li className="list-group-item">Maps</li>
    </ul>
  </nav>
);

export default NavBar;
