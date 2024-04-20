import React, { useState, useEffect, createRef } from 'react';
import Goods from './Goods';
import MainCarousel from './MainCarousel';
import ReactPaginate from 'react-paginate';


function SidebarCarousel(props){
  const { classAct: switchClass, set: setSwitchclass, displayisCheck, setDisplayisCheck, displayIndex, 
  setDisplayIndex, setSelectedCategory, selectedCategory,setImage} = props;
  const [itemLength, setItemLength] = useState(0); //
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sexCategory, setSexCategory] = useState('both');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    setItemLength(document.querySelectorAll(".newdiv").length);
  }, []);

  let myRef = createRef()
  let inputRef = createRef()


  const handleSexChange = (event) => {
    setSexCategory(event.target.value);
    setSwitchclass((prevState) => prevState = true);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, sexCategory,searchQuery]); 

  const handleCategoryChange = (category) => {
    setSwitchclass((prevState) => prevState = true);
    
    setSelectedCategory(category);
  };
  const handleSearchChange = (event) => {
    setSearchQuery(inputRef.current.value);
    setSwitchclass((prevState) => prevState = true);
  };

  const filterProducts = () => {
    const filteredProducts = props.products.filter((product) => {
      return (
        (selectedCategory === 'all' || selectedCategory === product.category) &&
        (sexCategory === 'both' || sexCategory === product.sex) &&
        (searchQuery === '' || product.title.toLowerCase().includes(searchQuery))
      );
    });
    setFilteredProducts(filteredProducts);
  };

  function displayChecked(index,e) {
    
    setDisplayisCheck((prev) => prev = true)

     setDisplayIndex((prev) => prev = index)
 }

 let newDiv = document.querySelectorAll(".newdiv");

 const handlePageClick = (event) => {
 
  newDiv.forEach((item, index) => {
    if (event.selected === 0 && index === 0) {
        item.style.left = "0px";
        item.style.display = "flex"
    } else {
        item.style.left = -10 * newDiv[0].clientWidth + "px";
        item.style.display = "none"
    }
});
      newDiv[event.selected].style.left = 0 + "px";
      newDiv[event.selected].style.display = "flex"
 console.log(event.selected + "asdasd")
};


let gooditems = 8
   return(
    <>
<div className="search-container mobile-none">
  <div className="search-content">
    <span><i className="fas fa-search"></i></span>
    <input
      type="text"
      className="elastic"
      placeholder="Search for anything"
      ref={inputRef}
  
    />
  </div>
  <button className="v-btn" onClick={handleSearchChange}>Search</button>
</div>
  
   <div className="sidebar-carousel-wrapper">
  <div className= {`sidebar-carousel-category ${switchClass ? "active" : ""}`}>
    <div className= {`sidebar mobile-none ${switchClass ? "active" : ""}`}>
      <div className="sidebar-title">
        <h2>Categories</h2>
      </div>
      <div className={`category`}>
          <div className="item_category" data-category="all" onClick={() => handleCategoryChange('all')}>All</div>
          <div className="item_category" data-category="Sneakers" onClick={() => handleCategoryChange('Sneakers')}>Sneakers</div>
          <div className="item_category" data-category="Jeans" onClick={() => handleCategoryChange('Jeans')}>Jeans</div>
          <div className="item_category" data-category="Shirts" onClick={() => handleCategoryChange('Shirts')}>Shirts</div>
          <div className="item_category" data-category="Jackets" onClick={() => handleCategoryChange('Jackets')}>Jackets</div>
          <div className="item_category" data-category="Pullover" onClick={() => handleCategoryChange('Pullover')}>Pullover</div>
      <div className="option_preference">
  <select name="" id="sex_option" onChange={handleSexChange}>
  <option value="both">both</option>
  <option value="man">man</option>
  <option value="woman">woman</option>
</select>
        </div>
      </div>
    </div>
    <MainCarousel classActive = {switchClass}/>
  
  </div>
  <div className={`finded-content ${switchClass ? "active" : ""}` } ref={myRef}>
{filteredProducts.map((items, index) => ( 
  <div key={index} className="finded-content-box"  data-category={items.category} data-sex={items["sex"]} data-nuts={items["no_nuts"]} data-range={items.range ?? 0}>
    <div className="finded-content-item-left" >
      <div className="finded-content-item-left-image">
        <img src={items.image[0]} alt="" />
      </div>
      <div className="finded-content-item-left-description">
        <h2>{items.title}</h2>
        <h2>{items.sex ?? "not indicated"}</h2>
      </div>
    </div>
    <div className="finded-content-item-right">
      <div className="finded-content-item-right-price">
        <h2>{items.price} $</h2>
        <button className="addTocart v-btn" data-index={index}>Add to cart</button>
      </div>
    </div>
  </div>
))}
  </div>
</div>

<section className={`container title_container ${switchClass ? "active" : ""}`}>
  <div className="content cart_content">
    <div className="title">
      <h1>Trends</h1>
    </div>
  </div>
  <div className="goods">
  {splitGoodsIntoDivs(props.products, gooditems, (goods, i) => (
              <div key={i} className="newdiv">
                {goods.map((product, index) => (
                  <Goods
                    products = {props.products}
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    index={(i * 8) + index}
                    sex={product.sex}
                    setImage = {setImage}
                    setDisplayIndex={setDisplayIndex}
                    setDisplayisCheck = {setDisplayisCheck}
                  />
                ))}
              </div>
            ))}
  </div>
  <div className="num">
  <ReactPaginate
     breakLabel="..."
     nextLabel="Next"
     onPageChange={handlePageClick}
     pageRangeDisplayed={2} 
     marginPagesDisplayed={1} 
     pageCount={itemLength}
     previousLabel="Prev"
     renderOnZeroPageCount={null}
     containerClassName="pagination"
     pageLinkClassName="page-num"
     previousLinkClassName="prev-b"
     nextLinkClassName="next-b"
     activeClassName="active"
        />
  </div>
 
</section>
    </>
   )
}

function splitGoodsIntoDivs(goods, maxItemsPerDiv, callback) {
  const divs = [];
  let currentGoods = [];

  goods.forEach((product, index) => {
    currentGoods.push(product);

    if (currentGoods.length >= maxItemsPerDiv || index === goods.length - 1) {
      divs.push(currentGoods);
      currentGoods = [];
    }
  });

  return divs.map((goods, i) => callback(goods, i));
}


export default SidebarCarousel