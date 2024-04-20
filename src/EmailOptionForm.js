import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [option, setOption] = useState('Admin');
  const [sex, setSex] = useState('Man');
  const [validationMessage, setValidationMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const validateEmailOption = (e) => {
    e.preventDefault(); 
  
      localStorage.setItem('userRole', option);
      localStorage.setItem('fullName', `${firstName} ${lastName}`);
      localStorage.setItem('sex', sex);
      navigate('/index2');
    
  };

  const isVisible = location.pathname !== '/index2';
 console.log(isVisible)
  return (
    <div>
      {isVisible && (
        <div className='form-wrapper'>
          <form onSubmit={validateEmailOption} className='styled-form'>
            <label htmlFor="email">Электронная почта:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="first-name">Имя:</label>
            <input
              type="text"
              id="first-name"
              className="input-field"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <br />
            <label htmlFor="last-name">Фамилия:</label>
            <input
              type="text"
              id="last-name"
              className="input-field"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <br />
            <label htmlFor="option">Опция:</label>
            <select
              id="option"
              name="option"
              className="input-field"
              value={option}
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </select>
            <br />
            <label htmlFor="sex">Пол:</label>
            <select
              id="sex"
              name="sex"
              className="input-field"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
            </select>
            <input type="submit" value="Проверить" className="submit-button" />
          </form>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;