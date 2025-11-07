import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleCheckbox = (gender) => {
    setUser({ ...user, gender });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }

    setUser({
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    });
  };

  return (
    <div className="min-w-[300px] sm:min-w-96 mx-auto px-4 sm:px-0">
      <div className="w-full p-4 sm:p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-300">
          Signup
        </h1>
        <form onSubmit={onSubmitHandler} action="">
          <div className="mb-2 sm:mb-1">
            <label className="label p-1 sm:p-2">
              <span className="text-sm sm:text-base label-text">FullName</span>
            </label>
            <input
              type="text"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full input input-bordered h-9 sm:h-10 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="fullname"
            />
          </div>
          <div className="mb-2 sm:mb-1">
            <label className="label p-1 sm:p-2">
              <span className="text-sm sm:text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full input input-bordered h-9 sm:h-10 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="username"
            />
          </div>
          <div className="mb-2 sm:mb-1">
            <label className="label p-1 sm:p-2">
              <span className="text-sm sm:text-base label-text">Email</span>
            </label>
            <input
              type="text"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full input input-bordered h-9 sm:h-10 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="email"
            />
          </div>
          <div className="mb-2 sm:mb-1">
            <label className="label p-1 sm:p-2">
              <span className="text-sm sm:text-base label-text">Password</span>
            </label>
            <input
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full input input-bordered h-9 sm:h-10 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="password"
            />
          </div>
          <div className="mb-2 sm:mb-1">
            <label className="label p-1 sm:p-2">
              <span className="text-sm sm:text-base label-text">
                Confirm password
              </span>
            </label>
            <input
              type="password"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              className="w-full input input-bordered h-9 sm:h-10 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="confirm password"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center my-3 sm:my-4">
            <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
              <p className="text-sm sm:text-base">Male</p>
              <input
                type="checkbox"
                checked={user.gender === "MALE"}
                onChange={() => handleCheckbox("MALE")}
                defaultChecked
                className="checkbox checkbox-sm sm:checkbox-md mx-2"
              />
            </div>
            <div className="flex items-center">
              <p className="text-sm sm:text-base">Female</p>
              <input
                type="checkbox"
                checked={user.gender === "FEMALE"}
                onChange={() => handleCheckbox("FEMALE")}
                className="checkbox checkbox-sm sm:checkbox-md mx-2"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full btn btn-xs sm:btn-sm md:btn-md  mt-2 border border-slate-700 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
