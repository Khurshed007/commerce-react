import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import React from 'react';

function Header(props) {

      
     let [EditActive, EditSet, counter] = [props.EditActive, props.EditSet, props.counter];
     let {OrderActive, setOrderActive, setDisplayisCheck,setSelectedCategory, selectedCategory, setSwitchclass,setActiveSecondary} = props

     const [isHamburgerActive, setHamburgerActive] = useState(false);
     const [isNavMenuActive, setNavMenuActive] = useState(false);
     const userRole = localStorage.getItem('userRole');
     const fullName = localStorage.getItem('fullName');
     const sex = localStorage.getItem('sex');
     const [greeting, setGreeting] = useState('');
 
     let edit = () => {
     EditSet((prev) => prev = !EditActive)
     setNavMenuActive(!isNavMenuActive);
     setHamburgerActive(!isHamburgerActive);
    
   }

   let orderActive = () => {
       setOrderActive((prev) => prev = !OrderActive)
   }


     const [isCategoryVisible, setCategoryVisible] = useState(false);
     let nav = useNavigate()
     const toggleCategory = () => {
          setCategoryVisible(!isCategoryVisible);
        };
        const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setIsLightTheme(true);
    }
  }, []);

  useEffect(() => {
    if (isLightTheme) {
      document.body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light');
      localStorage.setItem('theme', '');
    }
  }, [isLightTheme]);
  useEffect(() => {
     if (sex === 'Man') {
       setGreeting(`Herr ${fullName.split(' ')[1]}`);
     } else if (sex === 'Woman') {
       setGreeting(`Frau ${fullName.split(' ')[1]}`);
     } else {
       setGreeting('Добро пожаловать');
     }
   }, [sex, fullName]);

   const toggleHamburger = () => {
     setHamburgerActive(!isHamburgerActive);
     setNavMenuActive(!isNavMenuActive);
   };
  let log = () => {
     props.set(false)
     setActiveSecondary(0)
     displayChecked()
  }
  function displayChecked() {
    setDisplayisCheck((prev) => prev = false)

 }

 const handleCategoryChange = (category) => {
  setSwitchclass((prevState) => prevState = true);
  setNavMenuActive(!isNavMenuActive);
  setHamburgerActive(!isHamburgerActive);
  EditSet((prev) => prev = !EditActive)
  setSelectedCategory(category);
};

  return (
    <nav>
      <div className="logo" onClick={log}>
        <h3><span>S</span>HOPY</h3>
      </div>
      <div className="greeting mobile-none">
        <p>Hello {greeting}</p>
      </div>

      <div className="check">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className={`label mobile-none ${isLightTheme ? 'light' : ''}`} onClick={toggleTheme}>
          <i className="bx bx-moon"></i>
          <i className="bx bx-sun"></i>
          <span className={`ball ${isLightTheme ? 'light' : ''}`} onClick={toggleTheme}></span>
        </label>
        <ul className="menu mobile-none">
          <li className="change" onClick={edit}><i className="fas fa-pencil-alt"></i></li>
        </ul>
        <div className="cart mobile-none" onClick={orderActive}>
          <span className="count">{counter}</span>
          <i className="fas fa-shopping-cart"></i>
        </div>

        <div className="exit mobile-none" onClick={() => nav(-1)}><i className="fas fa-sign-out-alt"></i></div>
        <div
        className={`hamburger ${isHamburgerActive ? 'active' : ''}`}
        onClick={toggleHamburger}
      >
          <span className="strike_1"></span>
          <span className="strike_2"></span>
          <span className="strike_3"></span>
        </div>
      </div>
      <div className={`nav-ul_menu ${isNavMenuActive ? 'active' : ''}`}>
        <div className="menu-block no-border">
          <div className="greeting">
          <p>Hello {greeting}</p>
          </div>
        </div>
        <div className="menu-block">
          <div className="search-container">
            <div className="search-content">
              <span><i className="fas fa-search"></i></span>
              <input type="text" className="elastic" placeholder="Search for anything" />
            </div>
            <button className="v-btn">Search</button>
          </div>
        </div>
        <div className="menu-block">
          <p className="change" onClick={edit}>Change</p>
        </div>
        <div className="menu-block">
          <div className="exit" onClick={() => nav(-1)}>Exit</div>
        </div>
        <div className="menu-block">
          <input type="checkbox" className="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="label">
            <i className="bx bx-moon"></i>
            <i className="bx bx-sun"></i>
            <span className={`ball ${isLightTheme ? 'light' : ''}`} onClick={toggleTheme}></span>
          </label>
        </div>
        <div className="menu-block">
          <div className="accordion-category">
            <div className="acc_item">
            <span className={`accordion-button ${isCategoryVisible ? 'active' : ''}`} onClick={toggleCategory}>
            Categorys
          </span>
  
            </div>
            <div className={`accordion-content ${isCategoryVisible ? 'active' : ''}`} id="category">
              <div className="acc_item">
              <div className="item_category" data-category="all" onClick={() => handleCategoryChange('all')}>All</div>
              </div>
              <div className="acc_item">
              <div className="item_category" data-category="Jeans" onClick={() => handleCategoryChange('Jeans')}>Jeans</div>
              </div>
              <div className="acc_item">
              <div className="item_category" data-category="Jackets" onClick={() => handleCategoryChange('Jackets')}>Jackets</div>
              </div>
              <div className="acc_item">
              <div className="item_category" data-category="Sneakers" onClick={() => handleCategoryChange('Sneakers')}>Sneakers</div>
              </div>
              <div className="acc_item">
              <div className="item_category" data-category="Shirts" onClick={() => handleCategoryChange('Shirts')}>Shirts</div>
              </div>
              <div className="acc_item">
              <div className="item_category" data-category="Seafood" onClick={() => handleCategoryChange('Pullover')}>Pullover</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;