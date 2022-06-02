import Link from "next/link";
import TitleCard from "../titleCard/TitleCard";
interface IProps {
    titles: any[];
}

const ScrollList = (props: IProps) => {
    const { titles } = props;
    return (
        <div className="px-5 my-3 sm:grid md:grid-cols-3 xl:grid-cols-5">
            {titles.map(title => (
                <Link key={title.id} href={`/title/${title.id}`} passHref>
                    <a key={title.id}>
                        <TitleCard key={title.id} title={title} />
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default ScrollList;