import { AxiosResponse } from 'axios'
import { createContext, useCallback, useState } from 'react'
import API_URL from '../../services/APi_URL'
import { ContextProviderProps, ContextDataProps } from './types'

export const VideosContext = createContext({} as ContextDataProps)

export const VideosProvider = ({ children }: ContextProviderProps) => {
    const [searchInputValue, setSearchInputValue] = useState('')
    const [initialVideosData, setInitialVideosData] = useState<AxiosResponse | null | void>()
    const [searchVideoResults, setSearchVideosResults] = useState<AxiosResponse | null | void>()

    const searchVideosFromSeachBar = useCallback(async (keyword: string) => {
        const response = await API_URL.get<AxiosResponse>('/search', {
            params: {
                q: keyword,
                part: 'snippet',
                type: 'video, channel',
                maxResults: 20
            }
            
        })
        setSearchVideosResults(response.data.items)
    }, [])

    const initialFetchData = async () => {
        const response = await API_URL.get<AxiosResponse>('/videos', {
            params: {
                part: 'snippet, contentDetails, statistics', 
                chart: 'mostPopular',
                regionCode: 'BR',
                maxResults: 20
            }
        })
        setInitialVideosData(response.data.items)
    }

    const searchDataPersist = () => {
        let searchData = []
        if (localStorage.lastSearches) {
            searchData = JSON.parse(localStorage.getItem('lastSearches'))
        }
        searchData.push(searchInputValue)
        localStorage.setItem('lastSearches', JSON.stringify(searchData))
    }

    
    return (
        <VideosContext.Provider value={{
            searchVideosFromSeachBar,
            initialFetchData,
            setInitialVideosData,
            initialVideosData,
            searchVideoResults,
            searchInputValue,
            setSearchInputValue,
            searchDataPersist,
        }}>
            {children}
        </VideosContext.Provider>
    )
}