import { createSlice } from "@reduxjs/toolkit"

const initialState={
    token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")) : null,
    loading:false,
    userdata:null,
}

const Authslice=createSlice({
    name:"Auth",
    initialState:initialState,
    reducers:{
        settoken(state,action){
            state.token=action.payload;
        },
        setloading(state,action){
            state.loading=action.payload;
        },
        setuserdata(state,action){
            state.userdata=action.payload;
        },
    }
})

export const {settoken,setloading,setuserdata}=Authslice.actions;
export default Authslice.reducer;