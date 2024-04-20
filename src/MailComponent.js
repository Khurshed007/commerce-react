import React, { useState } from 'react';

function MailComponent(props) {
  let { OrderActive, setOrderActive, products, totalPrice } = props;

  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  let orderActive = () => {
    setOrderActive((prev) => !prev);
  };

  let out = {};

  products.forEach((element, index) => {
    if (element !== null && element !== undefined) {
      out[index] = element;
    }
  });

  const handleOrderAccept = () => {
    let message = "No goods in Cart to purchase";

    Object.keys(out).forEach((item) => {
      if (out[item] !== null && out[item] !== undefined) {
        message = "Purchase accepted";
        setEmail("")
        setTelephone("")
        setAddress("")
        setName("")
      }
    });

    if (isFormValid) {
      localStorage.setItem("list", JSON.stringify([]));
      alert(message);
     
    } else {
      alert("Please fill in all the required fields");
    }
  };

  const validateForm = () => {
    // Ваша логика валидации формы
    setIsFormValid(email !== '' && telephone !== '' && address !== '' && name !== '');
  };

  OrderActive
    ? document.querySelector("body").classList.add("active")
    : document.querySelector("body").classList.remove("active");

  return (
    <section className={`container mail_container ${OrderActive ? "active" : ""}`}>
      <div className="content mail_content">
        <span onClick={orderActive}>X</span>
        <div className="title">
          <h1>Your Order</h1>
        </div>
        <div className="mail_cont">
          {products && Object.keys(out).length > 0 ? (
            Object.keys(out).map((item) => (
              <div className="cart_box" key={products[item]["id"]}>
                <div className="cart_item">
                  <img src={products[item]["image"][0]} alt="" />
                  <h1>{products[item]["title"]}</h1>
                  <h1>{products[item]["price"]}$</h1>
                </div>
                <div className="cart_item_quantity">
                  <button className="addTocart" data-index={item}>
                    +
                  </button>
                  <p>{products[item]["count"]}</p>
                  <button className="deleteCart" data-index={item}>
                    -
                  </button>
                  <p style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px" }}>
                    {products[item]["price"] * products[item]["count"]} $
                  </p>
                  <button className="removeCart" data-index={item}>
                    Х
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h1 style={{ fontSize: "2rem" }}>Sorry, but no orders</h1>
          )}
        </div>
        <div className="delivery_box">
          <div className="title">
            <h1>Delivery</h1>
          </div>
          <div className="valid">
            <div className="contact-info">
              <input type="text" name="mail" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateForm} />
              <input type="text" name="telefon" placeholder="Telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} onBlur={validateForm} />
              <input type="text" name="address" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} onBlur={validateForm} />
            </div>
            <input className="name-input" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} onBlur={validateForm} />
          </div>

          <div className="delivery_order">
            <div className="delivery_order_price">{totalPrice} $</div>
            <div className="delivery_order_accept" onClick={handleOrderAccept}>
              Order
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MailComponent;