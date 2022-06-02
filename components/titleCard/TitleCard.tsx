import Image from "next/image";
import star from '../../assets/star.png';
import { Title } from "../../types/Title";

interface IProps {
    title: Title;
}

const TitleCard = (props: IProps) => {
    const { title } = props;
    let rating = title.imDbRating

    return (
        <div className="flex flex-col w-full h-full mt-2 ml-30 px-5 mb-10 items-center justify-center cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-10">
            <div className="relative" style={{ width: "100%", height: "370px" }}>
                <Image
                    layout='fill'
                    alt='Title Thumbnail'
                    objectFit="cover"
                    src={title.image}
                />
            </div>
            <div className='flex flex-col w-full items-center bg-black border border-amber-400 truncate'>
                <h4 className='w-5/6 mt-2 font-semibold text-center text-white text-ellipsis overflow-hidden '>{title.title}</h4>
                <div className='flex h-8 flex-row p-2 items-center justify-center'>
                    <Image
                        width={10}
                        height={10}
                        layout='fixed'
                        src={star}
                    />
                    <h4 className="ml-2 text-white">Rating: {rating}</h4>
                </div>
            </div>
        </div>
    );
}

export default TitleCard;