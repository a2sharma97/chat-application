import useGetOtherUsers from "../hooks/useGetOtherUsers";
import OtherUser from "./OtherUser";

// 4 05
const OtherUsers = () => {
  useGetOtherUsers();
  return (
    <div className="overflow-auto">
      <OtherUser />
    </div>
  );
};

export default OtherUsers;
