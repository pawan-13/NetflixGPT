import GPtMovieSuggestion from "./GPtMovieSuggestion"
import GPtSearchBar from "./GPtSearchBar"
import { NETFLIX_LOGO } from '../utils/constants.js';

const GPtSearch = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img src={NETFLIX_LOGO}
          className="w-screen h-screen bg-black font-bold backdrop-opacity-80" alt="bg-logo" />
      </div>
      <GPtSearchBar />
      <GPtMovieSuggestion />
    </div>
  )
}

export default GPtSearch