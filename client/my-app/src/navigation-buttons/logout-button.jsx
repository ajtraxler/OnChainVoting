import { Link } from "react-router-dom";
import React from 'react';

export default function LogoutButton() {
  return (
    <div>
        <Link to="/">Logout</Link>
    </div>
  );
}