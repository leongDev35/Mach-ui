"use client";

export default function WideStrip({setFlagScroll, chapter, currentPage, setCurrentPage, pageRefs, toggleSidebarRight, currentImageFit, pages, containerListPageRef }) {
  return (
    <div ref={containerListPageRef} className="list-pages flex flex-row-reverse items-center gap-1 overflow-x-scroll w-[94vw] mt-8 cursor-pointer">
      {!chapter ? (
        <div>Loading...</div>
      ) : (
        <>
          {chapter.pages.map((page, index) => (
            <div
              key={index}
              ref={(el) => (pageRefs.current[index] = el)}
              className={`relative pt-24 ${
                currentImageFit === 0 ? "w-[100vw] h-auto" : //! fit width
                currentImageFit === 1 ? "h-[100vh]" : //! fit height
                currentImageFit === 2 ? "h-[100vh]" : //! fit both
                "w-max h-max" //! no limit
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
                className={` ${
                  currentImageFit === 0 ? "max-w-[100vw] min-w-[100vw] h-auto" :
                  currentImageFit === 1 ? "max-w-max h-full" :
                  currentImageFit === 2 ? "max-w-none h-[100vh]" :
                  "max-w-max h-max"
                }`}
                src={page.imageUrl}
                alt="Picture"
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
