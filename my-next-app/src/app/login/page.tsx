"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function Loginpage(){
    const [user, setUser] = React.useState({
        email : "",
        password : ""
    })

    const onLogin = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-scren py-2">
            <h1>Login</h1>
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
                onClick={onLogin}>Login</button>
            <Link href="/signup">Visit Sign up Page</Link>
        </div>
    )
}