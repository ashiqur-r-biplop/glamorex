'use client'
import LoadingSpinner from '@/app/(customers)/components/HelpingCompo/LoadingSpinner';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import React, { useEffect, useState } from 'react';

const products = () => {
    const {axiosSecure} = useAxiosSecure()
    // const [products, setProducts] = useState([])
    const [products, setProducts] = useState({name:"test", price: 23, quantity:20, category: 'hey', sub_category: 'hello'})
    const isProductsLoading = false
    // useEffect(()=>{
    //     axiosSecure('/get-my-products').then(res=> console.log(res.data)).catch(e=> console.log(e.message))
    // },[])

    return (
        <div className="min-h-screen bg-cover bg-center bg-slate-800 bg-blend-overlay">
            {
                isProductsLoading ? <div className='h-screen flex items-center justify-center'>
                    <LoadingSpinner></LoadingSpinner>
                </div>
                    : !products.length ? <div className="h-screen flex items-center justify-center"><h2 className='text-4xl text-white font-bold bg-red-500 p-3'>There are no products added!</h2></div>
                        : <div className='my-container py-20 px-10 xl:px-5'>
                            <div className="!overflow-x-auto xl:w-full bg-slate-900 bg-opacity-75 text-slate-200 rounded shadow-inner shadow-slate-600 py-8">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr className='text-slate-200'>
                                            <th>#</th>
                                            <th>Product Name</th>
                                            <th className='text-center'>Price</th>
                                            <th className='text-center'>Quantity</th>
                                            <th className='text-end'>Categories</th>
                                            <th className='text-end'>Sub Categories</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* row 1 */}
                                        {
                                            products.map((product, ind) => {
                                                const { _id, name, price, image, quantity, category, sub_category, status } = product
                                                return <tr key={ind}>
                                                    <td>{ind + 1}</td>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={image} />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{name}</div>
                                                                <div className="text-sm opacity-50">${price}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='text-center'> {quantity} </td>
                                                    <td className='text-center'>{status}</td>
                                                    {/* <th className='text-end'>  <button className="cmn-btn-one" onClick={() => { window.my_modal_1.showModal(); setForUpdateClass(product) }}><FaPen></FaPen></button>  </th> */}

                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
            }

            {/* <UpdateClassModal updateClassFunc={updateClassFunc} forUpdateClass={forUpdateClass}></UpdateClassModal> */}
        </div>
    );
};

export default products;