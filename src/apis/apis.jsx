import { FaBackward } from "react-icons/fa"

const BASE_URL=process.env.REACT_APP_BASE_URL

export const authroutes={
    SENDOTP_API:BASE_URL+"/auth/sendotp",
    SIGNUP_API:BASE_URL+"/auth/signup",
    LOGIN_API:BASE_URL+"/auth/login",
    FORGOTPASSWORDTOEKN_API:BASE_URL+"/auth/forgotpasswordtoken",
    FORGOTPASSWORD_API:BASE_URL+"/auth/forgotpassword",
}


