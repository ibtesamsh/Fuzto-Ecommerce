import React, { useState } from "react";
import image from "../../assets/Images/India.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

function Login() {
  const [change, setChange] = useState(false);

  return (
    
 
    <div className="w-full flex  justify-center items-center">
      <div className="flex flex-col items-center justify-center text-center m-10 p-10 bg-white rounded-lg shadow-md ">
        <h1 className="text-3xl font-bold mb-4">LOGIN WITH OTP</h1>
        <p className="mb-6 text-gray-600 text-[12px]">
          {change
            ? "Please enter your email address"
            : "Please enter your 10-digit mobile number"}
        </p>

        <div className="border rounded-xl flex flex-row items-center h-10 px-5 shadow">
          {change ? (
            ""
          ) : (
            <img src={image} className="w-10 h-10 mr-2 py-1" alt="India" />
          )}
          <input
            type={change ? "email" : "number"}
            className="flex-1 m-2 rounded-lg border border-transparent  outline-none px-2"
            placeholder={change ? "Email" : "Phone Number"}
            pattern="[0-9]*"
            maxLength="10"
          />
        </div>

        <button className="mt-6 bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
          Request OTP
        </button>
        <p className="mt-2 text-[10px]">
          {change
            ? "A 6 digit OTP will be sent to your email address"
            : "A 6 digit OTP will be sent to your phone number"}
        </p>

        <p className="m-2 p-2 ">---------- Or Sign-in with ----------</p>
        <button
          className="mt-4 bg-white border text-black py-2 px-4 rounded-lg flex flex-row w-40 justify-center"
          onClick={() => {
            setChange(!change);
          }}
        >
          {change ? (
            <BsTelephone className="my-auto text-[25px] justify-center " />
          ) : (
            <HiOutlineMail className="my-auto text-[25px] justify-center " />
          )}
          {change ? "Phone" : "Email"}
        </button>
      </div>
    </div>
    
  );
}

export default Login;
