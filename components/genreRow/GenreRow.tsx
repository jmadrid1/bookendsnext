import GenreBubble from '../genreBubble/GenreBubble';

type IProps = {
    genres: string[]
}

const GenreRow = (props: IProps) => {
    const { genres } = props;

    return (
        <div className='flex flex-row mb-2 mt-5'>
            {genres.map(genre => (
                <GenreBubble genre={genre} />
            ))}
        </div>
    );
}


export default GenreRow;