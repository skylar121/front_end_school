import React from 'react'
import ProductImage from 

export default function ProductCard({productName, price, thumbnailImg}) {
    return (
        <>
            <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            <ProductName productName={productName}/>
            <ProductPrice price={price}/>
        </>
    )
}
