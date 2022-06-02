import { Similars } from '../../types/Similars';
import Header from '../header/Header';
import ScrollList from '../scrollList/ScrollList';

type IProps = {
    similarTitles: Similars[]
}

const SimilarTitles = (props: IProps) => {
    const { similarTitles } = props;
    return (
        <div className='flex flex-col items-center justify-center bg-black' >
            <Header title='More Like This' />
            <ScrollList titles={similarTitles} />
        </div>
    );
}

export default SimilarTitles;