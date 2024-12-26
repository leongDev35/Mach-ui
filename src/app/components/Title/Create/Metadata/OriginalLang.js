'use client'
import Image from 'next/image';
import React, { useState } from 'react'

export default function OriginalLangArray({nations, updateSelectedItem, setOriginalLang}) {

    return (
        <>
               {nations.map((nation, idx) => (
                    <div
                        key={idx}
                        className="px-4 py-2 hover:bg-[--background-light-purple] cursor-pointer flex items-center"
                        onClick={() => updateSelectedItem(nation,setOriginalLang)}
                    >
                        <Image
                            src={nation.flag}
                            alt={`${nation.name} flag`}
                            width={30}
                            height={20}
                        />
                        <span style={{ marginLeft: '10px' }}>{nation.name}</span>
                    </div>
                ))}
        </>

    )
}
