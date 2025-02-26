import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const selectUsers = (state) => state.users;
// ! sử dụng createSelector để lấy token tránh reload lại trang
export const selectJwtToken = createSelector(
    [selectUsers],
    (users) => users.user?.token // Truy xuất token
);
export function useMangaApiPost() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const jwtToken = useSelector(selectJwtToken);

    const sendMangaData = async (payload, part) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE}/api/v1${part}`, payload,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`, // Thêm token vào header
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;

        } catch (err) {
            setError(err.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    return { sendMangaData, loading, error };
};

export function useMangaApiGet() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

     const jwtToken = useSelector(selectJwtToken);
 

    const fetchMangaData = async () => {
        if (!jwtToken) {
            setError("Token không hợp lệ!");
            return null;
        }
        setLoading(true);
        setError(null);

        try {

            const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/manga/user/1`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`, // Thêm token vào header
                    'Content-Type': 'application/json',
                },
                // params: queryParams, // Truyền tham số vào request
            });
            return response.data;

        } catch (err) {
            setError("Lỗi khi lấy dữ liệu!");
        } finally {
            setLoading(false);
        }
    };

    return { fetchMangaData, loading, error };
};
