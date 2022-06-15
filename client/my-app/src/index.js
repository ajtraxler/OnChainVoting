import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Login from './pages/login';
import Tokens from './pages/tokens';
import Elections from './pages/elections';
import AddElection from './pages/addElection';
import Candidates from './pages/candidates';
import Candidate from './pages/candidate';
import AddCandidate from './pages/addCandidate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="tokens" element={<Tokens />} />
      <Route path="elections" element={<Elections />} />
      <Route path="addElection" element={<AddElection />} />
      <Route path="Candidates" element={<Candidates />} />
      <Route path="Candidate" element={<Candidate />} />
      <Route path="addCandidate" element={<AddCandidate />} />
    </Routes>  
  </BrowserRouter>
);

