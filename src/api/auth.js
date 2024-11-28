//api와의 통신을 담당
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

export const register = async ({ userId, password, nickname }) => {
    try {
        console.log({userId, password, nickname})
        const response = await API.post('/register', {
            id: userId, password, nickname
        });
        return response.data;
    } catch (error) {
        console.error("error")
    }
}

export const login = async ({ id, password }) => {
    try {
        const response = await API.post('/login', {
            id, password
        });
        console.log({ response });

        const { accessToken, userId, nickname } = response.data;

        localStorage.setItem("user", JSON.stringify({ userId, nickname }));
        localStorage.setItem("token", accessToken);

        return { userId, nickname, token: accessToken };
    } catch (error) {
        console.error("error");
    }
}

export const getUserProfile = async () => {
    try {
        const response = await API.get('/user');
        return response.data;
    } catch (error) {
        console.error("프로필 오류", error);
    }
}

export const updateProfile = async (formData, token) => {
    try {
        const response = await API.patch('/profile', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`
            },
        });
        return response.data;
    } catch (error) {
        console.error("프로필 업데이트 중 오류:", error);
    }
}

export const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    console.log("로그아웃 되었습니다.");
};