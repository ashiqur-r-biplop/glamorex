import Image from "next/image";
import supportImage from "../../../../../public/male-placeholder-image.jpeg"

const SupportPage = () => {
    return (
        <main className="md:w-[800px] mx-auto h-[70vh] mt-[100px] border rounded-xl p-10 relative">
            <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full overflow-hidden">
            <Image fill={true} alt="user image" src="https://i.ibb.co/cbB7cV8/les-wise.png" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">HI I need help</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 overflow-hidden rounded-full">
            <Image src={supportImage} alt="support image" fill={true}/>
          </div>
        </div>
        <div className="chat-header">
          support Team
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">Yes</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-3 w-full ">
        <form className="flex justify-center items-center gap-5 h-[40px]">
            <input className="border h-full py-2 px-6 rounded outline-none w-[60%] " type="text" name="" id="" placeholder="write your massage"/>
            <button className="my-btn-one !h-full">Send</button>
        </form>
      </div>
        </main>
    );
};

export default SupportPage;