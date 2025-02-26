import React from 'react'

export default function SinglePage({setFlagScroll, containerListPageRef, chapter, currentPage, setCurrentPage, pageRefs, toggleSidebarRight, currentImageFit, pages }) {

  return (
    <div ref={containerListPageRef} className="list-pages flex flex-col items-center w-full mt-8 cursor-pointer">
      {!chapter ? (
        <div>Loading...</div>
      ) : (
        <>
          <div
            className={`relative mt-1 ${currentImageFit === 0 ? "w-full h-auto" : //! fit width
              currentImageFit === 1 ? "h-[100vh]" : //! fit height
                currentImageFit === 2 ? "h-[100vh]" : // fit both
                  "w-max h-max" // no limit
              }`}
          >
            {/* Click vùng trái - lùi trang */}
            <div className="absolute top-0 left-0 right-0 flex h-full">
              <div className="flex-1 h-full"
                onClick={() => {
                  if (currentPage > 1) {
                    setFlagScroll(false);
                    setCurrentPage(parseInt(currentPage, 10) - 1);
                  }
                }}
              />

              {/* Click giữa - mở Sidebar */}
              <div className="flex-1 h-full" onClick={toggleSidebarRight} />

              {/* Click vùng phải - tiến trang */}
              <div className="flex-1 h-full"
                onClick={() => {
                  if (currentPage < pages.length) {
                    setFlagScroll(false);
                    setCurrentPage(parseInt(currentPage, 10) + 1);
                  }
                }}
              />
            </div>

            {/* Hình ảnh hiển thị */}
            <img
              className={`object-contain max-w-full mt-1 ${currentImageFit === 0 ? "w-full h-auto" :
                  currentImageFit === 1 ? "w-auto h-full" :
                    currentImageFit === 2 ? "w-auto h-full" :
                      "w-auto h-full"
                }`}
              src={chapter.pages[currentPage - 1].imageUrl}
              alt="Picture"
            />
          </div>
        </>
      )}
    </div>
  );
}

