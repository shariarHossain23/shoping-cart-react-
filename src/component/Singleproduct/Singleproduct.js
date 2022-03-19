import React from 'react';
import Reactmodal from '../Reactmodal/Reactmodal';

const Singleproduct = (props) => {
    // console.log(props.product)
    const {title,image} = props.product
    const cart = props.cart;
    return (
        <div className='col-md-4 g-4 ' 
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        >
            <div className='card shadow p-4'>
                <h2>{title.slice(0,10)}</h2>
                <div className='text-center'>
                <img width={"200px"} height={"200px"} src={image} alt=""/>
                </div>
                <div className='mt-4'>
                    <button onClick={cart} className='btn btn-success mx-2'>Add to cart</button>
                    <Reactmodal product = {props.product}></Reactmodal>
                </div>
            </div>
        </div>
    );
};

export default Singleproduct;