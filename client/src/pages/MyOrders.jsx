import React, { useEffect, useState, useContext } from 'react'
import { dummyOrders } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

function MyOrders() {
    const [myOrders, setMyOrders] = useState([])
    const { axios, user } = useContext(AppContext)
    const fetchOrders = async () => {

        try {
            const { data } = await axios.get("/api/order/user")
            if (data.success) {
                setMyOrders(data.orders)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)

        }
    }
    useEffect(() => {
        if (user) {
            fetchOrders()
        }
    }, [user])
    return <div className='mt-10 pb-12'>
        <div>
            <p className='text-2xl font-medium md:text-3xl'>
                My Orders
            </p>
        </div>
        {myOrders.map((order, index) => (
            <div key={index} className="my-8 border border-gray-300 rounded-lg mb-5 py-4 p-4 max-w-4xl">
                <p className='flex justify-between items-center'>
                    <span>Order ID: {order._id}</span>
                    <span>Payment: {order.paymentType}</span>
                    <span>Total Amount: &#8377; {order.amount}</span>
                </p>
                {order.items.map((item, index) => (
                    <div key={index} className={`relative bg-white text-gray-800/70 ${order.items.length !== index + 1 && "border-b"}
                            border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 w-full max-w-4xl`}>
                        <div className='flex items-center mb-4 md:mb-0'>
                            <div className='p-4 rounded-lg'>
                                <img src={`http://localhost:5000/images/${item.product.image[0]}`} className='w-16 h-16' alt="" />
                            </div>
                            <div className='ml-4'>
                                <h2 className='text-xl font-medium'>{item.product.name}</h2>
                                <p>{item.product.category}</p>
                            </div>
                        </div>

                        <div className='texl-lg font-medium'>
                            <p>Quantity: {item.quantity || "1"}</p>
                            <p>Status: {order.status}</p>
                            <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                        </div>
                        <p className='text-lg'>
                            Amount &#8377; {item.product.offerPrice * item.quantity}
                        </p>

                    </div>
                ))}
            </div>
        ))}
    </div>


}

export default MyOrders