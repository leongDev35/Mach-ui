import React from 'react'

export default function SelectGroupModal({ isSelectGroupModalOpen, closeModal, handleOutsideClick, firstChapterList }) {

    return (
        <>{isSelectGroupModalOpen &&
            <>

                {firstChapterList.length > 0 ?
                    <div className="select-group-modal-content">
                        <div className='flex justify-between items-center mb-4'>
                            <div className="text-xl">Select Group</div>
                            <span onClick={closeModal}>
                                <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon med" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                            </span>
                        </div>
                        <div className="list-group ">

                            {firstChapterList.map((chapter, index) => {
                                return (
                                    <div key={index} className="item-list-group grid grid-cols-[568px_150px] gap-0.5 py-1 px-2 rounded">
                                        <div className="flex items-center font-bold">
                                            <img className="inline-block mr-2" title="Japanese" src={`/flags/vn.svg`} alt="Vietnamese flag icon" width="22" height="22"></img>
                                            Ch.1 - {chapter.name}
                                        </div>
                                        <div className="flex items-center">
                                        <svg data-v-9ba4cb7e data-v-c031ce93 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-clock icon small text-icon-contrast text-undefined mr-1 sm:mr-1.5 md:mr-2" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} /><path d="M12 6v6l4 2" /></svg>

                                           {chapter.releaseDate}
                                        </div>
                                        <div className='flex items-center'>
                                            <svg data-v-9ba4cb7e data-v-c1ca7027 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="ml-[3px] mr-3"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" /></svg>
                                            Leo
                                        </div>
                                        <div className='flex items-center text-[--color-purple]'>
                                        <svg data-v-9ba4cb7e data-v-514756c3 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined mr-0.5 md:mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>
                                            leo
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                    </div> :
                    <div className='select-group-modal-content'>
                        <div className='flex justify-between items-center mb-4'>
                            <div className="text-xl">Select Group</div>
                            <span onClick={closeModal}>
                                <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon med" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                            </span>
                        </div>
                        <div className="w-[738px]">
                            No chapter founded
                        </div>
                    </div>}

                <div id='select-group-modal' onClick={handleOutsideClick}>

                </div>
            </>
        }

        </>

    )
}
