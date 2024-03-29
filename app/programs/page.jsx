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

export default function ProgramsPage() {
  
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
                                    <Link href="/programs" className="link bg-[#1f8cad] rounded-md">
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

                <div className="container space-y-10">
                    <h1><span>Our Programs</span></h1>
                    <p className="text-lg">
                        Kyangwali refugee settlement has almost reached its carrying capacity with the majority; 113,000 from the Democratic Republic of the Congo and 3,300 from South Sudan; (Relief Web, 2020). These countries have been facing civil conflicts for more than two decades, forcing thousands to flee to Uganda as refugees.
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        Our Programs
                    </h2>
                    <p className="text-lg font-normal">
                        81% of the refugees are women and children, some of these women are widowed by the wars but have families to fend for. The refugees depend on subsistence farming but due to the most recent influx of refugees from the Congo, there is no more land for farming. Most families are forced to entirely depend on the monthly food aid of $8 per head from UNHCR. These families; therefore face many challenges in the new environment; they lack quality medical care, enough food, shelter, and most importantly, means to educate their children.<br /><br />
                        This livelihood program generally seeks to address the actual needs for refugees through provision of seed funding and skills development in business management, livestock, and agricultural activities. We provide skills training and microfinance to the women to build their homes, feed and send their children to school. Assuredly, refugee families have supplementary income from these activities and can provide meals for their families and support their children in schools.
                    </p>
                </div>
            </section>

            <section className="fullContainer -mt-20" id="aboutSection">
                <div className="container ">
                    <div className="space-y-20">
                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Crop And Animal Farming</h2>
                                <p className="text-lg">
                                    We have a youth hub for running our activities in the Kyangwali refugee settlement. This is also known as Lwokyaza New Site, CONES-a farming or agriculture hub. With no land for the refugees to practice subsistence farming-sole means of dependence, we have established a demonstration farm on a plot of over 10 acres of land. We have also introduced organic farming which will be an agribusiness enterprise to establish better farming methods and focus on solving this problem. It will involve applying animal manure to naturally sustain and maintain soil fertility and avoid other long term agronomic problems.
                                </p>
                                <button className="bg-[#1f8cad] hover:bg-[#197996] px-3 py-1 text-white rounded">
                                    <Link href='/programs'>
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
                                <h2 className="text-4xl text-[#1f8cad]">Tuungane Women Micro-finance</h2>
                                <p className="text-lg">
                                    Targets Congolese refugee widows living in Kyangwali with orphans to feed and educate. Our foundation provides small loans to such women who have projects such as; animal rearing, poultry, farming, small retail shops and those selling food items every market day. 30 widows received the loan since 2017 and 75 children attend school through this program. To reduce challenges such as failing to pay back loans, we built a vocational training center where women will meet more skilled and experienced business people, learn from their past mistakes as well as identify viable businesses in the refugee community.
                                </p>
                                <button className="bg-[#1f8cad] hover:bg-[#197996] px-3 py-1 text-white rounded">
                                    <Link href='/programs'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Anti-violence Vocational Tailoring Project</h2>
                                <p className="text-lg">
                                    University education for conflict-affected students is nearly impossible due to financial aid and admission difficulties for these students. We identify and provide college preparation support to potential students. This foundation connects these high school graduates to different college scholarship programs. We partner with scholarship programs such as the Mastercard Foundation Scholars Program (MCFSP), African Leadership Academy, universities like Bugema university for university education
                                </p>
                                <button className="bg-[#1f8cad] hover:bg-[#197996] px-3 py-1 text-white rounded">
                                    <Link href='/programs'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage2}
                            />

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
                            For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira.
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