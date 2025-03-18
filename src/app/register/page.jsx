import React from "react";

function RegisterPage() {
  return (
    <div>
      <div className="">
        <div className="container px-4 pt-10 flex flex-col items-center">
          <h1 className="font-bold text-center text-3xl pb-5">Gegister</h1>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="First name"
              className="border w-[760px] p-4 border-gray-400"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border w-[760px] p-4 border-gray-400"
            />
            <input
              type="text"
              placeholder="User name"
              className="border w-[760px] p-4 border-gray-400"
            />
            <input
              type="password"
              placeholder="Pasword"
              className="border w-[760px] p-4 border-gray-400"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="border w-[760px] p-4 border-gray-400"
            />
            <button className="bg-amber-400 mt-5 p-4">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
