import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-w-[300px] sm:min-w-96 mx-auto px-4 sm:px-0">
      <div className="w-full p-4 sm:p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-300">
          Login
        </h1>
        <form action="">
          <div className="mb-3 sm:mb-4">
            <label className="label p-1 sm:p-2">
              <span className="text-sm sm:text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-9 sm:h-10 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="username"
            />
          </div>
          <div className="mb-3 sm:mb-4">
            <label className="label p-1 sm:p-2">
              <span className="text-sm sm:text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-9 sm:h-10 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="password"
            />
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-sm sm:text-base">
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>
          <div>
            <button className="w-full btn btn-xs sm:btn-sm md:btn-md  mt-2 border border-slate-700 py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg transition-colors text-sm sm:text-base">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
