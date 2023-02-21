import React from 'react';
import {PRODUCTS} from "../../products"; 
import { Product } from './product';
import './Home.css';

export const Home = () => {
  return (
    <div className='home'>
        <div className='homeTItle'>
            <h1>WebMarket</h1>        
        </div>
        <div className='products'>
            {PRODUCTS.map((product)=>(
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}
