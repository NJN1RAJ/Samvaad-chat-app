import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto ">
      <div className="bg-white w-full h-full p-6 rounded-lg">
        <h1 className="text-3xl ubuntu-medium text-center text-black">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          <div className="mt-8">
            <label className="label ">
              <span className="text-base label-text ubuntu-medium">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="">
            <label className="label ">
              <span className="text-base label-text ubuntu-medium">
                Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <span className="mt-5 text-sm text-gray-400">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-sm hover:underline ubuntu-medium hover:text-black mt-2 inline-block text-gray-600"
            >
              SignUp
            </a>
          </span>
          <div className="">
            <button className="btn btn-neutral mt-5 block min-w-full text-lg">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
