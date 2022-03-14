import React from 'react'

export const GifGridItem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeInDown grid_item">
            <img src={url} alt={title} />
            <button><a href={url} target="_blank"></a>View</button>
        </div>
    )
}
