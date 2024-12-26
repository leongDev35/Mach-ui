import Image from 'next/image'
import React from 'react'

export default function ContentInside({ updateSelectedItem, names }) {
  return (
    <>
    {names.map((name, idx) => (
       <div
           key={idx}
           className="px-4 py-2 hover:bg-[--background-light-purple] cursor-pointer flex items-center"
           onClick={() => updateSelectedItem(name)}
       >
        
           <span style={{ marginLeft: '10px' }}>{name}</span>
       </div>
   ))}
</>
  )
}
