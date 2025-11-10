import useGetMessages from "../hooks/useGetMessages";
import Message from "./Message";

const Messages = () => {
  useGetMessages();
  return (
    <div className="px-4 flex-1 overflow-auto ">
      <Message />
    </div>
  );
};

export default Messages;
