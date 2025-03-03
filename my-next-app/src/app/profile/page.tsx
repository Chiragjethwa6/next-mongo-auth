"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";


export default function ProfilePage(){
    const router = useRouter();
    const [data, setData] = useState("Nothing");
    const onLogout = async () => {
        try{
            await axios.get("/api/users/logout");
            toast.success("logout success");
            console.log("logout success");
            router.push("/login");
        }catch(error: any){
            toast.error(error.message);
            console.log("logout failed", error.message);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);
    
    const getUserDetails = async () => {
        try{
            const response = await axios.get("/api/users/me");
            console.log("get user details success", response.data);
            setData(response.data.data._id);
        }catch(error: any){
            toast.error(error.message);
            console.log("get user details failed", error.message);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-scren py-2">
            <h1>Profile</h1>
            <hr />
            <p>profile page</p>
            <h2>{data === "Nothing"? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <button
                onClick={onLogout}
                className="p-2 border mt-4 border-gray-300 rounded-lg-mb-4 focus:outline-none focus:border-gray-600"
            >Logout</button>
        </div>
    )
}