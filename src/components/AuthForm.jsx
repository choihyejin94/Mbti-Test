import React, { useState } from 'react'
import { BtnStyle, FormStyle, InputStyle, LableStyle } from '../styles/AuthFormStyle';

const AuthForm = ({ mode, onSubmit }) => {
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
        nickname: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div>
            <FormStyle onSubmit={handleSubmit}>
                <LableStyle>
                    User ID
                    <InputStyle type="text" name='userId' value={formData.userId} placeholder='ID' onChange={handleChange} required />
                </LableStyle>
                <LableStyle>
                    Password
                    <InputStyle type="password" name='password' value={formData.password} placeholder='PASSWORD' onChange={handleChange} required />
                </LableStyle>
                {mode === "signup" && (<LableStyle>Nick Name<InputStyle type="text" name='nickname' value={formData.nickname} placeholder='NICKNAME' onChange={handleChange} required /></LableStyle>)}
                <BtnStyle type='submit'>{mode === "login" ? "Login" : "SignUp"}</BtnStyle>
            </FormStyle>
        </div >
    )
}

export default AuthForm