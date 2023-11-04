// src/routes/Login.tsx
import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here.
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    redirect('/dashboard');
  }

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};
