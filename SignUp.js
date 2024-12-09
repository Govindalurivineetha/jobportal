import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper, Link, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const SignUp = () => {
  const [formData, setFormData] = useState({
    userType: 'jobSeeker',
    name: '',
    email: '',
    password: '',
    companyName: '',
    providerEmail: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.userType === 'jobProvider') {
      console.log('Job Provider Details:', {
        name: formData.name,
        companyName: formData.companyName,
        providerEmail: formData.providerEmail
      });
    } else {
      console.log('Job Seeker Details:', {
        name: formData.name,
        email: formData.email
      });
    }

    login({ email: formData.email });
    navigate('/profile');
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={6}
        sx={{
          mt: 10,
          p: 5,
          borderRadius: 3,
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              textAlign: 'center'
            }}
          >
            Join Us Today!
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: '#6c757d', textAlign: 'center' }}>
            Create an account to explore job opportunities or find the perfect talent for your company.
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                mb: 1,
                fontWeight: 'bold',
                color: '#495057',
                textAlign: 'center'
              }}
            >
              Are you a Job Provider or Job Seeker?
            </Typography>
            <RadioGroup
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              row
              sx={{ justifyContent: 'center', mb: 3 }}
            >
              <FormControlLabel
                value="jobSeeker"
                control={<Radio />}
                label="Job Seeker"
                sx={{ color: '#495057' }}
              />
              <FormControlLabel
                value="jobProvider"
                control={<Radio />}
                label="Job Provider"
                sx={{ color: '#495057' }}
              />
            </RadioGroup>

            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2
                }
              }}
            />

            {formData.userType === 'jobProvider' && (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2
                    }
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="providerEmail"
                  label="Contact Email (Job Provider)"
                  name="providerEmail"
                  value={formData.providerEmail}
                  onChange={handleChange}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2
                    }
                  }}
                />
              </>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 4,
                py: 1.5,
                backgroundColor: '#1976d2',
                fontWeight: 'bold',
                textTransform: 'none',
                borderRadius: 3,
                '&:hover': {
                  backgroundColor: '#155a9c',
                }
              }}
            >
              Sign Up
            </Button>
          </form>

          <Typography variant="body2" sx={{ mt: 3, color: '#495057' }}>
            Already have an account?{' '}
            <Link
              href="/signin"
              underline="hover"
              sx={{
                fontWeight: 'bold',
                color: '#1976d2'
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
