import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './EmailOptionForm';
import "./App.css"
import Cart from './Cart';
import SecondApp from './SecondApp';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/commerce-react" element={<RegistrationForm />} />
      <Route path="/index2/" element={<SecondApp />} />
      </Routes>
    </Router>
  );
}

export default App;