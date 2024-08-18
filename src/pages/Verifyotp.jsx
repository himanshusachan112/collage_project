import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input'
import Custombutton from '../components/Custombutton';
import { sendotp, signup } from '../services/Authservices';

const Verifyotp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [otp, setotp] = useState("");
    const { userdata, loading } = useSelector((state) => state.Auth);

    const resendotphandler = (e) => {
        e.preventDefault();
        dispatch(sendotp(userdata?.email, navigate));
    }

    const verifyotphandler = (e) => {
        e.preventDefault();
        const { firstname, lastname, password, confirmpassword, email, accounttype } = userdata;
        dispatch(signup(navigate, firstname, lastname, accounttype, email, password, confirmpassword, otp));
    }

    useEffect(() => {
        if (!userdata) {
            navigate("/signup");
        }
    }, [userdata, navigate]);

    return (
        loading ? (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg font-semibold text-gray-700">Loading...</div>
            </div>
        ) : (
            <div className="bg-gray-900 w-full min-h-screen flex flex-col justify-center items-center text-white">
                <div className="w-[90%] md:w-[30%]">
                    <OtpInput
                        value={otp}
                        onChange={setotp}
                        numInputs={6}
                        renderInput={(props) => (
                            <input
                                {...props}
                                placeholder="-"
                                style={{ boxShadow: "inset" }}
                                className="w-[50px] h-[50px] text-center rounded-md bg-gray-800 text-yellow-500 border-2 border-yellow-300 focus:outline-none focus:border-yellow-500"
                            />
                        )}
                        containerStyle={{ justifyContent: "space-between", gap: "8px" }}
                    />
                </div>
                <div
                    onClick={resendotphandler}
                    className="text-blue-500 mt-4 cursor-pointer hover:underline"
                >
                    Resend OTP
                </div>
                <div className="w-full flex justify-center mt-6">
                    <Custombutton
                        text={"Verify OTP"}
                        styles={"text-black bg-yellow-400 hover:bg-yellow-300 w-[60%] md:w-[30%] py-2 rounded-lg"}
                        fun={verifyotphandler}
                    />
                </div>
            </div>
        )
    )
}

export default Verifyotp;
