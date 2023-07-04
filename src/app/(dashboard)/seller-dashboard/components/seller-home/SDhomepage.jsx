'use client'
import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
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


    const data = [
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

    return (
        <div className='p-8 bg-slate-100 h-full'>

            {/* stats */}
            <div className='grid grid-cols-4 gap-5'>


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


            <div className='grid grid-cols-12'>

                <div className='col-span-5'>
                    
                </div>


                {/* Seller analytics chart */}
                <div className='my-16 h-[500px] col-span-7'>
                    <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
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


        </div >
    );
};

export default SDhomepage;