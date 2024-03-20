'use client';

import Link from "next/link";
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



export default function ServicesPage() {

    // const router = useRouter();

    // const [clientEmail, setClientEmail] = React.useState({
    //     newsemail: ""
    // });

    // const [loading, setLoading] = React.useState(false);

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
        <div>
            Service Page
        </div>
    )
}