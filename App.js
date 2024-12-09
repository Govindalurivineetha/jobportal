import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ProfileCreation from './Components/ProfileCreation';
import Dashboard from './Components/Dashboard';
import JobRecommendations from './Components/JobRecommendations';
import AIBasedMatching from './Components/AIBasedMatching';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfileCreation />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<JobRecommendations />} />
          <Route path="/ai-match" element={<AIBasedMatching />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
