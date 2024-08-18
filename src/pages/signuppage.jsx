import React, { useEffect, useState } from 'react'
import { variables } from '../data/Variables'
import { useForm } from 'react-hook-form'
import Custombutton from '../components/Custombutton'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { setuserdata } from "../store/Authslice"
import { sendotp } from '../services/Authservices'
import { FaRegEye } from "react-icons/fa"
import { IoEyeOffSharp } from "react-icons/io5"
import loginimage from "../assets/loginimage.avif"

const Signuppage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    setValue
  } = useForm();
  
  const [tab, setTab] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signuppagehandler = async (data) => {
    console.log("form data is =>", data);
    if(tab=="Student"){
      data.secretkey="11111";
    }
    if (data.password !== data.confirmpassword) {
      return toast.error("Passwords do not match.")
    }
    dispatch(setuserdata(data));
    dispatch(sendotp(data.email, navigate))
  }

  useEffect(() => {
    register("accounttype", {
      required: { value: true }
    });
    setValue("accounttype", "Student");
  }, [register, setValue]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        confirmpassword: "",
      })
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center justify-center'>
      <div className='bg-gray-700 rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden my-20'>
        <div className='w-full lg:w-1/2 p-8 lg:p-12'>
          <h2 className='text-4xl text-white font-bold mb-6'>
            Welcome to the College Intern & Placement Portal
          </h2>
          <p className='text-gray-300 mb-6'>
            Sign up to stay updated on the latest internship opportunities and placement news. <span className='text-blue-400'>Empowering your career with every update.</span>
          </p>
          <div className='flex gap-4 mb-6 bg-gray-600 p-1 rounded-full'>
            <span
              className={`p-3 cursor-pointer rounded-full flex-1 text-center font-medium transition-colors duration-300 ${tab === "Student" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-500"}`}
              onClick={() => { setValue("accounttype", "Student"); setTab("Student") }}
            >
              {variables.student}
            </span>
            <span
              className={`p-3 cursor-pointer rounded-full flex-1 text-center font-medium transition-colors duration-300 ${tab === "Alumni" ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-500"}`}
              onClick={() => { setValue("accounttype", "Alumni"); setTab("Alumni") }}
            >
              {variables.alumni}
            </span>
          </div>
          <form onSubmit={handleSubmit(signuppagehandler)} className='space-y-6'>
            <div className='lg:flex gap-6'>
              <div className='flex-1'>
                <label className='text-gray-400' htmlFor='firstname'>First Name<sup className="text-red-400">*</sup></label>
                <input
                  className='w-full mt-1 p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  type='text'
                  placeholder='Enter First Name'
                  name='firstname'
                  id='firstname'
                  {...register("firstname", {
                    required: { value: true, message: "Enter First Name" },
                  })}
                />
                {errors.firstname && <span className='text-red-400'>{errors.firstname.message}</span>}
              </div>
              <div className='flex-1'>
                <label className='text-gray-400' htmlFor='lastname'>Last Name<sup className="text-red-400">*</sup></label>
                <input
                  className='w-full mt-1 p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  type='text'
                  placeholder='Enter Last Name'
                  name='lastname'
                  id='lastname'
                  {...register("lastname", {
                    required: { value: true, message: "Enter Last Name" }
                  })}
                />
                {errors.lastname && <span className='text-red-400'>{errors.lastname.message}</span>}
              </div>
            </div>
            <div>
              <label className='text-gray-400' htmlFor='email'>Email Address<sup className="text-red-400">*</sup></label>
              <input
                className='w-full mt-1 p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                type='email'
                placeholder='Enter Email Address'
                id='email'
                name='email'
                {...register("email", {
                  required: { value: true, message: "Enter Email Address" }
                })}
              />
              {errors.email && <span className='text-red-400'>{errors.email.message}</span>}
            </div>
            <div className='lg:flex gap-6'>
              <div className='flex-1 relative'>
                <label className='text-gray-400' htmlFor='password'>Password<sup className="text-red-400">*</sup></label>
                <input
                  className='w-full mt-1 p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  id='password'
                  name='password'
                  {...register("password", {
                    required: { value: true, message: "Enter Password" }
                  })}
                />
                <span className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400' onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaRegEye /> : <IoEyeOffSharp />}
                </span>
                {errors.password && <span className='text-red-400'>{errors.password.message}</span>}
              </div>
              <div className='flex-1 relative'>
                <label className='text-gray-400' htmlFor='confirmpassword'>Confirm Password<sup className="text-red-400">*</sup></label>
                <input
                  className='w-full mt-1 p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  id='confirmpassword'
                  name='confirmpassword'
                  {...register("confirmpassword", {
                    required: { value: true, message: "Enter Confirm Password" }
                  })}
                />
                <span className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-400' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <FaRegEye /> : <IoEyeOffSharp />}
                </span>
                {errors.confirmpassword && <span className='text-red-400'>{errors.confirmpassword.message}</span>}
              </div>
            </div>
            <div>
              {tab!="Student" ? <div>
                <label className='text-gray-400' htmlFor='email'>Secret Key<sup className="text-red-400">*</sup></label>
              <input
                className='w-full mt-1 p-3 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                type='text'
                placeholder='Enter Secret Key'
                id='secretkey'
                name='secretkey'
                {...register("secretkey", {
                  required: { value: true, message: "Enter Secret Key" }
                })}
              />
              {errors.secretkey && <span className='text-red-400'>{errors.secretkey.message}</span>}
              </div> : null}
            </div>
            <Custombutton text={"Sign Up"} styles={"bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"} />
          </form>
        </div>
        <div className='lg:flex lg:w-1/2'>
          <img src={loginimage} alt="Sign Up" className='object-cover h-full w-full' />
        </div>
      </div>
    </div>
  )
}

export default Signuppage
