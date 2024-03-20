'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from './public/images/logo1.png'

export default function HomePage() {

    const router = useRouter();
    // const [client, setClient] = React.useState({
    //     name: "",
    //     number: "",
    //     service: "",
    //     email: "",
    //     message: ""
    // });
    // const [clientEmail, setClientEmail] = React.useState({
    //     newsemail: ""
    // });

    // const [loading, setLoading] = React.useState(false);

    // const [buttonDisabled, setButtonDisabled] = React.useState(true);

    // useEffect(() => {
    //     if(client.name.length > 0 && client.number.length > 0 && client.service.length > 0 && client.email.length > 0 && client.message.length > 0) {
    //         setButtonDisabled(false);
    //     } else {
    //         setButtonDisabled(true);
    //     }
    // }, [client]);

    // const handleSubmit = async(e) => {
    //     e.preventDefault();
    //     try {
    //         setLoading(true);
    //         const res = await fetch('/api/clients', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(client)
    //         });
    //         const data = await res.json();
    //         if(data.success) {
    //             setClient({
    //                 name: "",
    //                 number: "",
    //                 service: "",
    //                 email: "",
    //                 message: ""
    //             });
    //             setLoading(false);
    //         } else {
    //             setLoading(false);
    //         }
    //         router.push('/services');
    //     } catch (error) {
    //         console.error(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const handleEmailSubmit = async(e) => {
    //     e.preventDefault();
    //     try {
    //         setLoading(true);
    //         const res = await fetch('/api/emails', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(clientEmail)
    //         });
    //         const data = await res.json();
    //         if(data.success) {
    //             setClientEmail({
    //                 newsemail: ""
    //             });
    //             setLoading(false);
    //         } else {
    //             setLoading(false);
    //         }
    //         router.push('/contact');
    //     } catch (error) {
    //         console.error(error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };
    
    return (
        <div className="">
            <div className="fullContainer banner" id="homeSection">
                <header>
                    <div className="container">
                        <div className="logo">
                            <Image 
                                src={logoImage} 
                                height={80} 
                                alt="Foundation Logo" 
                                className="rounded-md"/>
                        </div>

                        <nav>
                            <ul>
                                <li>
                                    <Link href="" className="link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="link">
                                        Programs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="link">
                                        Education
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="link">
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link href="" className="link">
                                        Join Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
                {/* Header ends here */}
            </div>
            {/* Home section ends here */}
        </div>
    )
}