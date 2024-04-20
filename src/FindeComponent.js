
import { useState } from "react";
function FindedContentItem({ displayisChek, setDisplayisCheck, products, displayIndex,setActiveSecondary,activeSecondary,getImage,setImage }) {
 let [foto, setFoto] = useState(getImage)
 const displayChecked = () => {
  setActiveSecondary(0);
  setDisplayisCheck(false);

};
  const changeFoto = (indexImg,index) => {
       setFoto(productsIndex.image[index])
       setImage(null)

       setActiveSecondary(index)
   };

  let productsIndex = products[displayIndex]

  return (
    <>

      <div className={`container box-container ${displayisChek ? 'active' : ''}`}>
        <div className="box-container-content">
          <div className="box-container-content-item-img">
            <div className="item-img-image">
              <div className="main-img" onClick={() => changeFoto(productsIndex.image[0],0)}>
              <img src={ getImage || foto} alt={productsIndex.title}  />
              </div>
              <div className="secondary">
                <img  className={`secondary-img ${activeSecondary === 0 ? 'active' : ''}`} src={productsIndex.image[0]} alt="" onClick={() => changeFoto(productsIndex.image[0],0)} />
                <img  className={`secondary-img ${activeSecondary === 1 ? 'active' : ''}`} src={productsIndex.image[1]} alt="" onClick={() => changeFoto(productsIndex.image[1],1)}/>
                <img  className={`secondary-img ${activeSecondary === 2 ? 'active' : ''}`} src={productsIndex.image[2]} alt="" onClick={() => changeFoto(productsIndex.image[2],2)}/>
              </div>
            </div>
          </div>
          <div className="box-container-content-item-details">
            <div className="item-details-category">
              <h3>Category: {products[displayIndex].category}</h3>
            </div>
            <div className="item-details-choice">
              <h3>Name: "{products[displayIndex].title}"</h3>
              <div className="item-details-choice-buy">
                <h3>{products[displayIndex].price}$</h3>
                <button className="item-details-btn add addTocart" data-index={displayIndex}>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="item-details-charkteristik">
              <h2>Product details</h2>
              <p>{products[displayIndex].details || "No details"}</p>
            </div>
          </div>
          <span onClick={displayChecked}>X</span>
        </div>
      </div>
    </>
  );
}

export default FindedContentItem;