import React from 'react'
import { GetFetchGifs } from '../hooks/getFetchGifs';
import { GifGridItems } from './GifGridItems';

export const GifGrid = ( { category } ) => {
    
    const { data, loading } = GetFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__bounce"> {category} </h3>

            { loading && <p className="animate__animated animate__flash">Loading...</p>  }

        <div className="card-grid">
            
                { data.map( img  => {
                    return <GifGridItems key={ img.id } { ...img } />
                }) } 
            
        </div>
        </>
    )
}
