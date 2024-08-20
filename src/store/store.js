import {configureStore} from '@reduxjs/toolkit';
import Authslice from './Authslice.jsx';
import profileslice from './Profileslice';

const store = configureStore({
    reducer: {
        Auth:Authslice,
        Profile:profileslice,
    }
});


export default store;