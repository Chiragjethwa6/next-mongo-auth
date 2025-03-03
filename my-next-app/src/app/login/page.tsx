"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function Loginpage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email : "",
        password : ""
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loadding, setLoading] = React.useState(false);

    const onLogin = async () => {
        try{
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        }catch(error: any){
            console.log("Login failed", error.message);
            toast.error(error.message);
            setLoading(false);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-scren py-2">
            <h1>{loadding ? "Processing" : "Login"}</h1>
            <br />
            <label htmlFor="username">email</label>
            <input
            className="p-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600"
                id = "email"
                type = "text"
                value = {user.email}
                onChange={(e) => setUser({...user, email : e.target.value})}
                placeholder="email"
            />
            <label htmlFor="username">password</label>
            <input
            className="p-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600"
                id = "password"
                type = "password"
                value = {user.password}
                onChange={(e) => setUser({...user, password : e.target.value})}
                placeholder="password"
            />
            <br />
            <button 
                className="p-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600"
                onClick={onLogin}>{buttonDisabled ? "No Login" : "Login"}</button>
            <Link className="mt-4" href="/signup">Visit Sign up Page</Link>
        </div>
    )
}