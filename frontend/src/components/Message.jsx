import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
// 5 06

const Message = ({ msg }) => {
  // const { authUser } = useSelector((store) => store.user);
  const scroll = useRef();
  const { authUser } = useSelector((store) => store.user);
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);
  return (
    <div>
      <div
        ref={scroll}
        className={`chat ${
          authUser?._id === msg?.senderId ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
            />
          </div>
        </div>
        <div className="chat-header">
          <time className="text-xs opacity-50">12:00</time>
        </div>
        <div className="chat-bubble">{msg?.message}</div>
      </div>
    </div>
  );
};

export default Message;
