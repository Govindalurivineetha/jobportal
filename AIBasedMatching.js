import React, { useState } from 'react';
import { Typography, Box, List, ListItem, ListItemText, Container, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';

const AIBasedMatching = () => {
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [userSkills, setUserSkills] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleFetchJobs = async () => {
    try {
      const response = await axios.post('/api/ai-match', {
        skills: userSkills.split(',').map(skill => skill.trim()),
      });
      setRecommendedJobs(response.data.jobs);
      setOpenDialog(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <Container>
      <Box sx={{ mt: 8 }}>
        <Typography component="h1" variant="h4">AI-Based Job Matching</Typography>
        
        <Button variant="contained" onClick={() => setOpenDialog(true)}>Get Job Recommendations</Button>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Enter Your Skills</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Skills (comma separated)"
              type="text"
              fullWidth
              value={userSkills}
              onChange={(e) => setUserSkills(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">Cancel</Button>
            <Button onClick={handleFetchJobs} color="primary">Fetch Jobs</Button>
          </DialogActions>
        </Dialog>

        <List>
          {recommendedJobs.length > 0 ? (
            recommendedJobs.map((job, index) => (
              <ListItem key={index}>
                <ListItemText primary={job.title} secondary={job.company} />
              </ListItem>
            ))
          ) : (
            <Typography>No AI-based job recommendations available.</Typography>
          )}
        </List>
      </Box>
    </Container>
  );
};

export default AIBasedMatching;