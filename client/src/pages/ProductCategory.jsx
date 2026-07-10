import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCart from "../components/ProductCart"
function ProductCategory() {
    const { products, navigate } = useContext(AppContext)
    const { category } = useParams()
    const searchCategory = categories.find((item) => item.path.toLowerCase() === category.toLowerCase())
    const filterProducts = products.filter((product) => product.category.toLowerCase() === category)
    return (
        <div className='mt-16'>
            {
                searchCategory && (
                    <div className="flex flex-col items-end w-max">
                        <h1 className='text-2xl md:texl-4xl font-medium'>{searchCategory.text.toUpperCase()}</h1>
                    </div>
                )}
            {
                filterProducts.length > 0 ? (
                    <div>
                        <div className='my-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-15 items-center justify-center'>
                            {filterProducts.map((product, index) => (
                                <ProductCart key={index} product={product} />
                            ))}
                        </div>
                    </div>
                ) : "Product Not Found!"
            }
        </div>
    )
}

export default ProductCategory