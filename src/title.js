import React from 'react';

const Title = ({imgUrl, title, className, style}) =>{
    const cssClasses = className ? `${className} item` : 'item';
    return (
        <div className={cssClasses} style={{...style}}>
            <img  src={`https://image.tmdb.org/t/p/original${imgUrl}`} alt={`Movie ${title}`} />
        </div>
    )
};

export default Title;