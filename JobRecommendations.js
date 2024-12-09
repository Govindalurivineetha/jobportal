import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  Container, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogTitle, 
  TextField, 
  RadioGroup, 
  FormControlLabel, 
  Radio 
} from '@mui/material';

const JobRecommendations = () => {
  const jobs = [
    { 
      title: 'Software Engineer', 
      company: 'Google', 
      description: 'Need a software Engineer who can work efficiently.',
      salaryRange: '₹10,00,000 - ₹12,50,000'
    },
    { 
      title: 'Frontend Developer', 
      company: 'Meta', 
      description: 'Need a frontend Developer who knows React.',
      salaryRange: '₹9,00,000 - ₹11,00,000'
    },
    { 
      title: 'Backend Developer', 
      company: 'Amazon', 
      description: 'Need a Backend Developer who knows Express.',
      salaryRange: '₹9,50,000 - ₹12,00,000'
    },
    {
      title: 'Data Scientist',
      company: 'IBM',
      description: 'Looking for a data scientist proficient in Python and machine learning.',
      salaryRange: '₹12,00,000 - ₹15,00,000',
    },
    {
      title: 'Full Stack Developer',
      company: 'Microsoft',
      description: 'Experienced in building scalable web applications using MERN stack.',
      salaryRange: '₹11,00,000 - ₹14,50,000',
    },
    {
      title: 'DevOps Engineer',
      company: 'Netflix',
      description: 'Seeking a DevOps engineer familiar with CI/CD pipelines and cloud platforms.',
      salaryRange: '₹10,00,000 - ₹13,50,000',
    },
    {
      title: 'UI/UX Designer',
      company: 'Adobe',
      description: 'Creative UI/UX designer with a strong portfolio and design tool expertise.',
      salaryRange: '₹8,00,000 - ₹10,50,000',
    },
    {
      title: 'Product Manager',
      company: 'Apple',
      description: 'Seeking a product manager with experience in agile methodologies.',
      salaryRange: '₹14,00,000 - ₹18,00,000',
    },
    {
      title: 'Cloud Solutions Architect',
      company: 'Oracle',
      description: 'Expert in designing and deploying cloud solutions using Oracle Cloud.',
      salaryRange: '₹16,00,000 - ₹20,00,000',
    },
    {
      title: 'Cybersecurity Analyst',
      company: 'Cisco',
      description: 'Security professional skilled in penetration testing and risk analysis.',
      salaryRange: '₹11,00,000 - ₹14,00,000',
    },
    {
      title: 'Game Developer',
      company: 'Unity Technologies',
      description: 'Talented game developer proficient in Unity and C#.',
      salaryRange: '₹9,00,000 - ₹12,00,000',
    },
    {
      title: 'AI/ML Engineer',
      company: 'Tesla',
      description: 'AI/ML engineer for projects in autonomous systems and optimization.',
      salaryRange: '₹15,00,000 - ₹18,00,000',
    },
    {
      title: 'Blockchain Developer',
      company: 'Binance',
      description: 'Blockchain developer with experience in Solidity and smart contract development.',
      salaryRange: '₹12,50,000 - ₹16,00,000',
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeOption, setResumeOption] = useState('upload');
  const [successMessage, setSuccessMessage] = useState('');
  const [applicationDetails, setApplicationDetails] = useState({
    description: '',
    resume: null,
    createdResume: {
      name: '',
      education: '',
      experience: '',
      skills: ''
    }
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
  };

  const handleFileChange = (e) => {
    setApplicationDetails({
      ...applicationDetails,
      resume: e.target.files[0]
    });
  };

  const handleDescriptionChange = (e) => {
    setApplicationDetails({
      ...applicationDetails,
      description: e.target.value
    });
  };

  const handleResumeOptionChange = (e) => {
    setResumeOption(e.target.value);
  };

  const handleCreatedResumeChange = (e) => {
    setApplicationDetails({
      ...applicationDetails,
      createdResume: {
        ...applicationDetails.createdResume,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmitApplication = () => {
    setOpenDialog(false);
    setSuccessMessage(`Successfully applied for the ${selectedJob.title} position at ${selectedJob.company}!`);
    setApplicationDetails({
      description: '',
      resume: null,
      createdResume: {
        name: '',
        education: '',
        experience: '',
        skills: ''
      }
    });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 8 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Job Recommendations
        </Typography>

        <Grid container spacing={4}>
          {jobs.map((job, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {job.title} at {job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {job.description}
                  </Typography>
                  <Typography variant="body1" color="primary" gutterBottom>
                    Salary: {job.salaryRange}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'right', p: 2 }}>
                  <Button variant="contained" color="primary" onClick={() => handleApplyClick(job)}>
                    Apply Now
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Apply for {selectedJob?.title} at {selectedJob?.company}</DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              fullWidth
              label="Why should we consider you?"
              multiline
              rows={4}
              value={applicationDetails.description}
              onChange={handleDescriptionChange}
            />
            
            <Typography variant="h6" sx={{ mt: 2 }}>Resume Options</Typography>
            <RadioGroup value={resumeOption} onChange={handleResumeOptionChange}>
              <FormControlLabel value="upload" control={<Radio />} label="Upload Resume/CV" />
              <FormControlLabel value="create" control={<Radio />} label="Create Resume" />
            </RadioGroup>

            {resumeOption === 'upload' ? (
              <>
                <Button
                  variant="contained"
                  component="label"
                  sx={{ mt: 2 }}
                >
                  Upload Resume/CV
                  <input type="file" hidden onChange={handleFileChange} />
                </Button>
                {applicationDetails.resume && (
                  <Typography sx={{ mt: 1 }}>Selected file: {applicationDetails.resume.name}</Typography>
                )}
              </>
            ) : (
              <>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Name"
                  name="name"
                  value={applicationDetails.createdResume.name}
                  onChange={handleCreatedResumeChange}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Education"
                  name="education"
                  value={applicationDetails.createdResume.education}
                  onChange={handleCreatedResumeChange}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Experience"
                  name="experience"
                  value={applicationDetails.createdResume.experience}
                  onChange={handleCreatedResumeChange}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  label="Skills"
                  name="skills"
                  value={applicationDetails.createdResume.skills}
                  onChange={handleCreatedResumeChange}
                />
              </>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} color="secondary">Cancel</Button>
            <Button onClick={handleSubmitApplication} color="primary">Submit Application</Button>
          </DialogActions>
        </Dialog>

        {successMessage && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" color="success.main">
              {successMessage}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default JobRecommendations;
