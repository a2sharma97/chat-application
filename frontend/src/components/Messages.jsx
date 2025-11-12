import { useSelector } from "react-redux";
import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  useGetMessages();
  const { messages } = useSelector((store) => store.message);
  // console.log("messages list:", messages);

  if (!messages) return;
  return (
    <div className="px-4 flex-1 overflow-auto ">
      {messages?.map((msg) => {
        return <Message key={msg?._id} msg={msg} />;
      })}
    </div>
  );
};

export default Messages;
