"use client"
import React, { useEffect, useState } from 'react'
import SelectBar from './SelectBar'
import { useMangaApiPost } from '../common/useMangaApi';
import { useSelector } from 'react-redux';
import { getCurrentDate } from '../common/commonFunc';

export default function Upload() {
  // state selected field
  const [selectedManga, setSelectedManga] = useState(null);
  const [chapterNumber, setChapterNumber] = useState('')
  const [chapterName, setChapterName] = useState('')
  const [selectedImages, setSelectedImages] = useState([]);
  const { sendMangaData, loading, error } = useMangaApiPost();

  const user = useSelector(({ users }) => {
    return users.user;

  });

  const isSaveEnabled =
    chapterName &&
    chapterNumber &&
    selectedImages.length > 0 &&
    selectedManga &&
    user.id;

  const handleSave = async () => {
    const pages = selectedImages.map(item => ({
      imageUrl: `/${item.name}`
    }))
    const payload = {
      chapterNumber: chapterNumber,
      chapterName: chapterName,
      mangaId: selectedManga.id,
      uploadUserId: user.id,
      pages: pages,
      releaseDate: getCurrentDate()
    };
    console.log(payload);
    const response = await sendMangaData(payload, '/chapter');
    if (response) {
      console.log("Chapter saved successfully:", response);
      // router.push('/'); // Redirect to the homepage
    }
  }
  return (
    <>

      <div className="font-bold text-[26px]">Upload Chapter</div>

      <SelectBar
        chapterNumber={chapterNumber}
        setChapterNumber={setChapterNumber}
        chapterName={chapterName}
        setChapterName={setChapterName}
        selectedManga={selectedManga}
        setSelectedManga={setSelectedManga}
        selectedImages={selectedImages}
        setSelectedImages={setSelectedImages}
      ></SelectBar>
      <hr className='border-[--text-gray] my-8 h-1' />

      <div className=" sticky bottom-0 py-2 bg-[--background-tags] relative">
        <div className='flex justify-end gap-4 '>
          <button className={`mb-1 w-56 text-white  px-3 py-2 rounded-lg select-none
           bg-[--background-grey]
            `}
          // onClick={handleCancel}
          >Cancell</button>
          <button className={`mb-1 w-56 text-white  px-3 py-2 rounded-lg select-none
             
           ${isSaveEnabled ? 'bg-[--color-pink-purple]' : 'bg-[--background-grey] cursor-not-allowed pointer-events-none'}  
            `}
            onClick={handleSave}
            disabled={!isSaveEnabled}
          >
            {loading ? 'Submitting...' : 'Save'}
          </button>
          {error && <p>Error: {error}</p>}
        </div>

      </div>
    </>
  )
}
