import React from 'react'
import codingImg from "../assets/coding-pov.png";
import CSharpLogo from "../assets/csharp-pink.png"
import JavaLogo from "../assets/java.png"
import ReactLogo from "../assets/react.png"
import Card from '../components/Card';
import { useRef } from 'react';
import { Globe } from '../components/Globe';
import CopyEmail from '../components/CopyEmail';
import { IconCloud } from '../components/IconCloud';
import Html from '../assets/logo/html.png'
import Css from '../assets/logo/css3.png'
import javascript from '../assets/logo/javascript.png'
import android from '../assets/logo/android.png'
import nodedotjs from '../assets/logo/nodejs1.png'
import express from '../assets/logo/expressColor.png'
import spring from '../assets/logo/springboot.png'
import amazonaws from '../assets/logo/awsColor.png'
import postgresql from '../assets/logo/postgresql.png'
import firebase from '../assets/logo/firebase.png'
import nginx from '../assets/logo/nginx.png'
import docker from '../assets/logo/docker.png'
import git from '../assets/logo/git.png'
import vercel from '../assets/logo/vercel.png'
import mongoDb from '../assets/logo/mongodb.png'
import github from '../assets/logo/github2.png'
import gitlab from '../assets/logo/gitlab.png'
import visualstudiocode from '../assets/logo/vsCode.png'
import androidstudio from '../assets/logo/androidstudio.png'
import figma from '../assets/logo/figma.png'
export default function About() {
  const techLogos = [CSharpLogo, JavaLogo, ReactLogo, Html, Css, javascript, android, nodedotjs, express, spring, amazonaws,
  postgresql,
  firebase,
  nginx,
  vercel,
  mongoDb,
  docker,
  git,
  github,
  gitlab,
  visualstudiocode,
  androidstudio,
  figma, ];
  const grid2Container = useRef();
  return (
    <section className='c-space section-spacing ' id="about">
      <h2 className='text-heading'>
        About Me
      </h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
        {/* grid 1 */}
        <div className='flex items-end grid-default-color grid-1'>
          <img src={codingImg} alt="coding-img" className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:insert-y-10 lg-scale-[2.5]'/>
          <div className='z-10'>
            <p className='headtext'> Hi, I'm Ankur Raj Singh</p>
            <p className='subtext'> Turning ideas into code and code into experiences!
              I developed my frontend and backend dev
              skills to deliver dynamic and software and web applications.</p>
          </div>
          <div className='absolute insert-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'></div>
        </div>
        {/* grid 2 */}
        <div className='grid-royal-color grid-2'>
          <div ref={grid2Container} className='flex items-center justify-center w-full h-full'>
            <p className='flex items-end text-5xl text-white-500'>
              CODE IS FUN
            </p>
            <Card text="FIGMA" containerRef={grid2Container} style={{rotate: "75deg", top:"60%", left:"75%" }}/>
            <Card text="GSAP" containerRef={grid2Container}  style={{rotate: "-75deg", top:"5%", left:"25%" }}/>
            <Card text="Graphic design"containerRef={grid2Container}  style={{rotate: "-95deg", bottom:"30%", left:"0%" }}/>
            <Card text="HTML" containerRef={grid2Container} style={{rotate: "75deg", top:"10%", left:"55%" }}/>
            <Card text="HTML" containerRef={grid2Container}  style={{rotate: "75deg", bottom:"10%", left:"55%" }}/>
            <Card text="Design Pattern" containerRef={grid2Container}  style={{rotate: "25deg", bottom:"12%", left:"25%" }}/>
            <Card image={CSharpLogo} containerRef={grid2Container} style={{rotate: "-45deg", top:"70%", left:"1%" }}/>
            <Card image={CSharpLogo} containerRef={grid2Container}  style={{rotate: "-55deg", top:"50%", left:"52%" }}/>
            <Card image={JavaLogo} containerRef={grid2Container}  style={{rotate: "45deg", bottom:"7%", right:"5%" }}/>
            <Card image={ReactLogo} containerRef={grid2Container} style={{rotate: "-45deg", top:"70%", left:"65%" }}/>
          </div>
        </div>
        {/* grid 3 */}
        <div className='grid-black-color grid-3'>
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Time Zone</p>
            <p className='subtext'> 
              Currently orbiting Earth, available for intergalactic remote gigs.
            </p>
          </div>
          <figure className='absolute left-[30%] top-[10%]'>
            <Globe />
          </figure>
        </div>
        {/* grid 4 */}
        <div className='grid-special-color grid-4'>
          <div className='flex flex-col items-center justify-center gap-4 size-full'>
            <p className='text-center headtext'>Do You want to start a poject together?</p>
            <CopyEmail />
          </div>
        </div>
        {/* grid 5 */}
        {/* <div className='grid-default-color grid-5 flex items-center justify-between' >
          <div className='z-10 w-[50%]'>
            <p className='headtext'>Tech Stack</p>
            <p className='subtext '>Transforming code into dynamic experiences with React up front, Node.js & Express powering the backend, and MongoDB or MySQL keeping it all together. </p>
          </div>
          <IconCloud images={techLogos} />
        </div> */}

        <div className="grid-default-color grid-5 flex flex-row items-center justify-between">
  {/* Text Section */}
  <div className="z-10 w-2/3 md:w-1/2">
    <p className="headtext">Tech Stack</p>
    <p className="subtext">
      Transforming code into dynamic experiences with React up front,
      Node.js & Express powering the backend, and MongoDB or MySQL keeping it all together.
    </p>
  </div>

  {/* IconCloud Section */}
  <div className="w-1/3 md:w-1/2 flex justify-center ">
    <div className="absolute inset-y-0 -top-20 md:inset-y-1-top-10 w-full h-full start-[50%] md:scale-125">
      <IconCloud images={techLogos} />
    </div>
  </div>
</div>


      </div>
    </section>
  )
}
