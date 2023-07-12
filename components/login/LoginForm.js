import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { signIn } from "next-auth/react"

export default function LoginForm() {
  

  return (
    <div className="py-20 mx-auto flex justify-center items-center lg:w-[50%]">
      <div className="bg-white w-[380px] md:w-[450px] mx-auto rounded-md shadow-lg p-5">
        <h1 className="font-bold text-center text-2xl mb-10 text-slate-700">
          ورود
        </h1>
        <div
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="group mb-2 flex justify-center items-center gap-2 bg-blue-100 hover:bg-blue-300 duration-200 cursor-pointer rounded-md h-11"
        >
          <FcGoogle className="text-2xl" />
          <h1 className="text-lg text-blue-800 font-bold group-hover:text-blue-900 duration-200">
            ورود با Google
          </h1>
        </div>
        <div
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="group pt-3 flex justify-center h-11 gap-2 bg-slate-800 hover:bg-slate-900 duration-200 cursor-pointer rounded-md "
        >
          <BsGithub className="text-2xl text-white" />
          <h1 className="text-lg text-white font-bold duration-200">
            ورود با GitHub
          </h1>
        </div>
      </div>
    </div>
  );
}
