import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";
import Messages from "./Messages";
import SendInput from "./SendInput";

const MessageContainer = () => {
  const { selectedUser, authUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);

  return (
    <>
      {selectedUser !== null ? (
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
      ) : (
        <div className="md:min-w-[550px]  flex flex-col justify-center items-center">
          <h1 className="font-medium">
            Hi{" "}
            {authUser?.username[0].toUpperCase() + authUser?.username.slice(1)}
          </h1>
          <h1 className="text-2xl font-medium">Please select a user</h1>
        </div>
      )}
    </>
  );
};

export default MessageContainer;
