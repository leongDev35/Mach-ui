"use client"
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import ListOption from '../../common/ListOption';
import UpdateByList from '../RecentlyAdded/UpdateByList';
import UpdateByListChap from '../RecentlyAdded/UpdateByListChap';
import UpdateByListCover from '../RecentlyAdded/UpdateByListCover';
import SearchBar from './SearchBar';
export default function AdvancedSearch() {

  const [selectOption, setSelectOption] = useState("byList");

  const searchParams = useSearchParams();

  // Lấy giá trị của từng query parameter
  const page = searchParams.get('page');
  const onlyAvailableChapters = searchParams.get('onlyAvailableChapters');
  const translatedLang = searchParams.get('translatedLang');
  const include = searchParams.get('include');
  const statuses = searchParams.get('statuses');
  const content = searchParams.get('content');
  const demos = searchParams.get('demos');
  const originLang = searchParams.get('originLang');
  const order = searchParams.get('order');
  const artist = searchParams.get('artist');
  const year = searchParams.get('year');

  // Xử lý 'include' là một danh sách các ID
  const includeIds = include ? include.split(',') : [];

  const listItems = [
    {
      d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
      option: "byList"
    }

    ,
    {
      d: "M21 3H3v7h18zm0 11H3v7h18z",
      option: "byListChap"

    },
    {
      d: "M10 3H3v7h7zm11 0h-7v7h7zm0 11h-7v7h7zm-11 0H3v7h7z",
      option: "byListCoverManga"

    }
  ];
  return (
    <>
      <div className="font-bold text-[26px]">Advanced Search</div>
      {/* <div>
        <h1>Page: {page}</h1>
        <p>Only Available Chapters: {onlyAvailableChapters}</p>
        <p>Translated Language: {translatedLang}</p>
        <p>Statuses: {statuses}</p>
        <p>Content: {content}</p>
        <p>Demos: {demos}</p>
        <p>Origin Language: {originLang}</p>
        <p>Order By: {order}</p>
        <p>Artist ID: {artist}</p>
        <p>Year: {year}</p>
        <p>Included Genres/Tags IDs:</p>
        <ul>
          {includeIds.map((id) => (
            <li key={id}>{id}</li>
          ))}
        </ul>
      </div> */}
      {/* Search bar */}
      <SearchBar></SearchBar>


      <div>
        <ListOption setSelectOption={setSelectOption} listItems={listItems}></ListOption>

        {/* Search Result */}
        {selectOption === 'byList' ? <UpdateByList></UpdateByList>
          : selectOption === 'byListChap' ? <UpdateByListChap></UpdateByListChap> :
            <UpdateByListCover></UpdateByListCover>

        }
      </div>


    </>

  );
};
