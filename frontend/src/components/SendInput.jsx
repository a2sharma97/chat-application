import axios from "axios";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const SendInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);
  // if (!selectedUser) return;

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/messages/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      // console.log(messages);
      dispatch(setMessages([...messages, response?.data?.data?.message]));
    } catch (error) {
      console.log(error);
    } finally {
      setMessage("");
    }
  };
  return (
    <form onSubmit={onsubmitHandler} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send a message..."
          className="border text-sm rounded-lg block w-full bg-neutral-300 text-neutral-950 p-3 border-neutral-400"
        />
        <button
          type="submit"
          className="absolute flex items-center inset-y-0 end-0 pr-3"
        >
          <IoSend className="w-5 h-5 text-neutral-800" />
        </button>
      </div>
    </form>
  );
};

export default SendInput;
