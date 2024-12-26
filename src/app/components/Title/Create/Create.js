'use client'
import React, { useEffect, useState } from 'react'
import Tags from './Tags/Tags';
import Cover from './Cover/Cover';
import Metadata from './Metadata/Metadata';
import Title from './Title/Title';
import {useMangaApiPost} from '../../common/useMangaApi';
import { useRouter } from 'next/navigation';

export default function Create() {

  const [nations, setNations] = useState([]);
  const [displayScreen, setDisplayScreen] = useState("All");
  const [name, setName] = useState("");
  const [listAltTitles, setListAltTitles] = useState([]);
  const [listAuthor, setListAuthor] = useState([]);
  const [listArtist, setListArtist] = useState([]);
  const [releaseYear, setReleaseYear] = useState('');
  const [description, setDescription] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [originalLanguage, setOriginalLanguage] = useState(null);
  const [contentRating, setContentRating] = useState(null);
  const [publicationStatus, setPublicationStatus] = useState(null);
  const [listTags, setListTags] = useState([]);

  const { sendMangaData, loading, error } = useMangaApiPost();
  const router = useRouter();
  

  const isSaveEnabled =
    name &&
    listAuthor.length > 0 &&
    listArtist.length > 0 &&
    coverImage &&
    originalLanguage &&
    contentRating &&
    publicationStatus;

  const handleSave = async () => {
    const altTitles = listAltTitles.map(item => ({
      title: item.title,
      language: item.nation.name
    }));
    const coverUrl = `\${coverImage.name}`;
    
    const payload = {
      name: name,
      altTitles: altTitles,
      listAuthor: listAuthor,
      listArtist: listArtist,
      releaseYear: releaseYear,
      description: description,
      coverImage: coverUrl,
      originalLanguage: originalLanguage,
      listTags: listTags,
      contentRating: contentRating.toUpperCase(),
      publicationStatus: publicationStatus.toUpperCase()
    };
    const response = await sendMangaData(payload, '/manga');
    if (response) {
      console.log("Manga saved successfully:", response);
      router.push('/'); // Redirect to the homepage
    }
  }
  
  const handleCancel = async () => {
    router.push('/'); // Redirect to the homepage
  }

  const setValueDisplayScreen = (value) => {
    setDisplayScreen(value);
  }

  const handleInputChange = (e, setInputFunc) => {
    setInputFunc(e.target.value);
  };

  useEffect(() => {
    // Fetch JSON từ public folder
    fetch('/countries.json')
      .then((response) => response.json())
      .then((data) => setNations(data));
  }, []);
  return (
    <>
      <div className="font-bold text-[26px]">Create Title</div>
      <div className='flex flex-col gap-1 tablet:flex-row'>
        {/* tablet:w-[150px]  desktop: */}
        <div className=' w-full tablet:w-[150px]'>
          <ul className="menu-sidebar-create w-full sticky top-[78px]">
            <li onClick={() => {
              setValueDisplayScreen("All")
            }
            } >All</li>
            <li onClick={() => {
              setValueDisplayScreen("Title")
            }
            }>Title</li>
            <li onClick={() => {
              setValueDisplayScreen("Metadata")
            }
            }>Metadata</li>
            <li onClick={() => {
              setValueDisplayScreen("Tags")
            }
            }>Tags</li>
            <li onClick={() => {
              setValueDisplayScreen("Cover")
            }
            }>Covers</li>
          </ul>
        </div>
        <div className='grow max-w-[1222px] pl-4 text-white '>
          {displayScreen == 'Title' &&
            <>
              <Title
                nations={nations}
                name={name}
                setName={setName}
                handleInputChange={handleInputChange}
                listAltTitles={listAltTitles}
                setListAltTitles={setListAltTitles}
                description={description}
                setDescription={setDescription}
              ></Title>
              <hr className='border-[--text-gray] my-8 h-1' />
            </>
          }
          {displayScreen == 'Metadata' &&
            <>
              <Metadata
                nations={nations}
                setListAuthor={setListAuthor}
                setListArtist={setListArtist}
                listAuthor={listAuthor}
                listArtist={listArtist}
                releaseYear={releaseYear}
                setReleaseYear={setReleaseYear}
                setOriginalLanguage={setOriginalLanguage}
                contentRating={contentRating}
                setContentRating={setContentRating}
                publicationStatus={publicationStatus}
                setPublicationStatus={setPublicationStatus}
              ></Metadata>
              <hr className='border-[--text-gray] my-8 h-1' />
            </>
          }
          {displayScreen == 'Tags' &&
            <>
              <Tags
                setListTags={setListTags}
              ></Tags>
              <hr className='border-[--text-gray] my-8 h-1' />
            </>
          }
          {displayScreen == 'Cover' &&
            <>
              <Cover image={coverImage} setImage={setCoverImage}></Cover>
              <hr className='border-[--text-gray] my-8 h-1' />
            </>
          }
          {displayScreen == 'All' &&
            <>
              <Title
                nations={nations}
                name={name}
                setName={setName}
                handleInputChange={handleInputChange}
                listAltTitles={listAltTitles}
                setListAltTitles={setListAltTitles}
                description={description}
                setDescription={setDescription}
              ></Title>
              <hr className='border-[--text-gray] my-8 h-1' />
              <Metadata
                nations={nations}
                setListAuthor={setListAuthor}
                setListArtist={setListArtist}
                listAuthor={listAuthor}
                listArtist={listArtist}
                releaseYear={releaseYear}
                setReleaseYear={setReleaseYear}
                setOriginalLanguage={setOriginalLanguage}
                contentRating={contentRating}
                setContentRating={setContentRating}
                publicationStatus={publicationStatus}
                setPublicationStatus={setPublicationStatus}
              ></Metadata>
              <hr className='border-[--text-gray] my-8 h-1' />
              <Tags
                setListTags={setListTags}
              ></Tags>
              <hr className='border-[--text-gray] my-8 h-1' />
              <Cover image={coverImage} setImage={setCoverImage}

              ></Cover>
              <hr className='border-[--text-gray] my-8 h-1' />
            </>
          }

          <div className=" sticky bottom-0 py-2 bg-[--background-tags] relative">
            <div className='flex justify-end gap-4 '>
              <button className={`mb-1 w-56 text-white  px-3 py-2 rounded-lg select-none
           bg-[--background-grey]
            `}
              onClick={handleCancel}
              >Cancel</button>
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

        </div>
      </div>
    </>

  )
}
