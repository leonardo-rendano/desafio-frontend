import { VideoCardProps } from './types'
import './VideoCard.scss'

export const VideoCard: React.FC<VideoCardProps> = (data) => {
    return (
        <div className="video-card">
            <div className='video-card-thumbnail'>
                <img
                    src={data.data.snippet.thumbnails.medium.url}
                    alt=""
                />
            </div>
            <div className='video-card-title'>
                {data.data.snippet.title}
            </div>
            <div className='video-card-channel'>
                {data.data.snippet.channelTitle}
            </div>
        </div>
    )
}