import { FaBackward } from "react-icons/fa"

const BASE_URL=import.meta.env.VITE_APP_BASE_URL

export const authroutes={
    SENDOTP_API:BASE_URL+"/auth/sendotp",
    SIGNUP_API:BASE_URL+"/auth/signup",
    LOGIN_API:BASE_URL+"/auth/login",
    FORGOTPASSWORDTOEKN_API:BASE_URL+"/auth/forgotpasswordtoken",
    FORGOTPASSWORD_API:BASE_URL+"/auth/forgotpassword",
   
}
export const internroutes={
   CREATE_INTERNSHIP_API:BASE_URL+"/intern/createIntern",
   DELETE_INTERNSHIP_API:BASE_URL+"/intern/deleteIntern",
   GET_INTERNSHIP_API:BASE_URL+"/intern/getIntern"
}
export const jobroutes={
    CREATE_JOB_API:BASE_URL+"/job/createJob",
    DELETE_JOB_API:BASE_URL+"/job/deleteJob",
    GET_JOB_API:BASE_URL+"/job/getJob"
 }
 export const hackathonroutes={
    CREATE_HACKATHON_API:BASE_URL+"/hackathon/createHackathon",
    DELETE_HACKATHON_API:BASE_URL+"/hackathon/deleteHackathon",
    GET_HACKATHON_API:BASE_URL+"/hackathon/getHackathon",
 }
 



