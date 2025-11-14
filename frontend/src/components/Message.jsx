import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ msg }) => {
  const scroll = useRef();
  const { authUser, selectedUser } = useSelector((store) => store.user);
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [msg]);
  // console.log("authUserId ", authUser?._id);
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
              alt="profile picture"
              src={
                msg?.senderId === authUser?._id
                  ? authUser?.profilePicture
                  : selectedUser?.profilePicture
              }
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
