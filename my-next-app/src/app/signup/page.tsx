"use client";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignUpPage(){
    const router = useRouter();
    const [user, setUser] = React.useState({
        email : "",
        username : "",
        password : ""
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const onSignup = async () => {
        try{
            setLoading(true);
            const response = await axios.post('/api/users/signup', user);
            if(response.status === 200){
                console.log("signup success", response.data);
                toast.success("Signup successful");
                router.push('/login');
                setUser({email : "", username : "", password : ""});
            }
        }catch(error: any){
            console.log("signup failed", error.message);
            toast.error("Signup failed", error.message);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        if(user.email.length > 0 && user.username.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user])
    return (
        <div className="flex flex-col items-center justify-center min-h-scren py-2">
            <h1>{loading ? "Processing" : "Signup"}</h1>
            <br />
            <label htmlFor="username">username</label>
            <input
            className="p-2 border border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600"
                id = "username"
                type = "text"
                value = {user.username}
                onChange={(e) => setUser({...user, username : e.target.value})}
                placeholder="username"
            />
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
                onClick={onSignup}>{buttonDisabled? "No signup" : "Signup"  }
            </button>
            <Link className="mt-4" href="/login">Visit Login Page</Link>
        </div>
    )
}