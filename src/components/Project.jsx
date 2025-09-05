import React ,{useState} from 'react'
import ArrowIcon from "../assets/arrow-right.svg"
import ProjectDetails from './ProjectDetails'
export default function Project({title,  description, subDescription, href, logo, image, tags}) {
    const [isHidden, setIsHidden ] = useState(false);
  return (
    <div className='flex-wrap  items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0'>
        <p className='text-2xl'>{title}</p>
        <div className='flex gap-5 mt-2 text-sand'>
            {tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
            ))}
        </div>
        <button onClick={() => {setIsHidden(true)}}className='flex items-center gap-1 cursor-pointer hover-animation'>
            Read More
            <img src={ArrowIcon} alt="arrow" className='w-5'/>
        </button>
        <div className='bg-gradient-to-r from-transparent via-neutral-700 mt-12 h-[1px] w-full'></div>
        {isHidden && (<ProjectDetails 
           title={title} 
           description={description} 
           subDescription={subDescription} 
           image={image} 
           tags={tags} 
           href={href}
           closeModel={() => setIsHidden(false)} />)}
           
    </div>
  )
}
