import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// useAuth hook to access AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function that sets the user data (including their role)
  const login = (userData) => {
    setUser(userData);  // Store user data with role (job-provider/job-seeker)
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
