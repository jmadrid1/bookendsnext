import { Title } from '../../types/Title';

type IProps = {
    selectedTitle: Title
}

const SummaryRow = (props: IProps) => {
    const { selectedTitle } = props;

    const plot = selectedTitle.plot;

    return (
        <div className='flex flex-row  md:w-4/6 xl:w-5/6 mb-3'>
            <h6 className='text-white px-3 py-1 sm:text-sm md:text-normal xl:text-normal'>{plot}</h6>
        </div>
    );
}


export default SummaryRow;