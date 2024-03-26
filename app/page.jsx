'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from './public/images/logo1.png'
import bannerImage from './public/images/banner.jpg'
import educationImage from './public/images/gallery/8.jpg'
import galleryImage1 from './public/images/gallery/1.jpg'
import galleryImage2 from './public/images/gallery/2.jpg'
import galleryImage3 from './public/images/gallery/3.jpg'
import galleryImage4 from './public/images/gallery/4.jpg'
import galleryImage5 from './public/images/gallery/5.jpg'
import galleryImage6 from './public/images/gallery/6.jpg'
import galleryImage7 from './public/images/gallery/7.jpg'
import galleryImage8 from './public/images/gallery/8.jpg'

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
                                <li>
                                    <Link href="#donateSection" className="link bg-amber-700 rounded-lg">
                                        Donate
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
                {/* Header ends here */}

                <div className="container">
                    <h1>Education Unlocks Future <span>Possibilities</span></h1>
                    <p className="text-lg">
                        For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira.
                    </p>
                    <button className="mb-5">
                        <Link href="#donateSection">
                            <span className="text-lg">Sponsor A Child Now</span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle">
                        About Us
                    </h2>
                    <p className="text-lg font-normal">
                        At Nalongo Lwokyaza Foundation, we're a community of changemakers driven by the belief that Education is the key to future possibilities. Founded in 2017 by Nalongo Lwokyaza, we've grown from a small group of passionate individuals into a force for good, tackling child sponsorship with innovative solutions and unwavering dedication.
                        <br /><br />
                        Our team is fueled by a deep commitment to charity. We're a diverse group of patriots and volunteers who bring a wealth of experience and expertise to the table. Together, we work collaboratively to develop impactful programs that directly benefit native and foreign refugee children.
                        <br /><br />
                        Whether you're a passionate volunteer, a generous donor, or simply someone who believes in a better tomorrow, we welcome you to join our movement. Together, we can create a lasting positive impact on the lives of refugee children.
                    </p>
                    <div className="text-center mt-8">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded">
                            <Link href="/about">
                                Explore More About Us
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* About section ends here */}

            <section className="education" id="educationSection">
                
                {/* <video autoPlay loop muted>
                    <source src={videoSrc} type="video/mp4" />
                </video> */}
                <div>
                    <Image src={bannerImage} alt="An image" className="educationImage"/>
                </div>
                
                <div className="container">
                    <div className="sectionTitle">
                        <h1 className="md:text-white text-black font-normal">Education</h1>
                    </div>

                    <div className="educationContainer">
                        <h3>
                            Education Is Essential For <br />
                            <strong> BETTER FUTURE</strong>
                        </h3>
                        <p className="text-lg">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed iusto officia nam, omnis necessitatibus delectus aspernatur sequi, blanditiis voluptatibus reprehenderit quis pariatur, corporis consequuntur dicta sapiente? Consequuntur delectus numquam quam.
                        </p>
                        <button>
                            <Link href="/education">
                                EXPLORE NOW
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* Education section ends here */}

            <section className="programs" id="programsSection">
                <div className="container mx-5">
                    <h2 className="sectionTitle">
                        More Programs
                    </h2>

                    <div className="boxContainer md:flex grid  md:justify-center md:space-x-12 md:flex-row">

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="programTitle px-5">
                                Make Life Easier For Them
                            </div>
                            <div className="programDesc">
                                <p className="px-2">
                                    Lorem ipsum dolor, adipisicing elit<br />
                                    sit amet consectetur . <br />
                                    Quos voluptates eveniet 
                                </p>
                            </div>
                            <button className=" w-40">
                                <Link href="/programs">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="programTitle px-5">
                                Dedicating To Helping Kids
                            </div>
                            <div className="programDesc">
                                <p className="px-2">
                                    Lorem ipsum dolor, adipisicing elit<br />
                                    sit amet consectetur . <br />
                                    Quos voluptates eveniet 
                                </p>
                            </div>
                            <button className=" w-40">
                                <Link href="/programs">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="programTitle px-5">
                                Clean Water For People
                            </div>
                            <div className="programDesc">
                                <p className="px-2">
                                    Lorem ipsum dolor, adipisicing elit<br />
                                    sit amet consectetur . <br />
                                    Quos voluptates eveniet 
                                </p>
                            </div>
                            <button className=" w-40">
                                <Link href="/programs">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Programs section ends here */}

            <section className="gallery" id="gallerySection">
                <div className="container">
                    <div className="sectionTitle">
                        Gallery
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

                    <div className="text-center mt-8">
                        <button className="bg-blue-500 text-white px-3 py-2 rounded">
                            <Link href="/gallery">
                                Explore Our Gallery
                            </Link>
                        </button>
                    </div>

                </div>
            </section>
            {/* Gallery section ends here */}

            <section className="donate" id="donateSection">
                <div className="container mx-5">
                    <h2 className="sectionTitle">
                        Make A Donation
                    </h2>

                    <div className="boxContainer md:flex grid  md:justify-center md:space-x-12 md:flex-row">

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
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
                            <div className="donateTitle px-5">
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
                            <div className="donateTitle px-5">
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
                            <div className="donateTitle px-5">
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
            {/* Donate section ends here */}
            
            <section className="join" id="joinSection">
                <div className="container">
                    <div className="joinTitle">
                        ADOPT A CHILD & <span>SAVE LIVES</span>
                    </div>
                    <p className="text-lg">
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