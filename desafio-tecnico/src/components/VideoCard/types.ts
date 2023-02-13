export interface VideoCardProps {
    data: {
        snippet: {
            thumbnails: {
                medium: {
                    url: string
                }
            },
            title: string,
            channelTitle: string,
        },
        statistics: {
            viewCount: number
        }
    }
}