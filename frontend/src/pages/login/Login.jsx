import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col justify-center items-center min-w-96 mx-auto ">
      <div className="bg-white w-full h-full p-6 rounded-lg">
        <h1 className="text-3xl ubuntu-medium text-center text-black">
          Login <span className="text-blue-500">Samvaad</span>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="mt-5 text-sm text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-sm hover:underline ubuntu-medium hover:text-black mt-2 inline-block text-gray-600"
            >
              SignUp
            </Link>
          </span>
          <div className="">
            <button
              onClick={handleSubmit}
              className="btn btn-neutral mt-5 block min-w-full text-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
