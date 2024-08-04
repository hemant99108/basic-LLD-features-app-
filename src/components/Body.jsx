import { useState } from "react";
import { useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [memes,setMemes]=useState([]);
    const [showShimmer,setShowShimmer]=useState(false);

    useEffect(()=>{
        fetchMemes();

        window.addEventListener('scroll',handleScroll);

        return ()=>window.removeEventListener('scroll',handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    const handleScroll=()=>{
      if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
        // console.log('fetch more data'); 
        fetchMemes();
      }
    }


    const fetchMemes=async()=>{
      setShowShimmer(true);
        const data=await fetch('https://meme-api.com/gimme/20');
        const json=await data.json();

        setShowShimmer(false);
        
        setMemes((memes)=>[...memes,...json.memes]);
    }


  return (
    <div className="  flex flex-wrap justify-around bg-orange-400 ">
       
        {memes.map((meme,index)=>(
           <MemeCard key={index} data={meme}/>)
        )}

        {showShimmer && <Shimmer/>}
    </div>
  )
}

export default Body;

