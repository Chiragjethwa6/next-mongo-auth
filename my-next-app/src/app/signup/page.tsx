"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignUpPage(){
    const [user, setUser] = React.useState({
        email : "",
        username : "",
        password : ""
    })

    const onSignup = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-scren py-2">
            <h1>Sign Up</h1>
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
                onClick={onSignup}>Sign Up</button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}