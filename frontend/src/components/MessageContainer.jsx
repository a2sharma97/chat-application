import { useSelector } from "react-redux";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const { selectedUser } = useSelector((store) => store.user);
  return (
    <div className="md:min-w-[550px]  flex flex-col">
      <div className="flex gap-2 items-center bg-green-800 px-4 py-2 mb-2 text-white">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src={selectedUser?.profilePicture} alt="user-profile" />
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="flex gap-2 flex-1 ">
            <p>{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
};

export default MessageContainer;
