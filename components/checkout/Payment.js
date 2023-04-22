import "react-toastify/dist/ReactToastify.css";

import AddressInfo from "./AddressInfo";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { CgBorderStyleDotted } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import PayInfo from "./PayInfo";
import PersonInfo from "./PersonInfo";
import React, { useContext } from "react";
import { FaCcPaypal } from "react-icons/fa";
import { StepContext } from "./Checkout";

const Payment = () => {
  const { step } = useContext(StepContext);
  return (
    <div className="bg-gray-100 lg:w-[60%]">
      <div className="flex justify-center mt-20">
        <div
          className={`flex items-center text-3xl ${
            step.person ? "text-green-600" : "text-gray-400"
          }`}
        >
          <FaUserTie />
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
        </div>
        <div
          className={`flex items-center text-3xl ${
            step.person && step.address ? "text-green-600" : "text-gray-400"
          }`}
        >
          <BsFillHouseDoorFill />
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
          <CgBorderStyleDotted />
        </div>
        <div
          className={`text-3xl ${
            step.pay ? "text-green-600" : "text-gray-400"
          }`}
        >
          <FaCcPaypal />
        </div>
      </div>
      {
        step.pay &&
        <BsFillPatchCheckFill className="mx-auto text-5xl text-blue-400 mt-10" />
      }
      {!step.person ? (
        <PersonInfo />
      ) : step.address ? (
        <PayInfo />
      ) : (
        <AddressInfo />
      )}{" "}
    </div>
  );
};

export default Payment;
