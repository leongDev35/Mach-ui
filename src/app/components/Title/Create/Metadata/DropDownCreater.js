import React from 'react'

export default function DropDownCreater({ openModal, listFoundAuthor, setListAuthorName, setIsDropdownOpen, setAuthorName }) {

    const handleAuthorClick = (authorName) => {
        // Kiểm tra nếu tên tác giả đã tồn tại trong mảng thì không thêm nữa
            setListAuthorName((prev) => [...prev, authorName]);
            setIsDropdownOpen(false);
            setAuthorName("");

    };

    return (
        <>
            <div className="absolute top-11 left-0  w-full bg-[--sidebar-background] z-20 rounded">
                {listFoundAuthor.length == 0 ?
                    <>
                        <div className="py-3 text-center italic">No results found.</div>
                    </>
                    :
                    <>
                        {listFoundAuthor.map((author) => (
                            <div key={author.id} className="searched-author" onClick={() => handleAuthorClick(author.name)}>
                                {author.name}
                            </div>
                        ))}
                    </>

                }

                <div className='searched-author text-purple-200' onClick={openModal}>+ Create</div>
            </div>
        </>
    )
}
