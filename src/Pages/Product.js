import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {

    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const fetchAPi = async()=>{
        try{
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            console.log('Response',data);
            setProducts(data?.products);
            setLoading(false);
            console.log(loading);
        }
        catch(e){
            setLoading(false);
            console.log("error",e.message);
        }

    }
    


    useEffect(() =>{
        fetchAPi();
    },[])
  return (
    <div className='row py-5 align-items-baseline'>
        {products && products.length>0 && products.map((product,i)=>{
            return(  
                <div className="col-lg-3" key={i}>
                    <div class="card">
                        <img src={product.thumbnail} className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Name - {product.title}</h5>
                            <p class="card-text">Price - {product.price}</p>
                            <Link to={`/${product.id}`} class="btn btn-primary">Buy Now &rarr;</Link>
                        </div>
                    </div>
                </div>)
        })}
    </div>
  );
}

export default Product;
