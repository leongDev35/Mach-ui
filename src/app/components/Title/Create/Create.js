'use client'
import React, { useEffect, useState } from 'react'
import Title from './Title'
import Metadata from './Metadata'

export default function Create() {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    // Fetch JSON từ public folder
    fetch('/countries.json')
      .then((response) => response.json())
      .then((data) => setNations(data));
  }, []);
  return (
    <>
      <div className="font-bold text-[26px]">Create Title</div>
      <div className='flex flex-col tablet:flex-row'>
        <div className=' w-full tablet:w-[110px]'>
          <ul className="menu-sidebar-create">
            <li>All</li>
            <li>Title</li>
            <li>Metadata</li>
            <li>Tags</li>
            <li>Sites</li>
            <li>Relations</li>
            <li>Covers</li>
          </ul>
        </div>
        <div className='grow pl-4 text-white '>
          <Title nations ={nations}></Title>
          <hr className='border-[--text-gray] my-8 h-1' />
          <Metadata nations ={nations}></Metadata>
        </div>
      </div>
    </>

  )
}
