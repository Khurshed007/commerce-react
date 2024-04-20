

function Goods(props) {
 let {products, displayIndex, setImage,setDisplayIndex,index,setDisplayisCheck} = props




 function displayCheck(e,index){
  if(e.target.classList.contains("addTocart")) return false;
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

console.log("Ширина экрана: " + screenWidth);
if(screenWidth < 899){
document.querySelector("footer").style.display = "none"
}
  setDisplayIndex((prev) => prev = index)
  console.log(e)
  setDisplayisCheck((prev) => prev = true)
  setImage(products[index].image[0])
 }
 return(
  <div      
    className={`goods_item ${props.classActive ? "active" : ""}`}
    data-category={props.category}
    data-sex={props.sex}
    data-index = {props.index}
  >
  
    <div className="goods_item_img">
      <img src={props.image[0]} alt={products[index]["title"]}/>
     </div> 
    <div className="goods_item_cover" onClick={(e) => {displayCheck(e,index)}}>

<button className="addTocart" data-index = {props.index} >+</button>
</div>
    <div className="goods_item_title">
      <h1>{props.title}</h1> 
    </div>
  </div>
 )
}


   export default Goods