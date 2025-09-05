import React, { useState } from 'react'
import copyIcon from "../assets/copy.svg"
import copyDoneIcon from "../assets/copy-done.svg"
export default function CopyEmail() {
    const [copied , setCopied] = useState(false)
    const email ="ankurraj667@gmail.com";
    const copyToClipboard = () =>{
        navigator.clipboard.writeText(email)
        setCopied(true);

        setTimeout(()=>{
           setCopied(false);
        },2000);
    }

   
  return (
    <button onClick={copyToClipboard} className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'>
         {copied ? (<p className='flex items-center justify-center gap-2'>
            <img src={copyDoneIcon} alt="copy-icon" className='w-5' />
            Email has Copied
        </p>):
        (<p  className='flex items-center justify-center gap-2'>
            <img src={copyIcon} alt="copy-icon" className='w-5' />
            Copy Email Addresss
        </p>)}
    </button>
  )
}
