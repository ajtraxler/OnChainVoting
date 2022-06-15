import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
 {/* the id routes may need to be changed... 
 I'm not 100% sure about them yet. Maybe we can 
 talk about this as a group and work out the logic */}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="tokens/:userId" element={<Tokens />} />
      <Route path="elections/:tokenId" element={<Elections />} />
      <Route path="addElection/:tokenId" element={<AddElection />} />
      <Route path="candidates/:electionId" element={<Candidates />} />
      <Route path="candidate/:candidateId" element={<Candidate />} />
      <Route path="addCandidate/:electionId" element={<AddCandidate />} />
    </Routes>  
  </BrowserRouter>
);

