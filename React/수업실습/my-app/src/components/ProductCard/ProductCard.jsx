import { useState, useRef } from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'

export default function ProductCard({productName, price, thumbnailImg}){
    console.log('렌더링 되었어요');
    const likeBtn = useRef(null)

    // const [likeValue, setLikeValue] = useState(false)

    // function changeStatus (e) {
    //     setLikeValue(!likeValue)        
    //     if (likeValue === true){
    //         e.target.className = 'like-btn on'
    //     } else {e.target.className = 'like-btn'
    //     }
    // }

    function handleLikeClick(e) {
        e.target.classList.toggle('on');
    }

    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button className="like-btn" onClick={handleLikeClick} ref={likeBtn}></button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}
