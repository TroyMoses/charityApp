'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'

export default function HomePage() {
  
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
                                    <Link href="/" className="link">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="link">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/programs" className="link">
                                        Programs
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/education" className="link">
                                        Education
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/gallery" className="link">
                                        Gallery
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/joinus" className="link">
                                        Join Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/donate" className="link bg-amber-700 rounded-lg">
                                        Donate
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
                {/* Header ends here */}

                <div className="container">
                    <h1><span>About Us</span></h1>
                    <p className="text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus nobis, accusamus consequatur nemo sed voluptate minus amet provident et fugiat optio eligendi magni mollitia quas iste? Enim, in neque!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem sint vel harum magnam ducimus itaque natus soluta debitis? Ab consequuntur excepturi omnis nulla accusantium dolorum iste voluptatem pariatur non vel!
                    </p>
                    <button className="mb-5">
                        <Link href="#aboutSection">
                            JOIN US NOW
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle">
                        Our Foundation
                    </h2>
                    <p className="text-center text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, amet! Molestiae quam, adipisci fugit molestias earum numquam aliquam dignissimos quidem iusto vero sunt facilis perspiciatis maxime delectus ad itaque accusamus!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, accusamus tempora assumenda tempore veritatis quas odio cumque praesentium doloremque, possimus, labore sint. Sapiente dolorum similique optio mollitia harum fuga repellendus.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel doloribus, eaque tenetur quo sapiente quae tempora iure culpa sit quod placeat unde illo animi amet similique. Quam quod praesentium doloremque
                    </p>
                    <div className="cards text-lg flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-4 mt-8 font-semibold">

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
            
            <section className="join" id="joinSection">
                <div className="container">
                    <div className="joinTitle">
                        ADOPT A CHILD & <span>SAVE LIVES</span>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, in quidem, voluptates delectus libero repellendus illo iusto inventore deserunt quis quas eum nesciunt, recusandae porro voluptas commodi tempora dolor magnam.
                    </p>
                    <button className="joinNow rounded">
                        JOIN US
                    </button>
                    <button className="adoptBtn rounded">
                        ADOPT A CHILD
                    </button>
                </div>
            </section>
            {/* Join us section ends here */}

            <footer className="">
                <div className="container flex md:flex-row md:justify-between md:space-x-10 space-y-5 flex-col">

                    <div className="newsLetterContainer md:w-96">
                        <Image src={logoImage} 
                        width={80}
                        className="rounded-md pb-5" 
                        alt="Logo Image"/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam excepturi aliquid vitae rem voluptate beatae accusantium nulla
                        </p>
                        <input 
                            type="text" 
                            placeholder="Enter your email address" />
                    </div>
                    {/* NewsLetter container ends here */}

                    <div className="linksContainer">
                        <div className="title">
                            Useful Links
                        </div>
                        <ul className="space-y-3">
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
                                <Link href="#educationSection" className="link">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="#gallerySection" className="link">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="#joinSection" className="link">
                                    Join Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* LinksContainer ends here */}

                    <div className="connectContainer space-y-6">
                        <div className="title">
                            Connect With Us
                        </div>
                        <p>
                            Saraswati Colony, Sehatpur, Faridabad<br />
                            121003, Haryana
                        </p>
                        <p>info@ngo.com</p>
                        <p>+256 777 234 897</p>
                    </div>
                    {/* ConnectContainer ends here */}

                </div>
            </footer>


        </div>
    )
}