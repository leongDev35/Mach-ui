import Image from 'next/image'
import React from 'react'

export default function ContentOriginalLang({ updateNation, nations }) {
    return (
        <>
                 {nations.map((nation, idx) => (
                    <div
                        key={idx}
                        className="px-4 py-2 hover:bg-[--background-light-purple] cursor-pointer flex items-center"
                        onClick={() => updateNation(nation)}
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
