'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
import bannerImage from '../public/images/banner.jpg'
import educationImage from '../public/images/gallery/8.jpg'
import galleryImage1 from '../public/images/gallery/1.jpg'
import galleryImage2 from '../public/images/gallery/2.jpg'
import galleryImage3 from '../public/images/gallery/3.jpg'
import galleryImage4 from '../public/images/gallery/4.jpg'
import galleryImage5 from '../public/images/gallery/5.jpg'
import galleryImage6 from '../public/images/gallery/6.jpg'
import galleryImage7 from '../public/images/gallery/7.jpg'
import galleryImage8 from '../public/images/gallery/8.jpg'

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
                                    <Link href="/gallery" className="link bg-[#1f8cad] rounded-md">
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
                    <h1><span className="">Our Gallery</span></h1>
                    <p className="text-lg">
                        Our foundation is committed to paying particular attention to children and youth within their programs who have suffered from violence and trauma, and aspires to sustain support for young people who have suffered trauma. Nalongo Lwokyaza Foundation also recognizes the power of functional education as a critical part of healing conflict and creating social cohesion in communities.
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="gallery" id="gallerySection">
                <div className="container">
                    <div className="sectionTitle text-[#1f8cad]">
                        Our Gallery
                    </div>

                    <div className="galleryContainer">

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage1} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage2} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage3} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage4} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage5} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage6} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage7} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage8} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                    </div>

                </div>
            </section>
            {/* Gallery section ends here */}
            
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