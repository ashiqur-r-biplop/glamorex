
import Image from "next/image";
import Link from "next/link";
import { BsEyeFill } from "react-icons/bs";


const BlogCard = ({blog, showDetails}) => {
    const {_id, title, description, views, publish_date, labels, thumbnail} = blog
    return (
        <article className="w-full border rounded p-5">
            <div className="w-full  h-[200px] relative">
                <Image src={thumbnail} className="rounded-md" fill={true} alt="blog image" />
            </div>
            <div className="mt-8">
                <h2 className={ " text-xl font-[700] "}>{title}</h2>
                <p>{description}</p>
            <div className="flex gap-5 items-center my-3">
                <p className="text-md font-bold">Labels:</p>
                <ul className="flex flex-wrap gap-3">
                  {
                    blog?.labels && blog?.labels.map((label, i) => <li className="h-[30px] flex justify-center items-center whitespace-nowrap rounded-full px-4 py-2 text-white bg-sky-700">{label}</li>)
                  }
                </ul>
            </div>
                <div className="flex justify-between items-center mt-5">
                    <p className="flex gap-1 items-center"><BsEyeFill/><span>{views}</span></p>
                    <button onClick={() => showDetails(_id)}>Read more..</button>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;