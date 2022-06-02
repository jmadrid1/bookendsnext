import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Image from "next/image";
import magnifyingGlass from '../../assets/search.png';
import { SearchQueryResult } from '../../types/SearchQueryResult';
import SearchResult from '../searchResult/SearchResult';
import Link from 'next/link';

type IProps = {
    results: SearchQueryResult[];
    query: string;
    setQuery: Dispatch<SetStateAction<string>>;
}

const SearchBar = (props: IProps) => {
    const { setQuery, results } = props;
    const [open, setOpen] = useState(false);
    const searchBarRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (!open && searchBarRef.current && !searchBarRef.current.contains(e.target)) {
                setOpen(false)
            } else {
                setOpen(true)
            }
        }
        document.addEventListener("click", checkIfClickedOutside)
        return () => {
            document.removeEventListener("click", checkIfClickedOutside)
        }
    }, [])

    return (
        <div ref={searchBarRef} className='flex flex-col w-full py-2 items-center justify-start border-b border-amber-400 bg-slate-900' >
            <div className='flex ml-2 sm:w-2/5 md:w-2/5 xl:w-2/5 justify-between rounded-md bg-gray-100 p-2 py-2'>
                <input
                    className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 font-semibold'
                    onChange={(e) => setQuery(e.target.value)} type={"text"}
                    placeholder='Search Titles...'
                />
                <button className='flex btn w-8 h-full items-center justify-end rounded-full bg-transparent'>
                    <Image
                        width={25}
                        height={25}
                        layout='fixed'
                        src={magnifyingGlass}
                    />
                </button>
            </div>
            <div className='flex flex-col mt-10 mr-20 sm:w-2/6 md:w-2/6 xl:w-2/6 justify-start items-start bg-white absolute z-40'>
                {open && results.map(result => (
                    <Link key={result.id} href={`/title/${result.id}`} passHref>
                        <a key={result.id} className='flex w-full'>
                            <SearchResult key={result.id} title={result} />
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;