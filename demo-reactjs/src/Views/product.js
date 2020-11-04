import React, { useState, useEffect } from 'react';

function Product(){
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch('https://www.poopourri.com/collections/all-products');

        const items = await data.json();
        console.log(items);
    };
        return(
            <div> 
                <div className="container">
                    <h1>Product</h1>
                </div>
            </div>
        );
}
export default Product