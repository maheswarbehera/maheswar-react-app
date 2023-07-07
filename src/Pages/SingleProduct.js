import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
function SingleProduct() {

    const query = useParams();
    const [product,setProduct] = useState({});

    const fetchData = async(id)=>{
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            const data = await response.data;
            console.log(data);
            setProduct(data);
            // const ress = await axios.post(`https://dummyjson.com/products/${id}`,{},{
            //     headers:{
            //         ''
            //     }
            // })
        } catch (error) {
            console.log("error", error.messages);
        }
    }

    useEffect(()=>{
        if(query && query?.id){
            fetchData(query?.id)
        }
    },[])
  return (
    <div>
      {/* {product && JSON.stringify(product)} */}
      <p className='fs-6 text-start py-4'><Link to='/product'>Back to Product &rarr;</Link></p>
      <div className='py-5'>
        <strong>Product Details Page</strong>
      </div>
      <div className='row'>
        <div className="col-6">
            <img src={product.thumbnail} className="card-img-top" alt="..."/>
        </div>
        <div className="col-6">
            <div className="attribute w-50 mx-auto fs-6 text-capitalize">

                <div className="value text-start">
                    <h6>title : {product.title}</h6>
                    <p>brand : {product.brand}</p>
                    <p>price : {product.price}</p>
                    <p>discountPercentage : {product.discountPercentage}</p>
                    <p>category : {product.category}</p>
                    <p>stock : {product.stock}</p>
                    <p>description : {product.description}</p>
                    <p>Rating : {product.rating}</p>
                </div>
                <div className='d-flex'>
                    <button className='btn btn-outline-warning me-3'>Add To Cart &rarr;</button>
                    <button className='btn btn-info'>Buy Now &rarr;</button>
                </div>
            </div>
        </div>
      </div>
      <div className=''>
      {/* <img src={product.images[2]} className="card-img-top" alt="..."/> */}
        
      </div>
    
    </div>
  );
}

export default SingleProduct;
