import React, { Fragment, useState, useEffect } from 'react';
import Header from './Header';
import "./App.css"
import Cart from './Cart';
import SidebarCarousel from './SidebarCarousel';
import ProductEditor from './ProducrEditor';
import MailComponent from './MailComponent';
import FindedComponent from './FindeComponent';
import Footer from './Footer';

let products = [
  {
     "id" : 1,
     "title" : "Nike Air Jordan",
      "price" : 16,
      "category" : "Sneakers",
  "image" :[
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ea3a034a-351d-4d5e-9e39-6ebe24eebd23/air-jordan-1-mid-herrenschuh-83Lm6R.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f3c594b4-5e8a-4327-87c4-4d55aa3aa69e/air-jordan-1-mid-herrenschuh-83Lm6R.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3587121c-5ff8-45b0-90b2-2cef3cb78b61/air-jordan-1-mid-herrenschuh-83Lm6R.png"], 
       "sex" : "man",
       "details": "Step out in style with the Nike Low Sneakers. Designed for men, these sneakers offer a perfect blend of comfort and fashion. The low-top design is perfect for casual outings, while the high-quality materials ensure durability for everyday wear.",
  
  },
  {
     "id" : 2,
     "title" : "Nike High Sneakers",
      "price" : 20,
      "sex" : "woman",
      "category" : "Sneakers",
      "details": "Elevate your style with the Nike High Sneakers. These sneakers are specially designed for women, featuring a modern and fashionable high-top design. The combination of high-quality materials ensures both comfort and durability, making them a trendy choice for any casual occasion.",
      
      "image" :[
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1169bec8-e520-4f4f-a2fd-85e4b82cb081/air-jordan-legacy-312-herrenschuh-H0d7S3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eeda5660-1e5a-45bd-a688-fe40e0801e61/air-jordan-legacy-312-herrenschuh-H0d7S3.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1a52d65f-4c70-4549-b93e-e74199675aa3/air-jordan-legacy-312-herrenschuh-H0d7S3.png"
      ], 
  
  },
  {
     "id" : 3,
     "title" : "Nike Low Sneakers",
      "price" : 25,
      "sex" : "man",
      "category" : "Sneakers",
      "details": "Step out in style with the Nike Low Sneakers. Designed for men, these sneakers offer a perfect blend of comfort and fashion. The low-top design is perfect for casual outings, while the high-quality materials ensure durability for everyday wear.",
       "image" : [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/017cb46d-0f12-45c9-833c-0ef00b868f85/air-alpha-force-88-herrenschuh-DBbM4L.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/28c37044-aa38-492d-bb24-85281357b4a7/air-alpha-force-88-herrenschuh-DBbM4L.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2ae4339-190b-4e4d-b6b9-ffe56b7322d0/air-alpha-force-88-herrenschuh-DBbM4L.png"
      ],
  
  },
  {
     "id" : 4,
     "title" : "Nike Air Max",
     "sex" : "man",
      "price" : 30,
      "category" : "Jeans",
       "image" : [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14de6943-8c87-4b9b-9585-80dea96a70d3/air-max-97-herrenschuh-R4T3zC.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7376d02-9013-482f-80d0-016daf36d35a/air-max-97-herrenschuh-R4T3zC.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f75082ae-6ef7-4922-a356-d52665aa587c/air-max-97-herrenschuh-R4T3zC.png"
      ],
      "details": "The Nike Air Max jeans combine style and comfort effortlessly. Made from high-quality denim, these jeans are perfect for any casual occasion. The classic design with the Air Max logo adds a touch of sporty flair to your everyday look.",
       
  },
  {
     "id" : 5,
     "title" : "Nike Sportswear Classic Puffer",
      "price" : 35,
      "category" : "jackets",
      "details" : "The Nike Sportswear Classic Puffer is a black jacket made of 100% polyester. It features a Nike logo, a hood, a zipper closure, and two side pockets. The material is durable, and the jacket can be easily maintained by hand washing and ironing at a low temperature.",
       "image" :[
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6c7ee040-717a-43b4-aeeb-fb27d70a529e/sportswear-classic-puffer-lockere-jacke-mit-kapuze-fur-ft53SK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f8fec65-998b-4be6-a482-00513c40f134/sportswear-classic-puffer-lockere-jacke-mit-kapuze-fur-ft53SK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9070c25d-edd3-4641-8274-86d40774a750/sportswear-classic-puffer-lockere-jacke-mit-kapuze-fur-ft53SK.png"
      ] ,
  },
  {
    "id" : 6,
    "title" : "Jordan Brooklyn Fleece",
     "price" : 35,
     "category" : "Shirts",
     "details" : "The Jordan Brooklyn Fleece is a stylish gray sweatshirt made of 80% cotton and 20% polyester. It has the iconic Jordan logo, a round neck, and elastic cuffs and hem for a comfortable fit. Available in size 3.",
      "image" :[
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/75023c79-5809-446c-9315-e1b5d9f7d950/jordan-brooklyn-fleece-sweatshirt-mit-rundhalsausschnitt-SPwT5W.png",
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ab3ac1df-31f7-411b-ab09-c1e01055012a/jordan-brooklyn-fleece-sweatshirt-mit-rundhalsausschnitt-SPwT5W.png",
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe76e0b7-297c-458c-9e49-20446fbef31d/jordan-brooklyn-fleece-sweatshirt-mit-rundhalsausschnitt-SPwT5W.png"
      ] ,

 },
 {
  "id" : 7,
  "title" : "Midweight Daunenjacke",
   "price" : 35,
   "category" : "jeans",
   "details" : "The Midweight Daunenjacke is a vibrant red jacket from Adidas, made of 100% polyester. It features the Adidas logo, a zipper closure, and is water-resistant. With its midweight design, it's perfect for various occasions.",
    "image" :[
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a64882b221ee4287b643b4f8c0409d06_9366/Midweight_Daunenjacke_Rot_IR7132_21_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c85908dddada48dbbcc65246c84e5e04_9366/Midweight_Daunenjacke_Rot_IR7132_25_model.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/799fb2a8d62b46cfb07fd11ade1d91bc_9366/Midweight_Daunenjacke_Rot_IR7132_23_hover_model.jpg"
    ] ,

},
{
"id" : 8,
"title" : "Adicolor T-Shirt",
 "price" : 35,
 'sex': "woman",
 "category" : "Shirts",
 "details" : "The Adicolor T-Shirt is a classic white shirt made of 100% cotton. It features the Adidas logo, a round neck, and has a comfortable fit. Available in size 3.",
  "image" :[
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf94eb6698c3436b81afaefc00e39181_9366/adicolor_Essentials_T-Shirt_Weiss_IA6461_21_model.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c378865ea5514256b000aefc00e3a232_9366/adicolor_Essentials_T-Shirt_Weiss_IA6461_25_outfit.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82e350f14633499693e6aefc00e39913_9366/adicolor_Essentials_T-Shirt_Weiss_IA6461_23_hover_model.jpg"
  ] ,

},
{
"id" : 9,
"title" : "Adicolor T-Shirt",
 "price" : 35,
 'sex': "woman",
 "category" : "sneakers",
 "details" : "The Adicolor T-Shirt is a classic white shirt made of 100% cotton. It features the Adidas logo, a round neck, and has a comfortable fit. Available in size 3.",
  "image" :[
    'https://dfcdn.defacto.com.tr/6/R1124AZ_23WN_BK27_06_01.jpg',
    "https://dfcdn.defacto.com.tr/6/R1124AZ_23WN_BK27_05_02.jpg",
    "https://dfcdn.defacto.com.tr/6/R1124AZ_23WN_BK27_08_01.jpg"
  ] ,

},
{
"id" : 10,
"title" : "Skinny Jeans",
 "price" : 35,
 'sex': "woman",
 "category" : "Jeans",
 "details" : "These Skinny Jeans are made of 98% cotton and 2% elastane, offering both comfort and style. With a standard fit, zipper and button closure, and the classic five-pocket style, these blue jeans are a timeless addition to your wardrobe. Available in size 3.",
  "image" :[
    "https://dfcdn.defacto.com.tr/6/A7008AX_23AU_NM40_04_03.jpg",
    "https://dfcdn.defacto.com.tr/6/A7008AX_23AU_NM40_03_03.jpg",
    "https://dfcdn.defacto.com.tr/6/A7008AX_23AU_NM40_07_03.jpg"
  ] ,
  
},
{
"id" : 11,
"title" : "Skinny Jeans",
 "price" : 35,
 'sex': "man",
 "category" : "Jeans",
 "details" : "55555555555",
  "image" :[
    "https://dfcdn.defacto.com.tr/6/Z6298AZ_23WN_NM41_02_01.jpg",
    "https://dfcdn.defacto.com.tr/6/Z6298AZ_23WN_NM41_03_01.jpg",
    "https://dfcdn.defacto.com.tr/6/Z6298AZ_23WN_NM41_06_01.jpg"
  ] ,

},
{
"id" : 12,
"title" : "Oversize Fit T-Shirt",
 "price" : 35,
 "category" : "Shirts",
 'sex': "man",
 "details" : "The Oversize Fit T-Shirt is a loose-fitting white shirt made of 100% cotton. It has a comfortable round neck and is available in size 3.",
  "image" :[
    "https://dfcdn.defacto.com.tr/6/V1870AZ_22SM_WT34_02_02.jpg",
    "https://dfcdn.defacto.com.tr/6/V1870AZ_22SM_WT34_04_02.jpg",
    "https://dfcdn.defacto.com.tr/6/V1870AZ_22SM_WT34_05_02.jpg"
] ,

},
{
"id" : 13,
"title" : "Oversize Fit Shirt",
 "price" : 35,
 'sex': "woman",
 "category" : "Shirts",
 "details" : "The Oversize Fit Shirt is a loose-fitting beige shirt made of 100% viscose. It features a collar, button closure, and is available in size 3.",
  "image" :[
    "https://dfcdn.defacto.com.tr/7/W4515AZ_23SP_BE458_01_02.jpg",
    "https://dfcdn.defacto.com.tr/7/W4515AZ_23SP_BE458_02_02.jpg",
    "https://dfcdn.defacto.com.tr/7/W4515AZ_23SP_BE458_03_02.jpg"
  ] ,
},
{
"id" : 14,
"title" : "Fit Pullover Gerippt",
 "price" : 35,
 "sex" : "woman",
 "category" : "Pullover",
 "details" : "The Fit Pullover Gerippt is a stylish red pullover made of 79% acrylic and 21% polyester. It features a ribbed pattern, a loose fit, and a round neck. Available in size 3.",
 "image" :[
  "https://dfcdn.defacto.com.tr/6/A8606AX_23WN_AR104_01_01.jpg",
  "https://dfcdn.defacto.com.tr/6/A8606AX_23WN_AR104_02_01.jpg",
  "https://dfcdn.defacto.com.tr/6/A8606AX_23WN_AR104_06_01.jpg"
] ,

},
{
"id" : 15,
"title" : "Standard Fit Pullover",
 "price" : 35,
 "sex" : "man",
 "category" : "Pullover",
 "details" : `Maße des Modells: Größe: 1,71 Brust: 83 Taille: 62 Hüfte: 90
 Modellgröße: M
 Material : Acryl 79%,Polyester 21%`,
 "image" :[
  "https://dfcdn.defacto.com.tr/6/A5234AX_23WN_BK27_02_01.jpg",
  "https://dfcdn.defacto.com.tr/6/A5234AX_23WN_BK27_04_01.jpg",
  "https://dfcdn.defacto.com.tr/6/A5234AX_23WN_BK27_06_01.jpg"
]  ,

},
{
"id" : 16,
"title" : "Slim Fit Mantel aus Wildleder",
 "price" : 35,
 "sex" : "man",
 "category" : "Jacket",
 "details" : `Maße des Modells: Größe: 1,88 Brust: 99 Taille: 77 Hüfte: 97
 Modellgröße: M
 Material : Polyester 100%`,
 "image" :[
  "https://dfcdn.defacto.com.tr/6/R5080AZ_23WN_BN324_01_01.jpg",
  "https://dfcdn.defacto.com.tr/6/R5080AZ_23WN_BN324_04_01.jpg",
  "https://dfcdn.defacto.com.tr/6/R5080AZ_23WN_BN324_06_01.jpg"
],
}
 
]


function SecondApp() {
  const [pro, setProducts] = useState(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    return storedProducts || products;
  });
  const [activeSecondary, setActiveSecondary] = useState(0);
  const [getImage, setImage] = useState(null)
  const [displayCheckItems, setDisplay] = useState(false)
  const [switchClass, setSwitchclass] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [OrderIsActive, setOrderIsActive] = useState(false)
  const [listCarts, setListCarts] = useState([]);
  const [counter, setCounter] = useState(0);
  const [DisplayIndexCheck,setDisplayIndexCheck] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState('all');

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts, newProduct];
      localStorage.setItem('products', JSON.stringify(updatedProducts) || products) ;
      return updatedProducts;
    });
  };
  let marginValue
  let computedStyle
  let myBlock
  let cart_boxes 
  useEffect(() => {
     myBlock = document.querySelector(".mail_content");
     cart_boxes = document.querySelectorAll(".cart_box")
    if (myBlock) {
       computedStyle = window.getComputedStyle(myBlock);
       marginValue = computedStyle.getPropertyValue('top');
  
    }
  }, []); 

  let listCart
