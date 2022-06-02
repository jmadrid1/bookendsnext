import Image from 'next/image';
import { Title } from '../../types/Title';
import CastRow from '../castRow/CastRow';
import GenreRow from '../genreRow/GenreRow';
import SummaryRow from '../summaryRow/SummaryRow';

type IProps = {
    selectedTitle: Title
}

const DetailsSection = (props: IProps) => {
    const { selectedTitle } = props;
    const genres = selectedTitle.genres.split(", ")

    return (
        <div className='flex flex-col ml-10 py-3 items-center justify-start'>
            <div className='flex flex-col'>
                <Image
                    alt='Title Thumbnail'
                    layout='fixed'
                    width={305}
                    height={370}
                    src={selectedTitle.image}
                />
                <GenreRow genres={genres} />
                <SummaryRow selectedTitle={selectedTitle} />
                <CastRow detailTitle='Director' detail={selectedTitle.directors} />
                <CastRow detailTitle='Writer' detail={selectedTitle.writers} />
                <CastRow detailTitle='Stars' detail={selectedTitle.stars} />
            </div>
        </div>
    );
}


export default DetailsSection;