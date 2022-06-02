import React from 'react';

type IProps = {
    title: string;
}

const Header = (props: IProps) => {
    const { title } = props;
    return (
        <div className='flex flex-row w-full h-10 border-t-2 border-b-2 border-l-4 border-amber-400 items-center justify-start'>
            <h6 className=' ml-10 font-bold text-lg text-white'>{title}</h6>
        </div>
    );
}


export default Header;