import React from "react";
import { useMutation } from "@tanstack/react-query";
import { getLoginToken } from "../api";

function Login() {
  const loginMutation = useMutation(getLoginToken);

  const loginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    loginMutation.mutate(formData, {
      onSuccess: (data) => {
        console.log("Mutation success:", data);
      },
    });
  };
  return (
    <div className="w-full text-white h-full flex justify-center items-center">
      <form
        className="bg-gray-900 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={loginSubmit}
      >
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2">
            Username
          </label>
          <input
            name="username" // Added the 'name' attribute to the input
            defaultValue="sanskardwivedi003@gmail.com" // Use defaultValue instead of value
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-bold mb-2">
            Password
          </label>
          <input
            name="password" // Added the 'name' attribute to the input
            defaultValue="sanskar@123" // Use defaultValue instead of value
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
