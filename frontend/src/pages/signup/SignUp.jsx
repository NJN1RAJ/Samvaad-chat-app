import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col min-w-96 mx-auto justify-center items-center">
      <div className="bg-white w-full h-full p-6 rounded-lg">
        <h1 className="text-3xl ubuntu-medium text-center text-black">
          Signup <span className="text-blue-500">ChatApp</span>
        </h1>
        <form>
          <div className="mt-8">
            <label className="label ">
              <span className="text-base label-text ubuntu-medium">
                FullName
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="">
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
          <div className="">
            <label className="label ">
              <span className="text-base label-text ubuntu-medium">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Re enter password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <GenderCheckBox />

          <span className="mt-5 text-sm text-gray-400">
            Already have an account?{" "}
            <a
              href="#"
              className="text-sm hover:underline ubuntu-medium hover:text-black mt-2 inline-block text-gray-600"
            >
              Login
            </a>
          </span>
          <div className="">
            <button className="btn btn-neutral mt-5 block min-w-full text-lg">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
