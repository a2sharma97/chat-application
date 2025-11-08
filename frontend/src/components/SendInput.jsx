import { IoSend } from "react-icons/io5";

const SendInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message..."
          className="border text-sm rounded-lg block w-full bg-neutral-300 text-neutral-950 p-3 border-neutral-400"
        />
        <button className="absolute flex items-center inset-y-0 end-0 pr-3">
          <IoSend className="w-5 h-5 text-neutral-800" />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
