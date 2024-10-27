import React from 'react'

export default function SelectGroupModal({ isSelectGroupModalOpen, openModal, closeModal, handleOutsideClick }) {

    return (
        <>{isSelectGroupModalOpen &&
            <>
                <div className="select-group-modal-content">
                    <div className='flex justify-between items-center mb-4'>
                        <div className="text-xl">Select Group</div>
                        <span onClick={closeModal}>
                            <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon med" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                        </span>
                    </div>
                    <div className="list-group">
                        <div className="item-list-group grid  grid-cols-[568px_150px] gap-0.5 py-1 px-2 rounded">
                            <div>
                                Ch.1 - Tiết 1
                            </div>
                            <div>
                                last year
                            </div>
                            <div>
                                Senukin
                            </div>
                            <div>
                                senukin
                            </div>
                        </div>
                    </div>
                </div>
                <div id='select-group-modal' onClick={handleOutsideClick}>

                </div>
            </>
        }

        </>

    )
}
