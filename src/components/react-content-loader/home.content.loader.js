import React from 'react'
import ContentLoader, { Facebook } from 'react-content-loader'

const MyLoader = () => <ContentLoader />

export const HomeContentLoader = () => {
    return (
        <div>
            <MyLoader />
        </div>
    )
}
