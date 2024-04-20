


function SearchComponent(){
    return(
        <>
       <div className="search-container mobile-none">
  <div className="search-content">
    <span><i className="fas fa-search"></i></span>
    <input type="text" className="elastic" placeholder="Search for anything" />
  </div>
  <button className="v-btn">Search</button>
</div>
        </>
    )
}

export default SearchComponent