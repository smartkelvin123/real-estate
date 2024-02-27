import React from "react";

const SignOut = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-cente font-semibold my-7">SignOut</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="userName"
          className="input input-bordered w-full max-w-xs  rounded-lg"
          id="userName"
        />
        <input
          type="text"
          placeholder="email"
          className="input input-bordered w-full max-w-xs rounded-lg "
          id="email"
        />
        <input
          type="password"
          placeholder="userName"
          className="input input-bordered w-full max-w-xs rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-slate-100 p-3 rounded-lg  uppercase hover:opacity-95 disabled:opacity-80">
          Sign-up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 hover:underline ">Sign-in</span>
        </Link>
      </div>
    </div>
  );
};

export default SignOut;
