import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';

const AuthLogin = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9999/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Handle response data
      console.log(data); // For testing purposes
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Typography fontWeight="700" variant="h2" mb={1}>
        Login
      </Typography>

      <form onSubmit={handleSubmit}>
        <CustomTextField
          id="identifier"
          name="identifier"
          label="Username or Email"
          variant="outlined"
          fullWidth
          value={formData.identifier}
          onChange={handleChange}
        />{' '}
        <CustomTextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
        <Button color="primary" variant="contained" size="large" fullWidth type="submit">
          Sign In
        </Button>
      </form>

      <Typography variant="subtitle1" textAlign="center" color="textSecondary">
        Don't have an account yet? <Link to="/Register">Register</Link>
      </Typography>
    </>
  );
};

export default AuthLogin;
