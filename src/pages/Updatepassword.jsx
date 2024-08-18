import React, { useState } from 'react';
import Custombutton from '../components/Custombutton';
import { FaRegEye } from "react-icons/fa6";
import { IoEyeOffSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetpassword } from '../services/Authservices';

const Updatepassword = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [showpassword, setshowpassword] = useState(false);
    const [showconfirmpassword, setshowconfirmpassword] = useState(false);
    const [data, setdata] = useState({ password: "", confirmpassword: "" });

    const passwordhandler = (e) => {
        e.preventDefault();
        const { name } = e.target;
        setdata({ ...data, [name]: e.target.value });
        console.log("form data=>", data);
    }

    const setpasswordhandler = () => {
        const { password, confirmpassword } = data;
        const token = location.pathname.split("/").at(-1);
        setdata({ password: "", confirmpassword: "" });
        dispatch(resetpassword(password, confirmpassword, token, navigate));
    }

    return (
        <div className='bg-gray-900 text-white w-full min-h-screen flex items-center justify-center'>
            <div className='flex flex-col w-[90%] md:w-[40%] mx-auto bg-gray-800 p-6 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-semibold text-center mb-6'>Reset Password</h2>
                
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-sm font-medium mb-2'>
                        Password <sup className='text-red-500'>*</sup>
                    </label>
                    <div className='relative'>
                        <input
                            className='w-full px-4 py-2 pr-10 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500'
                            name='password'
                            id='password'
                            value={data.password}
                            type={showpassword ? "text" : "password"}
                            onChange={passwordhandler}
                        />
                        <span
                            className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer text-gray-400'
                            onClick={() => setshowpassword(!showpassword)}
                        >
                            {showpassword ? <FaRegEye /> : <IoEyeOffSharp />}
                        </span>
                    </div>
                </div>

                <div className='mb-6'>
                    <label htmlFor='confirmpassword' className='block text-sm font-medium mb-2'>
                        Confirm Password <sup className='text-red-500'>*</sup>
                    </label>
                    <div className='relative'>
                        <input
                            className='w-full px-4 py-2 pr-10 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500'
                            name='confirmpassword'
                            id='confirmpassword'
                            value={data.confirmpassword}
                            type={showconfirmpassword ? "text" : "password"}
                            onChange={passwordhandler}
                        />
                        <span
                            className='absolute inset-y-0 right-0 flex items-center px-3 cursor-pointer text-gray-400'
                            onClick={() => setshowconfirmpassword(!showconfirmpassword)}
                        >
                            {showconfirmpassword ? <FaRegEye /> : <IoEyeOffSharp />}
                        </span>
                    </div>
                </div>

                <div>
                    <Custombutton
                        text={"Set Password"}
                        styles={"w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-lg"}
                        fun={setpasswordhandler}
                    />
                </div>
            </div>
        </div>
    )
}

export default Updatepassword;