function ClickHandler(e) {
  const target = e.target;
  listCart = JSON.parse(localStorage.getItem("list")) || [];
  if (target.classList.contains("addTocart")) {
     console.log(target)

    const index = target.dataset.index;
  
    if (listCart[index] == undefined) {
      listCart[index] = { ...pro[index]};
      listCart[index]["count"] = 0;
    }
    listCart[index]["count"]++;
    setListCarts((prev) => prev = listCart);
    
  }
  if (target.classList.contains("deleteCart")) {

    const index = target.dataset.index;


    if (listCart[index] !== undefined) {
      listCart[index]["count"]--;
      if (listCart[index]["count"] === 0) {
        delete listCart[index];
      }
    }
  }
  if (target.classList.contains("removeCart")) {

    const index = target.dataset.index;
    if (listCart[index] !== undefined) {
      listCart[index]["count"] = 0;
      delete listCart[index];
    }
  }
  localStorage.setItem("list", JSON.stringify(listCart))
  setCounter(counter + 1)
}
let c = 0;
let totalPrice = 0;
let list = JSON.parse(localStorage.getItem("list")) || [];
    list.forEach((item) => {
        if(item !== undefined && item !== null){
            c+= item["count"]
            totalPrice += item["count"] * item["price"]       
        }
    })

  let lisProducts = JSON.parse(localStorage.getItem("products"));


  
  return (
    <Fragment>
      <section onClick={ClickHandler}>     
      <Header classAct={switchClass} set={setSwitchclass} EditActive={isActive} EditSet={setIsActive} counter={c} 
      OrderActive = {OrderIsActive} setOrderActive = {setOrderIsActive} setDisplayisCheck = {setDisplay}
      setSelectedCategory = {setSelectedCategory} selectedCategory = {selectedCategory} setSwitchclass = {setSwitchclass}
      setActiveSecondary = {setActiveSecondary}
      />
      <ProductEditor EditActive={isActive} EditSet={setIsActive} onAddProduct={addProduct} products = {lisProducts}/>
      <div className="side_padding active" style={{ display: isActive ? 'none' : (displayCheckItems ? 'none' : 'flex') }}>
        <Cart  counter = {c} setOrderActive = {setOrderIsActive}   OrderActive = {OrderIsActive}/>
        <SidebarCarousel products={lisProducts || products} classAct={switchClass} set={setSwitchclass} 
        displayisChek = {displayCheckItems} setDisplayisCheck = {setDisplay} displayIndex = {DisplayIndexCheck} 
        setDisplayIndex = {setDisplayIndexCheck} setSelectedCategory = {setSelectedCategory} selectedCategory = {selectedCategory}
        setImage = {setImage}
        />
      </div>
      <FindedComponent displayisChek = {displayCheckItems} setDisplayisCheck = {setDisplay} products={lisProducts || products}
      displayIndex = {DisplayIndexCheck} getImage = {getImage} activeSecondary = {activeSecondary}  setActiveSecondary = {setActiveSecondary}
      setImage = {setImage}
      />
      <MailComponent OrderActive = {OrderIsActive} setOrderActive = {setOrderIsActive} products={list} totalPrice = {totalPrice} counter = {c}/>
      </section>
     <Footer classAct={switchClass}/>
    </Fragment>
  );
}

export default SecondApp;