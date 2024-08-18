import React, { useState } from 'react';
import Custombutton from '../components/Custombutton';
import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { sentforgotpasswordlink } from '../services/Authservices';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {

    const dispatch = useDispatch();
    const [email, setemail] = useState("");
    const [emailsent, setemailsent] = useState(false);

    const linksubmithandler = () => {
        setemailsent(true);
        dispatch(sentforgotpasswordlink(email));
    }

    return (
        <div className='bg-gray-900 text-white w-full h-screen flex items-center justify-center'>
            <div className='w-[90%] md:w-[40%] flex flex-col items-start bg-gray-800 p-6 rounded-lg shadow-lg'>
                <div className='text-2xl font-semibold mb-4'>
                    {!emailsent ? "Reset Your Password" : "Check Your Email"}
                </div>
                <div className='text-sm mb-6'>
                    {!emailsent 
                        ? "Have no fear. We'll email you instructions to reset your password. If you don't have access to your email, we can try account recovery."
                        : `We have sent the reset email to ${email}.`}
                </div>
                {!emailsent && (
                    <div className='mb-4 w-full'>
                        <label htmlFor='email' className='block text-sm font-medium mb-2'>
                            Email Address <sup className='text-red-500'>*</sup>
                        </label>
                        <input
                            className='w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500'
                            name='email'
                            id='email'
                            type='email'
                            placeholder='Enter your email address'
                            value={email}
                            onChange={(e) => { setemail(e.target.value) }}
                        />
                    </div>
                )}

                <div className='w-full'>
                    <Custombutton 
                        text={!emailsent ? "Send Email" : "Resend Email"} 
                        styles={"w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-lg"} 
                        fun={linksubmithandler}
                    />
                </div>

                <div className='flex items-center mt-4 text-sm'>
                    <FaArrowLeft className='mr-2'/>
                    <Link to="/login" className='text-blue-400 hover:underline'>Back to Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Forgotpassword;
