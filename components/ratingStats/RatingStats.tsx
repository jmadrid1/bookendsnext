import Image from "next/image";
import star from '../../assets/star.png';
import { Title } from "../../types/Title";

type IProps = {
    selectedTitle: Title
}

const RatingStats = (props: IProps) => {
    const { selectedTitle } = props;
    const rating = selectedTitle.imDbRating
    const ratingVotes = selectedTitle.imDbRatingVotes.substring(0, 3)

    return (
        <div className="flex flex-col">
            <div className='flex flex-row items-center'>
                <Image
                    width={22}
                    height={22}
                    layout='fixed'
                    src={star}
                />
                <div className="flex flex-col">
                    <h6 className='ml-2 mr-12 font-bold text-gray-500 text-sm'>IMDb RATING</h6>
                    <h6 className='ml-2 mr-12 font-bold text-white text-xs'>{rating}<span className="text-gray-500">/10</span></h6>
                    <h6 className='ml-2 mr-12 font-bold text-gray-500 text-xs'>{ratingVotes}K</h6>
                </div>
            </div>

        </div>
    );
}


export default RatingStats;