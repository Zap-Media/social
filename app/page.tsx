"use client";
import { useEffect, useState } from "react";


export default function Home() {

    const api_route: string|undefined = process.env.NEXT_PUBLIC_API_ROUTE
    console.log(api_route)

    const [google, setGoogle] = useState<string>(api_route + "/auth/authorize/google?redirect=");
    const [discord, setDiscord] = useState<string>(api_route + "/auth/authorize/discord?redirect=");
    
    useEffect(()=>{
        setGoogle(api_route + "/auth/authorize/google?redirect=" + window.location.origin + "/auth/callback/google")
        setDiscord(api_route + "/auth/authorize/discord?redirect=" + window.location.origin + "/auth/callback/google")
    })

    return (
        <div className="main">
            <div className="text-center">
                <i><h1 className='title'>Zap Social</h1></i>
                <div className='btn-grid'>
                    <a href={google}><button className="btn btn-info">Continue with Google</button></a>
                    <a href={discord}><button className="btn btn-primary">Continue with Discord</button></a>
                </div>
            </div>
        </div>
    );
}
