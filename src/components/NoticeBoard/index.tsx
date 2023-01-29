import React from 'react';
import {Link} from 'react-router-dom'

import {FunctionComponent} from 'react'

const Title = () =>(
    <a href = "/">
        <img  className = " h-20 inline w-18"
    src = "https://en.janbharattimes.com/wp-content/uploads/2022/01/campus-diaries.jpg" 
    alt ="This is logo"
    />

    </a>
    
)


export const NoticeBoard :FunctionComponent = () =>{
    return (
      
        <nav className='p-2 bg-grey shadow md:flex md:items-center md:justify-between'  >
            <div>
                <span className=''>
                    <Title/>
                </span>
                
            </div>
            <ul className= "md:flex md:items-center">
                <li className="mx-4" >
                    <a href= "#" className="text-xl hover:text-cyan-500 duration-500">GENERAL UPADTES</a>
                </li>
                <li className="mx-4">
                    <a href= "#" className="text-xl hover:text-cyan-500 duration-500">CULTURAL/TECHNICAL UPDATES</a>
                </li>
                <li className="mx-4">
                    <a href= "#" className="text-xl hover:text-cyan-500 duration-500">JOB/INTERNSHIP ANNOUNCEMENTS</a>
                </li>

                <Link to = "/auth/login">
                <button className='bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>
                    LOGIN
                </button>
                </Link>
                
                
                
                
            </ul>

       
            
        
         


        </nav>
        
    )
}