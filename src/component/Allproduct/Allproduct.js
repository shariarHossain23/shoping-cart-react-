import React, { useEffect, useState } from 'react';
import Singleproduct from '../Singleproduct/Singleproduct';

const Allproduct = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=> setProducts(json))
    },[])
    return (
        <div>
            <div className='container row mx-auto'>
                {products.map(pd => <Singleproduct product ={pd}></Singleproduct>)}
            </div>
        </div>
    );
};

export default Allproduct;