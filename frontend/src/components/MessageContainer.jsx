import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  return (
    <div className="md:min-w-[550px]  flex flex-col">
      <div className="flex gap-2 items-center bg-green-800 px-4 py-2 mb-2 text-white">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img
              src="https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg"
              alt="user-profile"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <div className="flex gap-2 flex-1 ">
            <p>abhishek</p>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
};

export default MessageContainer;
