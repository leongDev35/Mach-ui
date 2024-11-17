import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice"

const store = configureStore({ //! tạo STORE
    reducer : {
        users : userReducer,
        
    }
})
export default store;