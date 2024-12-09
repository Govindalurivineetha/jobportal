import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, InputLabel, MenuItem, Select, Grid, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useAuth } from '../Context/AuthContext';  // Import useAuth hook

const ProfileCreation = () => {
  const { user } = useAuth();  // Get current user from context
  const [profileData, setProfileData] = useState({
    bio: '',
    skills: '',
    location: '',
    photo: '',
    college: '',
    graduationYear: '',
    qualifications: '',
    experienceType: 'fresher',
    yearsOfExperience: '',
    company: '',
    school: '',
    plusTwoDetails: { marks: '', percentage: '' },
  });

  const navigate = useNavigate();

  useEffect(() => {
    // If user is logged in and their role is job-provider, redirect them
    if (user && user.role === 'job-provider') {
      navigate('/post-job');  // Redirect to post job page (adjust route as needed)
    }
  }, [user, navigate]);  // Depend on user changes to redirect

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "marks" || name === "percentage") {
      setProfileData({
        ...profileData,
        plusTwoDetails: {
          ...profileData.plusTwoDetails,
          [name]: value,
        }
      });
    } else {
      setProfileData({ ...profileData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setProfileData({ ...profileData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save profile data logic (e.g., API call or localStorage)
    console.log(profileData);
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          mt: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          bgcolor: 'background.paper', 
          p: 4, 
          borderRadius: 2, 
          boxShadow: 3 
        }}
      >
        <Typography component="h1" variant="h4" gutterBottom>
          Create Your Profile
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            {/* Bio */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                variant="outlined"
                multiline
                minRows={1}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Skills */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="skills"
                label="Skills"
                name="skills"
                value={profileData.skills}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Location */}
            <Grid item xs={12} md={6}>
              <TextField
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Profile Photo Upload */}
            <Grid item xs={12}>
              <InputLabel sx={{ mb: 1 }}>Upload Profile Photo</InputLabel>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ width: 64, height: 64, mr: 2 }} />
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<UploadFileIcon />}
                >
                  Upload Photo
                  <input
                    accept="image/*"
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </Button>
              </Box>
            </Grid>

            {/* College */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="college"
                label="College"
                name="college"
                value={profileData.college}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Graduation Year */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="graduationYear"
                label="Graduation Year"
                name="graduationYear"
                value={profileData.graduationYear}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Qualifications */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="qualifications"
                label="Qualifications"
                name="qualifications"
                value={profileData.qualifications}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Experience Type */}
            <Grid item xs={12}>
              <InputLabel>Experience Type</InputLabel>
              <Select
                fullWidth
                name="experienceType"
                value={profileData.experienceType}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="fresher">Fresher</MenuItem>
                <MenuItem value="experienced">Experienced</MenuItem>
              </Select>
            </Grid>

            {/* Conditional Fields for Experienced */}
            {profileData.experienceType === 'experienced' && (
              <>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id="yearsOfExperience"
                    label="Years of Experience"
                    name="yearsOfExperience"
                    value={profileData.yearsOfExperience}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id="company"
                    label="Company"
                    name="company"
                    value={profileData.company}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
              </>
            )}

            {/* School */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="school"
                label="School"
                name="school"
                value={profileData.school}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* +2 Marks and Percentage */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="marks"
                label="12th Marks"
                name="marks"
                value={profileData.plusTwoDetails.marks}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="percentage"
                label="12th Percentage"
                name="percentage"
                value={profileData.plusTwoDetails.percentage}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, py: 1.5 }}
              >
                Save Profile
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default ProfileCreation;
