import React, { useState, useEffect, useRef } from 'react';

function MainCarousel(props) {
  const carouselContentRef = useRef(null);
  const circlesRefs = useRef([]);
  const [left, setLeft] = useState(0);
  const [count, setCount] = useState(0);
  const[itemLength, setItemLength] = useState(0)


  const handleCircleClick = (index) => {
    const images = Array.from(carouselContentRef.current.querySelectorAll('.items'));
    const circles = circlesRefs.current;
    circles.forEach(circle => circle.classList.remove("active"));


    setCount(index);
    images.forEach(img => img.classList.remove("active-img"));
    images[index].classList.add("active-img");

    setLeft(-index * images[0].clientWidth);
  };

  useEffect(() => {
    const images = Array.from(carouselContentRef.current.querySelectorAll('.items'));
    const circles = circlesRefs.current;
    setItemLength(images.length)
    if (!carouselContentRef.current) {
      return; 
    }
  
  
    const next = () => {
      const newCount = count + 1 === images.length ? 0 : count + 1;
      handleCircleClick(newCount);
    };
  
    const prev = () => {
      const newCount = count - 1 === -1 ? images.length - 1 : count - 1;
      handleCircleClick(newCount);
    };
//     const current = () => {
//         const newCount = 0;
//         handleCircleClick(newCount);
//       };
//   current()
    const nextBtn = document.querySelector(".next-btn");
    nextBtn.onclick = next;
  
    const prevBtn = document.querySelector(".prev-btn");
    prevBtn.onclick = prev;
   
  }, [count]);
//  console.log(itemLength)
//  console.log(carouselContentRef.current.children.length)

  return (
    <div className={`carousel-wrapper ${props.classActive ? "active" : ""}`}>
      <button className="prev-btn"></button>
      <div className="carousel-content" ref={carouselContentRef} style={{left: left + 'px'}}>
        <div className="items"><img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a64882b221ee4287b643b4f8c0409d06_9366/Midweight_Daunenjacke_Rot_IR7132_21_model.jpg" /></div>
        <div className="items"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/017cb46d-0f12-45c9-833c-0ef00b868f85/air-alpha-force-88-herrenschuh-DBbM4L.png" /></div>
        <div className="items"><img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f8fec65-998b-4be6-a482-00513c40f134/sportswear-classic-puffer-lockere-jacke-mit-kapuze-fur-ft53SK.png"/></div>
        <div className="items"><img src='https://dfcdn.defacto.com.tr/6/R1124AZ_23WN_BK27_06_01.jpg'/></div>
        <div className="items"><img src="https://dfcdn.defacto.com.tr/6/A7008AX_23AU_NM40_04_03.jpg" /></div>
      </div>
      <button className="next-btn"></button>
      <div className="circle_item">
       {Array.from({ length: itemLength }).map((_, index) => (
    <span
      key={index}
      className={`circle${index === count ? ' active' : ''}`}
      ref={(el) => (circlesRefs.current[index] = el)}
      data-index={index}
      onClick={() => handleCircleClick(index)}
    ></span>
  ))}
      </div>
    </div>
  );
}

export default MainCarousel;