import axios from "axios";
import toast from "react-hot-toast";
import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import OtherUsers from "./OtherUsers";

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/users/logout",
        { withCredentials: true }
      );
      if (response.data.success) {
        navigate("/login");
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form action="" className="flex items-center gap-1">
        <input
          className="input input-bordered rounded-md"
          placeholder="Search..."
          type="text"
        />
        <button type="submit" className="btn bg-green-700">
          <BiSearchAlt2 className="w-6 h-6 outline-none" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />
      <div className="mt-2">
        <button onClick={logoutHandler} className="btn btn-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
