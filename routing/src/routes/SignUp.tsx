// src/routes/Signup.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Perform form submission logic here
    // Redirect to the "Welcome" page after a successful submission.
    navigate('/welcome');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
