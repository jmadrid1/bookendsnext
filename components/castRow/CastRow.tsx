type IProps = {
    detailTitle: string;
    detail: string;
}

const CastRow = (props: IProps) => {
    const { detailTitle, detail } = props;
    return (
        <div className="flex mb-1 h-18 border-t border-b border-amber-400 items-center">
            <h6 className='font-semibold text-white px-3'><span className="text-amber-400">{detailTitle}:</span> {detail}</h6>
        </div>
    );
}

export default CastRow;