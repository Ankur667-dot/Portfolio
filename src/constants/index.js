import FlightManagementImg from "../assets/project/FlightManagement.png";
import NextGenImg from "../assets/project/NextGen.jpg";
import ClubWebDesignImg from "../assets/project/ClubWebDesign.png";
import Html from '../assets/logo/html.png'
import Css from '../assets/logo/css3.png'
import javascript from '../assets/logo/javascript.png'
import android from '../assets/logo/android.png'
import nodedotjs from '../assets/logo/nodejs1.png'
import express from '../assets/logo/expressColor.png'
import spring from '../assets/logo/springboot.png'
import amazonaws from '../assets/logo/awsColor.png'
import mysql from '../assets/logo/mysql.png'
import firebase from '../assets/logo/firebase.png'
import nginx from '../assets/logo/nginx.png'
import docker from '../assets/logo/docker.png'
import git from '../assets/logo/git.png'
import vercel from '../assets/logo/vercel.png'
import mongodb from '../assets/logo/mongodb.png'
import github from '../assets/logo/github2.png'
import gitlab from '../assets/logo/gitlab.png'
import visualstudiocode from '../assets/logo/vsCode.png'
import androidstudio from '../assets/logo/androidstudio.png'
import figma from '../assets/logo/figma.png'
import tailwind from "../assets/logo/tailwind.png"
import react from "../assets/react.png"
export const myProjects = [
    {
        id: 1,
        title: "Flight Management System",
        description: "A web-based application for managing flights, bookings, and schedules efficiently.",
        subDescription: [
            "Frontend: React, Tailwind for CSS, Backend: Spring Boot (Java) ,Database: MySQL, State Management: Redux or Recoil, API Integration: REST APIs with Axios, Authentication: JWT-based authentication",
        ],
        href: "",
        logo: "",
        image: FlightManagementImg,
        tags: [
            {
                id: 1,
                name: "React",
                path: react,
            },
            {
                id: 2,
                name: "MySQL",
                path: mysql,
            },
            {
                id: 3,
                name: "Spring",
                path: spring,
            },
            {
                id: 4,
                name: "TailwindCSS",
                path: tailwind,
            },
        ],
    },
    {
        id: 2,
        title: "Next Gen Streaming Platform",
        description: "A self-hosted, cross-device streaming platform for movies and TV shows with a rich admin panel and advanced video playback features.",
        subDescription: [
            "Frontend: React Native for mobile apps, React for web , Backend: Node.js with Express, Database: MongoDB, Authentication: Secure login with JWT , Video Player: Multi-subtitle and multi-audio track support , Admin Panel: Media library management, posters & metadata handling",
        ],
        href: "",
        logo: "",
        image: NextGenImg,
        tags: [
            {
                id: 1,
                name: "React Native",
                path: react,
            },
            {
                id: 2,
                name: "MongoDB",
                path: mongodb,
            },
            {
                id: 3,
                name: "CSS",
                path: Css,
            },
        ],
    },
    {
        id: 3,
        title: "College Club Web Page Design",
        description:
            "A responsive, visually appealing website designed to showcase college clubs, events, and activities. The page highlights club missions, members, upcoming events, and contact information to engage students and encourage participation.",
        subDescription: [
            "Frontend: HTML5, CSS3, JavaScript",
            "Structure: Multiple sections including Hero, About, Events, and Contact",
            "Features: Event calendar, photo gallery, and club details",
        ],
        href: "",
        logo: "",
        image: ClubWebDesignImg,
        tags: [
            {
                id: 1,
                name: "HTML",
                path: Html,
            },
            {
                id: 2,
                name: "CSS",
                path: Css,
            },
            {
                id: 3,
                name: "JavaScript",
                path: javascript,
            },
        ],
    },



];

export const reviews = [
    {
        name: "Anup",
        username: "@anup",
        body: "I've never seen anything like this before. It's amazing. I love it.",
        img: "https://robohash.org/Anup",
    },
    {
        name: "Nikunj",
        username: "@nikunj",
        body: "I don't know what to say. I'm speechless. This is amazing.",
        img: "https://robohash.org/Nikunj",
    },
    {
        name: "Chirantan",
        username: "@chirantan",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "https://robohash.org/Chirantan",
    },
    {
        name: "Tanay",
        username: "@tanay",
        body: "This is hands down the best thing I've experienced. Highly recommend!",
        img: "https://robohash.org/Tanay",
    },
    {
        name: "Raghav",
        username: "@raghav",
        body: "Incredible work! The attention to detail is phenomenal.",
        img: "https://robohash.org/Raghav",
    },
    {
        name: "Suraj",
        username: "@suraj",
        body: "This exceeded all my expectations. Absolutely stunning!",
        img: "https://robohash.org/Suraj",
    },
    {
        name: "Tejas",
        username: "@Tejas",
        body: "Simply breathtaking. The best decision I've made in a while.",
        img: "https://robohash.org/Tejas?set=set2",
    },
    {
        name: "Vivek",
        username: "@vivek",
        body: "So glad I found this. It has changed the game for me.",
        img: "https://robohash.org/Vivek?set=set4",
    },
]
