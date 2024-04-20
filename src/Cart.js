



function Cart(props) {
   let {counter, setOrderActive,OrderActive} = props
   
   let orderActive = () => {
    setOrderActive((prev) => prev = !OrderActive)
}
    return(
        <>
           <div className="cart display-none" onClick={orderActive}>
        <span className="count">{counter}</span>
        <i className="fas fa-shopping-cart "></i>
      </div>
        
        </>
    )
}


export default Cart