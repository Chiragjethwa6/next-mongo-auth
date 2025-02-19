export default function UserProfile({params}: any){
    return (
        <div className="flex flex-col items-center justify-center min-h-scren py-2">
            <h1>Profile</h1>
            <hr />
            <p>welcome to profile of {params?.id}</p>
        </div>
    )
}