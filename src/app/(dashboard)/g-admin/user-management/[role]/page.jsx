"use client";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";
import placeholder from "../../../../../../public/male-placeholder-image.jpeg";
import { useGetUsersQuery } from "@/redux-toolkit/slice/adminApis/adminGetApies";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TapLink from "@/components/shared/TapLink";

const UserManagementPage = () => {
  const {handleSubmit, register} = useForm()
  const { role } = useParams();
  const { axiosSecure } = useAxiosSecure();
  const [users, setUsers] = useState()
  const { data: all_users, isLoading } = useGetUsersQuery(role);

  useEffect(() => {
    setUsers(all_users)
    //// console.log(users)
  },[all_users])

  const options = [
    { value: "customer", label: "Customer" },
    { value: "seller", label: "Seller" },
    { value: "admin", label: "Admin" },
  ];
  
  const updateOrderStatus = (role, userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are changed User Role",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {
          role,
          userId,
        };
        axiosSecure.patch("/admin/update-user-role", data).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Role has Changed",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  const search = (data) => {
    axiosSecure(`/admin/search-products?query=${data.search_text}`).then(
      (res) => {
        //// console.log(res)
        setUsers(res.data);
      }
    );
  };

  if (isLoading) return "loading";
  return (
    <div className="p-3">
      <div className="my-8 bg-slate-50 shadow rounded p-5">
        <div className="flex gap-3 justify-between items-center mb-3">
          <h2 className="my-subtitle text-slate-600">All Users</h2>
        </div>

        <div className="relative ">
          <ul className="flex gap-5 items-stretch my-5 py-2">
            <TapLink href="/g-admin/user-management/all_users">
              All Users
            </TapLink>
            <TapLink href="/g-admin/user-management/customer">Customer</TapLink>
            <TapLink href="/g-admin/user-management/seller">Seller</TapLink>
            <TapLink href="/g-admin/user-management/admin">Admin</TapLink>
          </ul>
          <hr className="-mt-[29px]" />
        </div>
        <form
          onSubmit={handleSubmit(search)}
          className="relative mx-auto w-[80%] flex justify-center my-8"
        >
          <input
            name="search_text"
            {...register("search_text")}
            placeholder="search here..."
            type="text"
            className="bg-white py-3 w-full pl-14 border-2 rounded-full outline-none border-stone-300 text-black"
          />{" "}
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 left-5 text-stone-300"
          >
            <FaSearch></FaSearch>
          </button>
        </form>

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
              {users &&
                users.map((user, i) => {
                  const { _id, name, role, photo_url, email } = user || {};
                  return (
                    <tr key={_id}>
                      <th>{i + 1}</th>
                      <td>
                        <span className="border block  w-[60px] h-[60px] relative rounded overflow-hidden">
                          <Image
                            style={{ objectFit: "cover" }}
                            src={photo_url || placeholder}
                            fill={true}
                            alt="user Phone"
                          />
                        </span>
                      </td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{role}</td>
                      <td>
                        <select
                          defaultValue={role}
                          onChange={(e) =>
                            updateOrderStatus(e.target.value, _id)
                          }
                          className="px-4 py-2 border bg-none"
                          name=""
                          id=""
                        >
                          {options.map((option, i) => (
                            <option key={i} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagementPage;
