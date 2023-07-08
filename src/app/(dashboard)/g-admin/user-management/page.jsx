"use client"
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import Swal from 'sweetalert2';
import placeholder from "../../../../../public/male-placeholder-image.jpeg"

const UserManagementPage = () => {
    const users = [
        {
            
            _id: 1,
            name: 'John Doe',
            role: "customer",
            email: "demo@gmail.com",
            photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
        },
        {
            _id: 2,
            name: 'Jane Smith',
            role: "customer",
            email: "demo@gmail.com",
            photo_url: null
        },
        {
            _id: 3,
            name: 'Mike Johnson',
            role: "customer",
            email: "demo@gmail.com",
            photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
        },
        {
            _id: 4,
            name: 'Sarah Williams',
            role: "customer",
            email: "demo@gmail.com",
            photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
        },
        {
            _id: 5,
            name: 'David Brown',
            role: "customer",
            email: "demo@gmail.com",
            photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
        }
    ];

    const options = [
        { value: 'customer', label: 'Customer' },
        { value: 'seller', label: 'Seller' },
      ];

    const updateOrderStatus = (status, id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are changed User Role",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Updated!',
                'User Role has Changed',
                'success'
              )
            }
          })
        console.log(status, id)
    }
    return (
        <div className='p-3'>
        <div className='my-8 bg-slate-50 shadow rounded p-5'>
            <div className='flex gap-3 justify-between items-center mb-3'>
                <h2 className='my-subtitle text-slate-600'>All Users</h2>
               
            </div>
        
            <div className='relative '>
                    <ul className='flex gap-5 items-stretch my-5 py-2'>
                        <li className='border-b-2 border-[#0621bb] text-[#0621bb] py-2 uppercase'>All Users</li>
                        <li className='uppercase py-2'>Customers</li>
                        <li className='uppercase py-2'>Sellers</li>
                        <li className='uppercase py-2'>Admins</li>
                    </ul>
                    <hr className='-mt-[29px]'/>
                    
                </div>
            <div className='relative mx-auto w-[80%] flex justify-center my-8'><input placeholder='search here...' type='text' className='bg-white py-3 w-full pl-14 border-2 rounded-full outline-none border-stone-300 text-black' /> <span className='absolute top-1/2 -translate-y-1/2 left-5 text-stone-300'><FaSearch></FaSearch></span> </div>

            {/* Table */}
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Change Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => {
                                const {_id, name, role,photo_url , email} = user || {}
                                return <tr key={_id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <span className='border block  w-[60px] h-[60px] relative rounded overflow-hidden'>
                                            <Image style={{objectFit: "cover"}} src={photo_url || placeholder} fill={true} alt='user Phone'/>
                                        </span>
                                    </td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{role}</td>
                                    <td>
                                    <select defaultValue={role} onChange={(e) => updateOrderStatus(e.target.value, _id)} className='px-4 py-2 border bg-none' name="" id="">
                                        
                                        {
                                            options.map((option, i) => <option key={i}  value={option.value}>{option.label}</option>)
                                        }
                                    </select>

                                    </td>
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

export default UserManagementPage;






