import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const useMangaApi = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    let jwtToken = useSelector(({ users }) => {
        return users.user.token;
    })
    const sendMangaData = async (payload) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SITE}/api/v1/manga`, payload,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken}`, // Thêm token vào header
                        'Content-Type': 'application/json',
                    },
                }
            );
            return response.data;

        } catch (err) {
            setError("loi");
        } finally {
            setLoading(false);
        }
    };

    return { sendMangaData, loading, error };
};

export function useMangaApiGet(pathParameter = "") {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const jwtToken = useSelector(({ users }) => users.user.token);

    const fetchMangaData = async (queryParams = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/manga${pathParameter}`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`, // Thêm token vào header
                    'Content-Type': 'application/json',
                },
                params: queryParams, // Truyền tham số vào request
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

export default useMangaApi;