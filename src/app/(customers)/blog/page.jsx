"use client";
import { IoMdClose } from "react-icons/io";
import { fetchBlogs } from "@/redux-toolkit/slice/blogReducer/blogSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/blog/BlogCard";
import axios from "axios";

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
        } z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70vh] p-10 shadow-md border rounded bg-white`}
      >
        <button
          onClick={() => hideDetails}
          className="w-[25px] h-[25px] rounded-full bg-red-700 text-white flex justify-center cursor-pointer items-center ml-auto"
        >
          <IoMdClose className="text-white" />
        </button>
        <section className="grid md:grid-cols-2 gap-5">
          <img className="w-full" src={blog.thumbnail} alt="" />
          <div>
            <h2 className="text-2xl font-[700]">{blog.title}</h2>
            <p className="mt-3">{blog.blog_details}</p>
          </div>
        </section>
      </div>
      <section className="grid md:grid-cols-3 gap-5">
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
