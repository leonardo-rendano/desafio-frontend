import { useContext, useEffect } from 'react'
import { VideoCard } from '../../components/VideoCard'
import { VideosContext } from '../../context/providers/videosProvider'
import './Home.scss'

export const Home: React.FC = () => {
    const { initialFetchData, initialVideosData, searchVideoResults, searchInputValue } = useContext(VideosContext)
    const persistedData = JSON.parse(localStorage.getItem('lastSearches'))

    useEffect(() => {
        initialFetchData()
    }, [])

    function showDynamicResults() {
        if (searchVideoResults) {
            return <p>Exibindo resultados para: <strong>"{searchInputValue}"</strong></p>
        }
    }

    function showRecentSearches() {
        if (persistedData) {
            return <p>Busca recente: <strong>{`${persistedData},`} </strong></p>
        }
    }

    return (
        <>
            <div className='home-container-dynamic-results'>
                <div className='home-container-dynamic-results-show-results'>
                    {showDynamicResults()}
                </div>
                <div className='home-container-dynamic-results-show-last-search'>
                    {showRecentSearches()}
                </div>
            </div>
            <div className='home-container'>
                {
                    searchVideoResults?.length > 0 ? searchVideoResults?.map(searchResult => (
                        <VideoCard
                            key={searchResult.id.videoId}
                            data={searchResult}
                        />
                    )) : initialVideosData?.map(video => (
                        <VideoCard
                            key={video.id}
                            data={video}
                        />
                    ))
                }
            </div>
        </>
    )
}