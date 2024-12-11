"use client"
import React, { useEffect } from 'react'
import SelectBar from './SelectBar'
import useMangaApi, { useMangaApiGet } from '../common/useMangaApi';

export default function Upload() {


  return (
    <>
        
      <div className="font-bold text-[26px]">Upload Chapter</div>
    
        <SelectBar></SelectBar>
    </>
  )
}
