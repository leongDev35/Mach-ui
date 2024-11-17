import { login } from "@/service/userService";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //! check Client or Server
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null,
    loading: false,
    error: null
}

//! SLICE tập hợp các REDUCER và ACTION cho 1 FEATURE cụ thể
//! user/login => user = FEATURE, login = ACTION
//! khi gọi dispatch và truyền vào ACTION. STORE sẽ gọi hàm REDUCER tương ứng và cập nhật STATE
const userSlice = createSlice({
    name: 'user', //! tên của FEATURE 
    initialState, //! giá trị ban đầu của STATE
    reducers: {
        logout(state) {
            state.user = null;
            state.error = null;
            localStorage.removeItem('user'); // Xóa user khỏi localStorage khi logout
        },
    },


    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset lỗi khi bắt đầu gọi API
            })
            .addCase(login.fulfilled, (state, action) => { //! xử lý state dựa trên action mà nó nhận được
                state.loading = false;
                console.log(action.payload);

                if (action.payload.token) {
                    state.user = action.payload;
                    // console.log(JSON.stringify(state));
                    //! lưu toàn bộ trả về của API
                    localStorage.setItem('user', JSON.stringify(action.payload))
                }

            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Lưu dữ liệu lỗi từ server
            });
    }
})
export const { logout } = userSlice.actions;
export default userSlice.reducer;