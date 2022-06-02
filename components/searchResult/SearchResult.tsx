import Image from 'next/image';
import React from 'react';
import { SearchQueryResult } from '../../types/SearchQueryResult';

type IProps = {
    title: SearchQueryResult;
}

const SearchResult = (props: IProps) => {
    const { title } = props;

    return (
        <div className='flex flex-row w-full h-20 border-b border-r border-l border-gray-200 items-start justify-start hover:bg-gray-100'>
            <Image
                width={70}
                height={79}
                alt='Title Thumbnail'
                layout='fixed'
                src={title.image}
            />
            <div className='flex flex-col justify-center'>
                <h6 className=' ml-3  mt-1 font-semibold text-m text-black'>{title.title}</h6>
                <h6 className=' ml-3 font-semibold text-m text-gray-500'>{title.description}</h6>
            </div>
        </div>
    );
}


export default SearchResult;