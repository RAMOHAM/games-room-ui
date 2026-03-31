"use client"
import HomePageNavbar from "@/app/home/HomePageNavbar";
import Footer from "@/app/home/Footer";
import { Dispatch, SetStateAction, useState } from "react";
import LoginForm from "@/app/sign-in/LoginForm";
import RegisterForm from "@/app/sign-in/RegisterForm";

export type AuthFormProps = {
    switchAuthForm: Dispatch<SetStateAction<boolean>>
}

const SignIn = () => {
    const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
    return (
        <div>
            <HomePageNavbar/>
            {isLoginForm ? <LoginForm switchAuthForm={setIsLoginForm}/> : <RegisterForm switchAuthForm={setIsLoginForm} />}
            <Footer/>
        </div>
    )
}

export default SignIn

