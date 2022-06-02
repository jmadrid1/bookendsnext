import React from 'react';

interface IProps {
    genre: string,
}

const GenreBubble = (props: IProps) => {
    const { genre } = props;
    return (
        <div className='flex  ml-2 mr-2 justify-center items-center rounded-full border-2 border-amber-400 ' >
            <h6 className='font-semibold text-white text-sm px-3 py-1'>{genre}</h6>
        </div>
    );
}


export default GenreBubble;