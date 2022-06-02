import axios from 'axios';
import StatsSection from '../../components/statsSection/StatsSection';
import DetailsSection from '../../components/detailsSection/DetailsSection';
import SimilarTitles from '../../components/similarTitles/SimilarTitles';
import { Endpoints } from '../../util/Constants';
import { Title } from '../../types/Title';

type IProps = {
  title: Title;
}

export const TitleDetail = (props: IProps) => {
  const { title } = props;
  return (
    <div className='flex flex-col w-screen justify-center item-center bg-neutral-800'>
      <div className='flex flex-col w-screen '>
        <StatsSection selectedTitle={title} />
        <DetailsSection selectedTitle={title} />
        <SimilarTitles similarTitles={title?.similars} />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context: any) => {
  const titleID: string = context.params.id

  const url = Endpoints.searchTitleEndpoint + titleID
  const title: Title = await axios.get(url).then(res => {
    const title: Title = res.data
    return title
  })

  return {
    props: {
      title,
    },
  }
}

// export const getServerSideProps = async (context) => {
//   const titleID: string = context.params.id

//   const url = Endpoints.searchTitleEndpoint + titleID
//   const title: Title = await axios.get(url).then(res => {
//     const title: Title = res.data
//     return title
//   })

//   return {
//     props: {
//       title,
//     },
//   }
// }

export default TitleDetail;