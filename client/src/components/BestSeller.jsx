import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductCart from './ProductCart'


function BestSeller() {
    const { products } = useContext(AppContext)
    return (
        <div className='mt-6'>
            <p className='text-2xl font-medium md:text-3xl'>Best Seller</p>
            <div className='my-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-15 items-center justify-center'>
                {
                    products.filter((product) => product.inStock).slice(0, 5).map((product, index) =>
                        (<ProductCart key={index} product={product} />)
                    )}
            </div>
        </div>
    )
}

export default BestSeller