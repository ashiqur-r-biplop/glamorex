"use client";
import { IoMdClose } from "react-icons/io";
import { fetchBlogs } from "@/redux-toolkit/slice/blogReducer/blogSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import moment from "moment";
import BlogCard from "@/components/custormer/blog/BlogCard";

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blog, setBlog] = useState({});
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs) || [];
  const showDetails = async (id) => {
    setIsOpen(true);
    const res = await axios.get("/blogs.json");
    const blog = res.data.find((blog) => blog._id === id);
    setBlog(blog);
  };
  const hideDetails = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  return (
    <main className="container mx-auto">
      <div
        className={`${
          isOpen ? "" : "hidden"
        } w-[100vw] z-10 bg-black blur-xl bg-opacity-50 h-screen left-0 right-0 top-0 bottom-0 fixed`}
      ></div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[90%] md:h-auto p-10 shadow-md border rounded bg-white`}
      >
        <button
          onClick={hideDetails}
          className="w-[25px] absolute -top-4 -right-4 h-[25px] rounded-full bg-red-700 text-white flex justify-center cursor-pointer items-center ml-auto"
        >
          <IoMdClose className="text-white" />
        </button>

        <section className="md:grid md:grid-cols-2 gap-5 relative z-20">
          <div className="flex items-center">
            <img className="w-full" src={blog.thumbnail} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-[700]">{blog.title}</h2>
            <p className="mt-3">{blog.blog_details}</p>
            <p className="flex items-center gap-4 my-3">
              <span className="text-md font-bold">Publish On:</span>
              <span>{moment(blog.publish_date).format("DD/MM/YYYY")}</span>
            </p>
            <div className="flex gap-5 items-center">
              <p className="text-md font-bold">Tags:</p>
              <ul className="flex flex-wrap gap-3">
                {blog?.tags &&
                  blog?.tags.map((tag, i) => (
                    <li
                      key={i}
                      className="h-[30px] flex justify-center items-center whitespace-nowrap rounded-full px-4 py-2 text-white bg-sky-700"
                    >
                      {tag}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <section className="grid md:grid-cols-3 gap-5 mt-[140px] mb-[140px]">
        {!blogs.isLoading &&
          blogs.map((blog, id) => (
            <BlogCard
              showDetails={showDetails}
              hideDetails={hideDetails}
              key={id}
              blog={blog}
            />
          ))}
      </section>
    </main>
  );
};

export default BlogPage;
