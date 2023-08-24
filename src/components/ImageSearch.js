import { useEffect, useState } from "react";
import { ACCESS_KEY } from "../utils/constant";

export const ImageSearch = () => {
  const [img , setImg] = useState("");
  const [res , setRes] = useState([]);
 
  useEffect(()=>{
    fetchImages()
  });
  
  
const submit = ()=>{
  fetchImages()
  setImg("")
}


const fetchImages = async ()=>{
  const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${ACCESS_KEY}`)
  const json = await data.json()
  const result = json.results
  setRes(result)
}

  return (
    <div >
    {/* INPUT_SECTION */}
    <div className="bg-zinc-800 text-slate-50 text-center p-5">
      <h1 className="py-4 text-3xl">Find Images </h1>
      <div className="takeInput">
        <input
          className="w-100 p-2 text-slate-900 rounded-s-lg px-4"
          type="search"
          placeholder="Search here..."
          value={img}
          onChange={(e) => {
                setImg(e.target.value)
          }}
        ></input>
        <button type="submit" onClick={submit} className="bg-slate-400 text-slate-50 p-2 px-4 rounded-e-lg cursor-pointer">
          Search
        </button>
      </div>
    </div>

 {/* RESULT SECTION */}
<div className="p-3">
<h3 className="text-2xl text-center m-4 underline">Results for {img}</h3>
<div className="resultarea flex flex-wrap">
  {
   res.map((val)=>{
      return(
        <img src={val.urls.small} key={val.id} alt={val.description} className="p-1"/>
      )
    })
  }
</div>
</div>
</div>

  );
};

