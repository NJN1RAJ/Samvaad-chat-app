import React, { useRef, useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const fullNameRef = useRef();
  const usernameRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const { loading, signUp } = useSignUp();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let fullName = fullNameRef.current.value;
    let username = usernameRef.current.value;
    let password = passRef.current.value;
    let confirmPassword = confirmPassRef.current.value;

    await signUp(fullName, username, password, confirmPassword, selectedGender);

    fullNameRef.current.value = "";
    usernameRef.current.value = "";
    passRef.current.value = "";
    confirmPassRef.current.value = "";
  };

  return (
    <div className="flex flex-col min-w-96 mx-auto justify-center items-center">
      <div className="bg-white w-full h-full p-6 rounded-lg">
        <h1 className="text-3xl ubuntu-medium text-center text-black">
          Signup <span className="text-blue-500">Samvaad</span>
        </h1>
        <form onSubmit={onSubmitHandler}>
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
              // value={fullNameRef.current.value}
              ref={fullNameRef}
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
              // value={usernameRef.current.value}
              ref={usernameRef}
            />
          </div>
          <div className="">
            <label className="label ">
              <span className="text-base label-text ubuntu-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full max-w-xs"
              ref={passRef}
              // value={passRef.current.value}
            />
          </div>
          <div className="">
            <label className="label ">
              <span className="text-base label-text ubuntu-medium">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Re enter password"
              className="input input-bordered w-full max-w-xs"
              ref={confirmPassRef}
              // value={confirmPassRef.current.value}
            />
          </div>
          <GenderCheckBox onGenderChange={handleGenderChange} />

          <span className="mt-5 text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sm hover:underline ubuntu-medium hover:text-black mt-2 inline-block text-gray-600"
            >
              Login
            </Link>
          </span>
          <div className="">
            <button
              disabled={loading}
              className="btn btn-neutral mt-5 block min-w-full text-lg"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "SignUp"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
