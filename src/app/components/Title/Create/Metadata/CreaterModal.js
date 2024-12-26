import { handleInputChange } from '@/app/components/common/commonFunc';
import axios from 'axios';
import React, { useState } from 'react'

export default function CreaterModal({title, isCreaterModalOpen, closeModal, handleOutsideClick, newAuthor, setNewAuthor, setListAuthorName, listAuthorName }) {
    const [isExist, setIsExist] = useState(false);

    const handleConfirmClick = async () => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/creaters/exists`, {
                params: {
                    name: newAuthor,
                },
            });

            if (response.data || listAuthorName.some(item => item === newAuthor)) {
                setIsExist(true);
            } else {
                setIsExist(false);
                setListAuthorName((prev) => [...prev, newAuthor]);
                setNewAuthor("")
                closeModal();
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            {isCreaterModalOpen && <>
                <div className="select-group-modal-content w-[800px]">
                    <div className='flex justify-between items-center mb-4'>
                        <div className="text-xl">Create ({title})</div>
                        <span className='cursor-pointer' onClick={closeModal}>
                            <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon med" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                        </span>
                    </div>
                    <div>{title} Name</div>
                    <input
                        className="input-create-page my-2 text-sm w-full rounded px-2 py-2 bg-[--sidebar-background]"
                        value={newAuthor}
                        onChange={(e) => {
                            handleInputChange(e, setNewAuthor)
                        }}

                        placeholder={"Enter the author's name"}
                    />
                    {isExist && <div className='text-red-500'>Author Name existed</div>}

                    <div>
                        <div className='flex justify-end gap-4 '>
                            <button className={`mb-1 w-56 text-white  px-3 py-2 rounded-lg select-none  bg-[--background-grey] `}
                                onClick={closeModal}
                            >Cancel</button>
                            <button className={`mb-1 w-56 text-white  px-3 py-2 rounded-lg select-none
            ${newAuthor ? 'bg-[--color-pink-purple]' : 'bg-[--background-grey] cursor-not-allowed pointer-events-none'} `}
                                onClick={handleConfirmClick}
                            >Confirm</button>
                        </div>
                    </div>
                </div>
                <div id='select-group-modal' onClick={handleOutsideClick}>
                </div>
            </>}


        </>
    )
}
