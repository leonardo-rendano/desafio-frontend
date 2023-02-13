import { AxiosResponse } from "axios"
import { ReactNode } from "react"

export interface ContextDataProps{
    initialFetchData: () => Promise<void>
    searchVideosFromSeachBar: (props: string) => Promise<void>
    setInitialVideosData: () => void
    initialVideosData: AxiosResponse | null | void 
    searchVideoResults: AxiosResponse | null | void 
    setSearchInputValue: (value: string) => void
    searchInputValue: string 
    searchDataPersist: (value: string) => void
}

export interface ContextProviderProps {
    children: ReactNode
}






