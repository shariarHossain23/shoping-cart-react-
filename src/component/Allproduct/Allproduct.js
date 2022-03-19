import React, { useEffect, useState } from 'react';

const Allproduct = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json))
    },[])
    return (
        <div>
            <div>
                {products.map(pd => console.log(pd))}
            </div>
        </div>
    );
};

export default Allproduct;