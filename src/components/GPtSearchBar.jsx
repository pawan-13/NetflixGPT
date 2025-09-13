import language from "../utils/languageConstant"
import { useSelector } from "react-redux"

const GPtSearchBar = () => {  
  const langua = useSelector(state=>state.configData.lang);
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12 rounded-md">
            <input type="text" name="serachbar" id="searchbar" className="col-span-9 bg-white text-start text-base m-3 p-2 rounded-md font-semibold focus:outline-none" placeholder={language[langua].gptSearchPlaceholder} />
            <button className="bg-red-600 text-white text-center text-base font-semibold px-4 m-3 py-2 col-span-3 rounded-md">{language[langua].search}</button>
        </form>
    </div> 
  )
}

export default GPtSearchBar