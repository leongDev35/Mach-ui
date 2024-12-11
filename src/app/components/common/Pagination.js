"use client"

import React, { useEffect } from 'react'
import { useMangaApiGet } from '../common/useMangaApi';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
 
    const handlePrevious = () => {
        if (currentPage > 0) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) onPageChange(currentPage + 1);
    };

    return (
        <div className="pagination flex gap-1">
            <button className="pagination-button" onClick={handlePrevious} disabled={currentPage === 0}>
                <svg data-v-9ba4cb7e data-v-fa81b2e8 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-arrow-left icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="M19 12H5m7 7-7-7 7-7" /></svg>
            </button>

            <div className="list-page-numbers">
                <div className="page-number active">1</div>
                <div className="page-number">2</div>
                <div className="page-number text-3xl">...</div>
                <div className="page-number">3</div>
            </div>
            <button className="pagination-button" onClick={handleNext} disabled={currentPage === totalPages - 1}>
                <svg data-v-9ba4cb7e data-v-fa81b2e8 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-arrow-right icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
            </button>
        </div>
    );
}