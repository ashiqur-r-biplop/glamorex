'use client'
import React from 'react';
import { FaDollarSign, FaDotCircle, FaSearch } from 'react-icons/fa';
import { FaArrowDown, FaArrowUp, FaPeopleArrows, FaPeopleGroup, FaProductHunt, FaWallet } from 'react-icons/fa6';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart, Pie, Sector, Cell
} from 'recharts';




const SDhomepage = () => {

    const sellerStats = [
        {
            name: 'Customers',
            icon: <FaPeopleGroup></FaPeopleGroup>,
            total: 150,
            lastWeek: 120,
            get growthPercentage() {
                return ((this.total - this.lastWeek) / this.lastWeek * 100).toFixed(2);
            }
        },
        {
            name: 'Products',
            icon: <FaProductHunt></FaProductHunt>,
            total: 800,
            lastWeek: 700,
            get growthPercentage() {
                return ((this.total - this.lastWeek) / this.lastWeek * 100).toFixed(2);
            }
        },
        {
            name: 'Profit',
            icon: <FaDollarSign></FaDollarSign>,
            total: 2000,
            lastWeek: 2500,
            get growthPercentage() {
                return ((this.total - this.lastWeek) / this.lastWeek * 100).toFixed(2);
            }
        },
        {
            name: 'Revenue',
            icon: <FaWallet />,
            total: 350.00,
            lastWeek: 300.00,
            get growthPercentage() {
                return ((parseFloat(this.total) - parseFloat(this.lastWeek)) / parseFloat(this.lastWeek) * 100).toFixed(2);
            }
        }
    ];


    // right chart data
    const chartData = [
        {
            name: 'Page A',
            uv: 590,
            pv: 800,
            amt: 1400,
        },
        {
            name: 'Page B',
            uv: 868,
            pv: 967,
            amt: 1506,
        },
        {
            name: 'Page C',
            uv: 1397,
            pv: 1098,
            amt: 989,
        },
        {
            name: 'Page D',
            uv: 1480,
            pv: 1200,
            amt: 1228,
        },
        {
            name: 'Page E',
            uv: 1520,
            pv: 1108,
            amt: 1100,
        },
        {
            name: 'Page F',
            uv: 1400,
            pv: 680,
            amt: 1700,
        },
    ];

    // left pie chart data
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

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
        <div className='p-8 bg-slate-100 h-full'>

            {/* stats */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>

                {
                    sellerStats.map((statsData, ind) => {
                        const { name, icon, total, lastWeek, totalGrowth, growthPercentage } = statsData || {}

                        return <div div className={`p-5 space-y-4 rounded-t bg-slate-50 shadow border-b-4  ${growthPercentage > 0 ? 'border-green-500' : 'border-red-500'}`} key={ind}>
                            <div className='flex justify-between items-center gap-2'>
                                <div className={`border-l-2 ${growthPercentage > 0 ? 'border-green-500' : 'border-red-500'} pl-3 space-y-3`}>
                                    <h2 className='my-subtitle text-slate-400'>{name}</h2>
                                    <p className='my-subtitle'> {name === 'Profit' || name === 'Revenue' ? '$' : ''} {total}</p>
                                </div>
                                <span className='text-3xl p-3 bg-slate-500 bg-opacity-30 rounded text-orange-500'>{icon}</span>
                            </div>

                            <p className='text-slate-400 flex items-center gap-2'><span className={`${growthPercentage > 0 ? 'text-green-500' : 'text-red-500'} flex gap-1 items-center`}> {growthPercentage}% {growthPercentage > 0 ? <FaArrowUp></FaArrowUp> : <FaArrowDown></FaArrowDown>}</span> since last week</p>
                        </div>
                    })
                }

            </div>


            {/* chart */}
            <div className='grid grid-cols-12 gap-6'>

                {/* Pie chart needle */}
                <div className='my-16 col-span-12 lg:col-span-5 h-[500px] bg-slate-50 shadow rounded'>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart width={400} height={400}>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>


                {/* Seller analytics chart */}
                <div className='my-16 h-[500px] col-span-12 lg:col-span-7 bg-slate-50 shadow rounded'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            width={500}
                            height={400}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="name" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>

            </div>

            {/* invoices */}
            <div className='my-8 bg-slate-50 shadow rounded p-5'>
                <div className='flex gap-3 justify-between items-center mb-3'>
                    <h2 className='my-subtitle text-slate-600'>Recent invoices</h2>
                    <div className='relative'><input placeholder='Filter...' type='text' className='my-inp !pl-8 !text-slate-50' /> <span className='absolute top-1/2 -translate-y-1/2 left-2 text-slate-50'><FaSearch></FaSearch></span> </div>
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
                                    const {invoiceNo, id, customerName, itemsName, orderDate, status, price} = invoice || {}
                                    const itemsNameColor = ['#FF0000', '#990099', '#003366' ]
                                    return <tr key={ind}>
                                        <th>{id}</th>
                                        <td>{invoiceNo}</td>
                                        <td>{customerName}</td>
                                        <td>{itemsName.map((item, ind)=> <span key={ind} className='mx-2'  style={{ color: itemsNameColor[ind] }}>{item}</span>)}</td>
                                        <td>{orderDate}</td>
                                        <td>{status}</td>
                                        <td>{price}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>


        </div >
    );
};

export default SDhomepage;