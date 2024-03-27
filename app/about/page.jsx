'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'

export default function HomePage() {
  
    return (
        <div className="scroll-smooth text-gray-800">
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
                                    <Link href="/about" className="link bg-[#1f8cad] rounded-md">
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
                        Our foundation is committed to paying particular attention to children and youth within their programs who have suffered from violence and trauma, and aspires to sustain support for young people who have suffered trauma. Nalongo Lwokyaza Foundation also recognizes the power of functional education as a critical part of healing conflict and creating social cohesion in communities.
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
                    <h2 className="sectionTitle text-[#1f8cad]">
                        Our Foundation
                    </h2>
                    <div className="space-y-2 text-lg">
                        <h2 className="font-bold text-2xl text-[#1f8cad]">
                            Our Mission
                        </h2>
                        <p className="text-lg">
                            We seek to transform Africa by providing access to quality education for conflict-affected children, empowering socially responsible leaders and entrepreneurs to unite communities and create sustainable peace, love and prosperity.
                        </p>

                        <h2 className="font-bold text-2xl text-[#1f8cad]">
                            Our Vision
                        </h2>
                        <p className="text-lg">
                            United, developed and peaceful communities in Africa.
                        </p>

                        <h2 className="font-bold text-2xl text-[#1f8cad]">
                            Our Core Values
                        </h2>
                        <div className="text-lg">
                            <span className="text-[#1f8cad] font-semibold">Integrity:</span><br /> We commit to honesty, transparency, reliability and building trust.
                            <br />

                            <span className="text-[#1f8cad] font-semibold">Compassion:</span><br /> We are deeply aware of the suffering of others, and have a strong desire to alleviate it.
                            <br />

                            <span className="text-[#1f8cad] font-semibold">Diversity:</span><br /> We understand and appreciate that every person is unique; recognizing the strength that emanates from our collective differences such as race, ethnicity, nationality, gender, religious beliefs, and socio-economic status.
                            <br />

                            <span className="text-[#1f8cad] font-semibold">Community Responsibility:</span><br /> We commit to fulfilling promises made to each other.
                            <br />

                            <span className="text-[#1f8cad] font-semibold">Excellence:</span><br /> We constantly strive for success and being the best in all that we do.
                            <br />

                            <span className="text-[#1f8cad] font-semibold">Boldness:</span><br /> We commit to remain courageous in the fight against illiteracy, poverty and tribalism in our communities.
                        </div>
                        
                    </div>
                    <div className="cards text-lg flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-4 mt-8 font-semibold">

                        <div className="donationBox">
                            <div className="title text-[#1f8cad]">
                                Give Donation
                            </div>
                            <p className="">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Donate Now
                            </button>
                        </div>
                        {/* Donation Box end */}

                        <div className="volunteerBox">
                            <div className="title text-[#1f8cad]">
                                Become a volunteer
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Become Now
                            </button>
                        </div>
                        {/* Donation Box end */}

                        <div className="scholarshipBox">
                            <div className="title text-[#1f8cad]">
                                Give Scholarship
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
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