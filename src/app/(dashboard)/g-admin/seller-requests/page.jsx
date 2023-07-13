"use client"
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import { useGetRequestedUsersQuery } from '@/redux-toolkit/slice/adminApis/adminGetApies';


const SellerRequestPage = () => {
    const {data: users, isLoading} = useGetRequestedUsersQuery()
    // const users = [
    //     {
            
    //         _id: 1,
    //         name: 'John Doe',
    //         role: "customer",
    //         email: "demo@gmail.com",
    //         message: "please make make seller",
    //         photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
    //     },
    //     {
    //         _id: 2,
    //         name: 'Jane Smith',
    //         role: "customer",
    //         email: "demo@gmail.com",
    //         message: "please make make seller",
    //         photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
    //     },
    //     {
    //         _id: 3,
    //         name: 'Mike Johnson',
    //         role: "customer",
    //         email: "demo@gmail.com",
    //         message: "please make make seller",
    //         photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
    //     },
    //     {
    //         _id: 4,
    //         name: 'Sarah Williams',
    //         role: "customer",
    //         email: "demo@gmail.com",
    //         message: "please make make seller",
    //         photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
    //     },
    //     {
    //         _id: 5,
    //         name: 'David Brown',
    //         role: "customer",
    //         email: "demo@gmail.com",
    //         message: "please make make seller",
    //         photo_url: "https://i.ibb.co/cbB7cV8/les-wise.png"
    //     }
    // ];

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
    if(isLoading) return "loading"
    return (
        <div className='p-3'>
        <div className='my-8 bg-slate-50 shadow rounded p-5'>
            <div className='flex gap-3 justify-between items-center mb-3'>
                <h2 className='my-subtitle text-slate-600'>All Requests</h2>
               
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
                            <th>Message</th>
                            <th>Role</th>
                            <th>Make Seller</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users && users.map((user, i) => {
                                const {_id, name, role,photo_url ,message, email} = user || {}
                                return <tr key={_id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <span className='border block  w-[60px] h-[60px] relative rounded overflow-hidden'>
                                            <Image style={{objectFit: "cover"}} src={photo_url} fill={true} alt='user Phone'/>
                                        </span>
                                    </td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{message}</td>
                                    <td>{role}</td>
                                    <td>
                                    <span className="p-3 rounded border border-[#14a650] cursor-pointer text-[#14a650] bg-[#14a65122] inline-block mx-2" ><MdDone/></span><span className='p-3 rounded border border-[#a61414] cursor-pointer text-[#a61414] bg-[#a6141922] inline-block mx-2'  ><IoCloseOutline/></span>
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

export default SellerRequestPage;












