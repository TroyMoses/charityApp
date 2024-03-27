'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
import educationImage1 from '../public/images/programs/1.jpg';
import educationImage2 from '../public/images/programs/2.jpg';
import educationImage3 from '../public/images/programs/3.jpg';
import bannerImage from '../public/images/banner.jpg'

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
                                    <Link href="/education" className="link bg-[#1f8cad] rounded-md">
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

                <div className="container space-y-10">
                    <h1><span>Refugee Education</span></h1>
                    <p className="text-lg">
                        Nalongo Lwokyaza Foundation has a unique operating model of education and serves one of the most vulnerable populations in the world. We are providing access to quality education for conflict affected children, living in the critically under-served refugee camps, in western Uganda.
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container ">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        Child Education
                    </h2>
                    <div className="space-y-20">
                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Primary School Education</h2>
                                <p className="text-lg">
                                    Kyangwali refugee camp alone is host to 113,000 refugees, of whom 82% are women & children and over 50% are of school going age, yet in 2018 only 17,172 children were attending school (UNHCR, 2018). The 14 primary schools aided by the United Nations (UN) to serve over 30,000 children are overcrowded by over 200 per class attended to by one teacher. The facilities are clearly inadequate & unhygienic. The children walk long distances to learn, lack feeding and psychosocial support programs due to limited economic opportunities or dependency on the World Food Programme, with each head in the family receiving only $8 monthly for food.
                                </p>
                                <button className="bg-[#1f8cad] px-3 py-1 text-white rounded">
                                    <Link href='/primary-education'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage3}
                            />

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage1}
                            />

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Secondary School Education</h2>
                                <p className="text-lg">
                                    About 17,544 refugee children in Kyangwali refugee settlement are attending secondary education (UNHCR, 2018). There is only one secondary school located at the extreme end of the refugee camp, also shared between refugees and the host community. The long distance and other related problems lead to high school drop-out especially for the girls. The classrooms are overcrowded which affects the quality of teaching leading to slow or poor learning. The school curriculum in Uganda is strongly based on memorization, students do not fully realize their potential with vital skills to thrive in the community.
                                </p>
                                <button className="bg-[#1f8cad] px-3 py-1 text-white rounded">
                                    <Link href='/primary-education'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">University Preparation Program</h2>
                                <p className="text-lg">
                                    University education for conflict-affected students is nearly impossible due to financial aid and admission difficulties for these students. We identify and provide college preparation support to potential students. This foundation connects these high school graduates to different college scholarship programs. We partner with scholarship programs such as the Mastercard Foundation Scholars Program (MCFSP), African Leadership Academy, universities like Bugema university for university education
                                </p>
                                <button className="bg-[#1f8cad] px-3 py-1 text-white rounded">
                                    <Link href='/primary-education'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage2}
                            />

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage1}
                            />

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Scholarships</h2>
                                <p className="text-lg">
                                    Our foundation's Scholarship refers to the financial or material support given to students in Primary school, Secondary school or at the University in form of Education fees, provision of scholastic material, accommodation, guidance and mentorship among others, acquired from this foundation or through our partnerships to enable the students successfully realize their visions through education. Some of the students shall be given Full scholarship while others will be given Half Scholarship. Depending on the resources available and need assessment of the individual student. In Nalongo Lwokyaza Foundation, we have scholarships at primary school level, secondary school and university level.
                                </p>
                                <button className="bg-[#1f8cad] px-3 py-1 text-white rounded">
                                    <Link href='/primary-education'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>

                        </div>
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