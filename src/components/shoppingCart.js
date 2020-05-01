import React from 'react';

const ShoppingCart = function(props) {
    return (
    <div className="shopping-cart-container">
        <div className="shopping-cart">
            cart 
            <div className="shopping-cart-numbers">
                {props.numbers}
            </div>
        </div> 
    </div>
    )
}

export default ShoppingCart;