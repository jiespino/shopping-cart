import './Cart.css'

function Cart(props) {
    const cartItems = props.cart.map(cartItem => 
        <div key={cartItem.id} className="cartItemContainer">
            <img src={cartItem.image} alt={cartItem.title}></img>
            <p id="price">{cartItem.title}: <span id="priceSymbol">$</span><span id="priceWhole">
                {cartItem.priceWhole}</span><span id="priceDecimal">{cartItem.priceDecimal}</span> X {cartItem.quantity}</p>
            </div>);

    const totalArray = props.cart.map(cartItem => Number(`${cartItem.priceWhole}.${cartItem.priceDecimal}`) * cartItem.quantity)
    const total = totalArray.reduce((a, b) => a + b, 0)
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    let proceedText;
    if (total) {
        proceedText = <p id="checkOutText">Proceed to Checkout?</p>
    }

  return (
        <div id='cartContainer'>
            <div id='cartItemsContainer'>
                {cartItems}
            </div>
            <div id="totalPriceContainer">
                <p id="totalText">Total: {formatter.format(total)}</p>
            </div>
        <div id="checkOutContainer">  
            {proceedText}
        </div>
        </div>
);
}

export default Cart;
