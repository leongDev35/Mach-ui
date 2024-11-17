import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk(
    'user/login', //! để tạo action creator tên là user/login
    async (user, { rejectWithValue }) => {

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_SITE}/api/v1/auth/login` ,user);
            console.log(res);
            return res.data;
        } catch (error) {
            if (error.response) {
                // Trả về phản hồi lỗi từ máy chủ khi xảy ra lỗi
                return rejectWithValue(error.response.data);
            } else {
                // Trả về thông báo lỗi chung khi không nhận được phản hồi từ máy chủ
                return rejectWithValue({ error: 'Something went wrong, please try again later.' });
            }
            
        }
       
    })
// export const updateUser = createAsyncThunk(
//     'user/updateUser', //! để tạo action creator tên là user/updateUser
//     async (user) => {
//         console.log(user);
//         return user
//     })
