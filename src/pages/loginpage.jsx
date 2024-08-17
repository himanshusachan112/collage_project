import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { login } from '../services/Authservices';
import Custombutton from '../components/Custombutton';
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import loginimage from "../assets/loginimage.avif";

const Loginpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showpassword, setshowpassword] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        password: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const formsubmithandler = (data) => {
    dispatch(login(data.email, data.password, navigate));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto p-8 bg-gray-900 rounded-lg shadow-2xl">
        <div className="space-y-6">
          <div className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Welcome Back
          </div>
          <p className="text-gray-400 text-lg text-center">
            Build skills for today, tomorrow, and beyond.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400 font-medium">
              Education to future-proof your career.
            </span>
          </p>
          <form onSubmit={handleSubmit(formsubmithandler)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-400">
                Email address <sup className="text-red-500">*</sup>
              </label>
              <input
                className="w-full p-3 mt-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                name="email"
                type="email"
                id="email"
                {...register("email", {
                  required: { value: true, message: "Enter email address" },
                })}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-400">
                Password <sup className="text-red-500">*</sup>
              </label>
              <div className="flex items-center mt-2">
                <input
                  className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  name="password"
                  id="password"
                  type={showpassword ? "text" : "password"}
                  {...register("password", {
                    required: { value: true, message: "Enter the Password" },
                  })}
                />
                <span
                  onClick={() => setshowpassword(!showpassword)}
                  className="cursor-pointer ml-3"
                >
                  {showpassword ? <FaRegEye className="text-blue-400" /> : <IoEyeOffSharp className="text-blue-400" />}
                </span>
              </div>
              <Link to="/forgotpassword">
                <div className="mt-2 text-right text-sm text-pink-400 hover:underline">
                  Forgot Password?
                </div>
              </Link>
              {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            <div>
              <Custombutton text={"Sign In"} styles={"w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"} />
            </div>
          </form>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src={loginimage} alt="Login Illustration" className="rounded-lg shadow-lg w-full border-4 border-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
