import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Link, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email: formData.email });
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={6} sx={{ mt: 8, p: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Sign In
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              sx={{ borderRadius: 1, '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              sx={{ borderRadius: 1, '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 1.5,
                backgroundColor: '#1976d2',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#155a9c',
                },
                borderRadius: 2,
              }}
            >
              Sign In
            </Button>
          </form>

          <Typography variant="body2" sx={{ mt: 2 }}>
            Don’t have an account?{' '}
            <Link href="/signup" underline="hover" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignIn;
