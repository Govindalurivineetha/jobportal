import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Container, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import WorkIcon from '@mui/icons-material/Work';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useAuth } from '../Context/AuthContext'; // Import your Auth Context

const Dashboard = () => {
  const { user } = useAuth(); // Fetch user details from context
  const isJobProvider = user?.userType === 'jobProvider'; // Check if the user is a job provider

  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography component="h1" variant="h3" align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
          Welcome to Your Dashboard
        </Typography>

        <Grid container spacing={4}>
          {isJobProvider ? (
            <>
              {/* Job Posting Card (Visible to Job Providers only) */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <PostAddIcon sx={{ fontSize: 50, color: '#1976d2' }} />
                    <Typography variant="h5" sx={{ mt: 2 }}>Post a Job</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Create new job postings to find the right talent.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" component={Link} to="/post-job" fullWidth>
                      Post a Job
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          ) : (
            <>
              {/* Job Seeker Cards */}
              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <EditIcon sx={{ fontSize: 50, color: '#1976d2' }} />
                    <Typography variant="h5" sx={{ mt: 2 }}>Edit Profile</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Update your personal information and skills.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" component={Link} to="/profile" fullWidth>
                      Go to Profile
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <WorkIcon sx={{ fontSize: 50, color: '#388e3c' }} />
                    <Typography variant="h5" sx={{ mt: 2 }}>Job Recommendations</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Explore job opportunities based on your profile.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" component={Link} to="/jobs" fullWidth>
                      View Jobs
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <AutoAwesomeIcon sx={{ fontSize: 50, color: '#fbc02d' }} />
                    <Typography variant="h5" sx={{ mt: 2 }}>AI-Based Matching</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      Get personalized job matches with AI algorithms.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" component={Link} to="/ai-match" fullWidth>
                      Find AI Matches
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
