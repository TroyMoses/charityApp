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
        <div className="scroll-smooth">
            <div className="fullContainer banner" id="homeSection">
                <header>
                    <div className="container">
                        <div className="logo">
                            <Image 
                                src={logoImage} 
                                height={100} 
                                alt="Foundation Logo" 
                                className="rounded-md"/>
                        </div>

                        <nav className="pt-5">
                            <ul>
                                <li>
                                    <Link href="#homeSection" className="link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#aboutSection" className="link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#programsSection" className="link">
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
                                <li>
                                    <Link href="" className="link bg-amber-700 rounded-lg">
                                        Donate
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
                {/* Header ends here */}

                <div className="container">
                    <h1>Together We Can <span>Save Lives</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus nobis, accusamus consequatur nemo sed voluptate minus amet provident et fugiat optio eligendi magni mollitia quas iste? Enim, in neque!</p>
                    <button>
                        Start With A Little
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle">
                        About Us
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nihil inventore labore esse et eos adipisci nam sit ad, doloremque nesciunt delectus porro qui? Ullam ipsa neque deserunt odio. Culpa?
                    </p>
                    <div className="cards">

                        <div className="donationBox">
                            <div className="title">
                                Give Donation
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button>
                                Donate Now
                            </button>
                        </div>
                        {/* Donation Box end */}

                        <div className="volunteerBox">
                            <div className="title">
                                Become a volunteer
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button>
                                Become Now
                            </button>
                        </div>
                        {/* Donation Box end */}

                        <div className="scholarshipBox">
                            <div className="title">
                                Give Scholarship
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button>
                                Give Now
                            </button>
                        </div>
                        {/* Donation Box end */}

                    </div>
                </div>
            </section>
            {/* About section ends here */}

            <section className="programs" id="programsSection">
                <div className="container">
                    <h2 className="sectionTitle">
                        Programs
                    </h2>

                    <div className="boxContainer flex justify-between">

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="programTitle">
                                Education To Every Child
                            </div>
                            <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div>
                            <button className=" w-40">Donate Now</button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="programTitle">
                                Make Life Easier For Them
                            </div>
                            <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div>
                            <button className=" w-40">Donate Now</button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="programTitle">
                                Dedicating To Helping Kids
                            </div>
                            <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div>
                            <button className=" w-40">Donate Now</button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="programTitle">
                                Clean Water For People
                            </div>
                            <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div>
                            <button className=" w-40">Donate Now</button>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Programs section ends here */}


            
            {/* Education section ends here */}

        </div>
    )
}