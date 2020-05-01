import React, { useState } from 'react';
import ShoppingCart from  './shoppingCart';

const Product = (props) => {

    const [ dataList, setDataList ] = useState([
        {img: "img1", detail: "someing1 ...."},
        {img: "img2", detail: "someing2 ...."},
        {img: "img3", detail: "someing3 ...."},
        {img: "img4", detail: "someing4 ...."},
        {img: "img5", detail: "someing5 ...."},
    ]);

    const [shoppingCart, setShoppingCart] = useState([]);

    const renderList = (data) => {
        return data.map((item, key=0) => {
            return (<li className="data-list" key={key++} onClick={() => putIntoShoppingCart(item, shoppingCart)}>
                        <div className="row-box">
                            <div className="img-box">{item.img}</div> 
                            <div className="detail-box">{item.detail}</div>
                        </div>
                    </li>)
        })
    }

    const putIntoShoppingCart = (item, shoppingCart) => {
        setShoppingCart([...shoppingCart, item]);
    }
    
    console.log(shoppingCart);
    return (
        <div className="product">
            <div>
                <ul>
                    {renderList(dataList)}
                </ul>
            </div>
            <ShoppingCart numbers = {shoppingCart.length} />
        </div>
    )
}

export default Product;