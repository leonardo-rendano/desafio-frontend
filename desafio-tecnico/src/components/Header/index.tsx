import React, { ChangeEvent, useContext, useEffect, useReducer, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { VideosContext } from '../../context/providers/videosProvider'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 
import  './Header.scss'


export const Header: React.FC = () => {
    const { searchVideosFromSeachBar, searchInputValue, setSearchInputValue, searchDataPersist } = useContext(VideosContext)

    const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(event.target.value)
    }

    function handleSearch(event: React.FormEvent) {
        event.preventDefault()
        searchVideosFromSeachBar(searchInputValue)
        searchDataPersist(searchInputValue)
    }

    return (
        <header className='container'>
            <div className='container-logo-area'>
                <h1>ByCoders<span>Tube</span></h1>
            </div>

            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchInputValue}
                    onChange={handleSearchInputChange}                    
                    placeholder='Pesquisar'
                />
                <Tippy content='Pesquisar'>
                    <button type='submit'>
                        <FiSearch size={20} />
                    </button>
                </Tippy>
            </form>
            
            <div className='link-container'>
                <a href="/" >
                    Create an account
                </a>
                <span>or</span>
                <a href="/" >
                    Sign-in
                </a>
            </div>
        </header>
    )
}