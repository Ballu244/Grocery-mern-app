import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCard from "../components/ProductCart"
import Footer from '../components/Footer'
function Product() {
    const { products, searchQuery } = useContext(AppContext)
    const [filteredProducts, setFilteredProducts] = useState([])
    useEffect(() => {
        if (searchQuery.length > 0) {
            setFilteredProducts(products.filter((products) => products.name.toLowerCase().includes(searchQuery.toLowerCase())))
        } else {
            setFilteredProducts(products)
        }
    }, [products, searchQuery])
    return (
        <div className='mt-10'>
            <h1 className='text-3xl lg:text-4xl font-medium'>All Products</h1>
            <div className='my-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-15 items-center justify-center'>
                {
                    filteredProducts.filter((product) => product.inStock).map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                }
            </div>
            < Footer />
        </div>
    )
}

export default Product