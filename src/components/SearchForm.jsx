import { useRef } from "react";
import { useGlobalContext } from "../context";


const SearchForm = () => {
const {setSearchValue} = useGlobalContext();
const handleSubmit = (e) =>{
  e.preventDefault();

};
const inputContainer = useRef();
  return( 
  <div className="my-3">
    <form className="w-50 mx-auto" onSubmit={handleSubmit}>
<label htmlFor="name" className="form-label text-sucess fw-bold fs-bold fs-4 text-center w-100">
  Search For Your Favorite Meal
</label>
<input ref={inputContainer} onChange={()=> setSearchValue(inputContainer.current.value)} type="text" id="name" className="form-control border border-success border-2 shadow-none bg-sucess-subtle text-success fs-5" />
    </form>
    </div>
    );
}

export default SearchForm;
