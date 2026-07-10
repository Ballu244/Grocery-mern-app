import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

function ProductCart({ product }) {
    const { navigate, addToCart, cartItems, removeCart } = useContext(AppContext)

    return (
        product && (
            <div onClick={() => {
                navigate(`/product/${product.category.toLowerCase()}/${product._id}`)
            }} className="cursor-pointer border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-50 max-w-50 w-50">
                <div className="group  flex items-center justify-center px-2 ">
                    <img className="group-hover:scale-110 transition max-w-26 md:max-w-35 justity-center" src={`http://localhost:5000/images/${product.image[0]}`} alt={product.name} />
                </div>
                <div className="text-gray-500/60 text-sm">
                    <p>{product.category}</p>
                    <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                    <div className="flex items-center gap-0.5">
                        {Array(5).fill('').map((_, i) => (
                            <img src={i < 4 ? assets.star_icon : assets.star_dull_icon} key={i} alt="" className='w-3 md:w-3.5' />
                        ))}
                        <p>({4})</p>
                    </div>
                    <div className="flex items-end justify-between mt-3">
                        <p className="md:text-xl text-base font-medium text-indigo-500">
                            &#8377;{product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">  &#8377;{product.price}</span>
                        </p>
                        <div className="text-indigo-500" onClick={(e) => e.stopPropagation()}>
                            {!cartItems?.[product._id] ? (
                                <button className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-300 md:w-[80px] w-[64px] h-[34px] rounded text-indigo-600 font-medium" onClick={() => addToCart(product._id)} >
                                    <img src={assets.cart_icon} className='w-4 ' alt="cart Icon" />
                                    Add
                                </button>
                            ) : (
                                <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-indigo-500/25 rounded select-none">
                                    <button onClick={() => removeCart(product._id)} className="cursor-pointer text-md px-2 h-full" >
                                        -
                                    </button>
                                    <span className="w-5 text-center">{cartItems[product._id]}</span>
                                    <button onClick={() => addToCart(product._id)} className="cursor-pointer text-md px-2 h-full" >
                                        +
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default ProductCart