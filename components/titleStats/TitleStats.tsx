import { Title } from "../../types/Title";

type IProps = {
    selectedTitle: Title
}

const TitleStats = (props: IProps) => {
    const { selectedTitle } = props;

    const fullTitle = selectedTitle.title
    const year = selectedTitle.releaseDate.substring(0, 4);
    const runtime = selectedTitle.runtimeStr

    return (
        <div className="flex flex-col">
            <h6 className=' ml-12 font-bold text-white text-2xl'>{fullTitle}</h6>
            <h6 className=' ml-12 font-bold text-gray-500 text-sm'>{year} {runtime}</h6>
        </div>
    );
}


export default TitleStats;