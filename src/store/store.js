import {configureStore} from '@reduxjs/toolkit';
import authslice from './Authslice';
import profileslice from './Profileslice';

const store = configureStore({
    reducer: {
        Auth:authslice,
        Profile:profileslice,
    }
});


export default store;