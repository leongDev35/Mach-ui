"use client"
import React, { useState, useEffect, useRef } from 'react'
import FilterTags from './FilterTags';
import SortBy from './SortBy';
import CheckboxFilter from './CheckboxFilter';
import CreaterFilter from './CreaterFilter';
import PublicationYear from './PublicationYear';
import HasTranslateChapters from './HasTranslateChapters';


export default function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [inputValueSearchTags, setInputValueSearchTags] = useState('');
  const [sortBy, setSortBy] = useState('None');
  const [switchDropdown, setSwitchDropdown] = useState(false)
  const [switchDropdownFilterTag, setSwitchDropdownFilterTag] = useState(false)
  const [switchDropdownCheckBox, setSwitchDropdownCheckBox] = useState(false)
  const [switchDropdownDemographic, setSwitchDropdownDemographic] = useState(false)
  const [switchDropdownPublicationStatus, setSwitchDropdownPublicationStatus] = useState(false)
  const [switchDropdownOriginalLanguages, setSwitchDropdownOriginalLanguages] = useState(false)
  const [switchDropdownAuthors, setSwitchDropdownAuthors] = useState(false)
  const [switchDropdownArtists, setSwitchDropdownArtists] = useState(false)
  const [switchDropdownHasTranslateChapter, setSwitchDropdownHasTranslateChapter] = useState(false)
  const [publicYear, setPublicYear] = useState(null)
  const dropdownRef = useRef(null);
  const dropdownFilterTagsRef = useRef(null);
  const dropdownCheckboxFilterRef = useRef(null);
  const dropdownMagazineDemographicFilterRef = useRef(null);
  const dropdownPublicationStatusFilterRef = useRef(null);
  const dropdownOriginalLanguagesFilterRef = useRef(null);
  const dropdownAuthorsFilterRef = useRef(null);
  const dropdownArtistsFilterRef = useRef(null);
  const dropdownHasTranslateChapterFilterRef = useRef(null);

  const sortByOption = ['None', 'Best Match', 'Newest', 'Popular', 'Top Rated', 'Trending'];

  const handleInputChange = (e, setInputFunc) => {
    setInputFunc(e.target.value);
  };

  const clearInput = (setInputFunc) => {
    setInputFunc(''); // Xóa giá trị
  };

  const handleClickSortBy = (option) => {
    setSortBy(option);
  }

  // ! turn on dropdown
  const turnSwitchdown = (setTurnSwitchDownFunc, switchDropDownType) => {
    setTurnSwitchDownFunc(!switchDropDownType);
  }

  const turnoffSwitchdown = (setSwitchDropdownFunc) => {
    setSwitchDropdownFunc(false);
  }

  function checkHandleOutsite(event, ref, setDropdownFunc) {
    if (ref.current && !ref.current.contains(event.target)) {
      turnoffSwitchdown(setDropdownFunc);
    }
  }

  const handleOutsideSwitchdown = (event) => {
    checkHandleOutsite(event, dropdownRef, setSwitchDropdown);
    checkHandleOutsite(event, dropdownFilterTagsRef, setSwitchDropdownFilterTag);
    checkHandleOutsite(event, dropdownCheckboxFilterRef, setSwitchDropdownCheckBox);
    checkHandleOutsite(event, dropdownMagazineDemographicFilterRef, setSwitchDropdownDemographic);
    checkHandleOutsite(event, dropdownPublicationStatusFilterRef, setSwitchDropdownPublicationStatus);
    checkHandleOutsite(event, dropdownOriginalLanguagesFilterRef, setSwitchDropdownOriginalLanguages);
    checkHandleOutsite(event, dropdownAuthorsFilterRef, setSwitchDropdownAuthors);
    checkHandleOutsite(event, dropdownArtistsFilterRef, setSwitchDropdownArtists);
    checkHandleOutsite(event, dropdownHasTranslateChapterFilterRef, setSwitchDropdownHasTranslateChapter);
  }


  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideSwitchdown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideSwitchdown);
    };
  }, []);

  return (
    <>

      <div className="top-search-bar flex gap-2 text-white mb-6">
        <div className="search-bar-input flex grow bg-[--sidebar-background] relative rounded">
          <div className='absolute left-[11px] top-[7px]'>
            <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35" /></svg>
          </div>
          <input type="text" className="input-advanced-search w-full bg-[--sidebar-background]" value={inputValue}
            onChange={(e) => {
              handleInputChange(e, setInputValue)
            }} placeholder='Search' />
          {inputValue && (
            <div onClick={() => {
              clearInput(setInputValue)
            }} className="clear-input-button absolute right-[11px] top-[7px]">
              <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-text-white"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
            </div>)}
        </div>
        <div className="w-[192px] flex items-center bg-[--sidebar-background] rounded pl-8">
          <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-down icon mr-4" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m6 9 6 6 6-6" /></svg>

          <div>
            Show filters
          </div>
        </div>
      </div>
      {/* filter */}
      <div className="w-full grid gap-6 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 pb-8">
        {/* filter item */}


        <SortBy
          dropdownRef={dropdownRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdown}
          setSwitchDropdown={setSwitchDropdown}
          sortByOption={sortByOption}
          handleClickSortBy={handleClickSortBy}
          turnoffSwitchdown={turnoffSwitchdown}
          sortBy={sortBy}
        ></SortBy>
        {/* filter item */}

        <FilterTags dropdownFilterTagsRef={dropdownFilterTagsRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdownFilterTag={switchDropdownFilterTag}
          setSwitchDropdownFilterTag={setSwitchDropdownFilterTag}
          handleInputChange={handleInputChange}
          inputValueSearchTags={inputValueSearchTags}
          setInputValueSearchTags={setInputValueSearchTags}
          clearInput={clearInput}
          sortBy={sortBy}
        ></FilterTags>

        {/* filter item */}

        <CheckboxFilter
          title={"Content Rating"}
          placeholder={"Any"}
          dropdownRef={dropdownCheckboxFilterRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdownCheckBox}
          setSwitchDropdown={setSwitchDropdownCheckBox} g
        ></CheckboxFilter>
        <CheckboxFilter
          title={"Magazine Demographic"}
          placeholder={"Any"}
          dropdownRef={dropdownMagazineDemographicFilterRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdownDemographic}
          setSwitchDropdown={setSwitchDropdownDemographic}
        ></CheckboxFilter>

        <CheckboxFilter
          title={"Publication Status"}
          placeholder={"Any"}
          dropdownRef={dropdownPublicationStatusFilterRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdownPublicationStatus}
          setSwitchDropdown={setSwitchDropdownPublicationStatus}
        ></CheckboxFilter>
        <CheckboxFilter
          title={"Original Languages"}
          placeholder={"All languages"}
          dropdownRef={dropdownOriginalLanguagesFilterRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdownOriginalLanguages}
          setSwitchDropdown={setSwitchDropdownOriginalLanguages}
        ></CheckboxFilter>
        <CreaterFilter
          title={"Authors"}
          placeholder={"Any"}
          dropdownRef={dropdownAuthorsFilterRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdownAuthors}
          setSwitchDropdown={setSwitchDropdownAuthors}
        >
        </CreaterFilter>
        <CreaterFilter
          title={"Artists"}
          placeholder={"Any"}
          dropdownRef={dropdownArtistsFilterRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdownArtists}
          setSwitchDropdown={setSwitchDropdownArtists}
        >
        </CreaterFilter>
        <PublicationYear
          title={"Publication year"}
          placeholder={"Any"}
          publicYear={publicYear}
          setPublicYear={setPublicYear}
        ></PublicationYear>

        <HasTranslateChapters
          title={"Has translated chapters"}
          placeholder={"All languages"}
          dropdownRef={dropdownHasTranslateChapterFilterRef}
          turnSwitchdown={turnSwitchdown}
          switchDropdown={switchDropdownHasTranslateChapter}
          setSwitchDropdown={setSwitchDropdownHasTranslateChapter}
        ></HasTranslateChapters>
      </div>

    </>
  )
}
