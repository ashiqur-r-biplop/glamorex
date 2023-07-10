import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaCalendar, FaTag } from 'react-icons/fa6';

const Invoices = () => {

    // for invoices
    const invoices = [
        {
            invoiceNo: 'INV001',
            id: 1,
            customerName: 'John Doe',
            itemsName: ['Item A', 'Item B', 'Item C'],
            orderDate: '2023-07-01',
            status: 'Paid',
            price: 100.0
        },
        {
            invoiceNo: 'INV002',
            id: 2,
            customerName: 'Jane Smith',
            itemsName: ['Item D', 'Item E'],
            orderDate: '2023-07-02',
            status: 'Pending',
            price: 75.5
        },
        {
            invoiceNo: 'INV003',
            id: 3,
            customerName: 'Mike Johnson',
            itemsName: ['Item F'],
            orderDate: '2023-07-03',
            status: 'Paid',
            price: 50.0
        },
        {
            invoiceNo: 'INV004',
            id: 4,
            customerName: 'Sarah Williams',
            itemsName: ['Item G', 'Item H'],
            orderDate: '2023-07-04',
            status: 'Pending',
            price: 120.75
        },
        {
            invoiceNo: 'INV005',
            id: 5,
            customerName: 'David Brown',
            itemsName: ['Item I', 'Item J', 'Item K'],
            orderDate: '2023-07-05',
            status: 'Paid',
            price: 90.5
        }
    ];

    return (
        <div className='p-3'>

            {/* Topbar for filtering */}
            <div className='flex justify-evenly'>

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                <select defaultValue="Light mode" className="select select-accent w-full max-w-xs">
                    <option disabled>  Date range </option>
                    <option>Auto</option>
                    <option>Dark mode</option>
                    <option>Light mode</option>
                </select>

                <select defaultValue="Status" className="select select-accent w-full max-w-xs">
                    <option disabled >  Status</option>
                    <option>Auto</option>
                    <option>Dark mode</option>
                    <option>Light mode</option>
                </select>

                <select defaultValue="Dark mode or light mode?" className="select select-accent w-full max-w-xs">
                    <option disabled></option>
                    <option>Auto</option>
                    <option>Dark mode</option>
                    <option>Light mode</option>
                </select>

            </div>

            {/* invoices */}
            <div className='my-8 bg-slate-50 shadow rounded p-5'>
                <div className='flex gap-3 justify-between items-center mb-3'>
                    <h2 className='my-subtitle text-slate-600'>All invoices</h2>
                    <div className='relative'><input placeholder='Filter...' type='text' className='my-inp !bg-[#081229] !pl-8 !text-slate-50' /> <span className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-50'><FaSearch></FaSearch></span> </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Id</th>
                                <th>Customer Name</th>
                                <th>Items Name</th>
                                <th>Order date</th>
                                <th>Status</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                invoices.map((invoice, ind) => {
                                    const { invoiceNo, id, customerName, itemsName, orderDate, status, price } = invoice || {}
                                    const itemsNameColor = ['#FF0000', '#990099', '#003366']
                                    return <tr key={ind}>
                                        <th>{id}</th>
                                        <td>{invoiceNo}</td>
                                        <td>{customerName}</td>
                                        <td>{itemsName.map((item, ind) => <span key={ind} className='mx-2' style={{ color: itemsNameColor[ind] }}>{item}</span>)}</td>
                                        <td>{orderDate}</td>
                                        <td>{status}</td>
                                        <td>${price}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Invoices;