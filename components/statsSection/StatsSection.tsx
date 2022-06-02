import { Title } from "../../types/Title";
import RatingStats from "../ratingStats/RatingStats";
import TitleStats from "../titleStats/TitleStats";

type IProps = {
    selectedTitle: Title
}

const StatsSection = (props: IProps) => {
    const { selectedTitle } = props;

    return (
        <div className='flex mb-2 mt-10 items-start justify-between' >
            <TitleStats selectedTitle={selectedTitle}/>
            <RatingStats selectedTitle={selectedTitle}/>
        </div>
    );
}


export default StatsSection;