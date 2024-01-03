import Header from './Header'
import useNowplayingMovie from "../Hooks/useNowplayingmovie"
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularmovies from '../Hooks/usePopularmovies'
import { useSelector } from 'react-redux'
import Gptpage from './GptPage'

const Browse = () => {
  const showGptsearch = useSelector((store) => store?.gpt?.showGptSearch)
  useNowplayingMovie();
  usePopularmovies();

  return (
    <div>
      <Header />
      {showGptsearch ?
        <Gptpage /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}
    </div>
  )
}

export default Browse;