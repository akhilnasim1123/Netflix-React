import React,{useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {image_url,API_KEY} from '../../constant/constant'
import axios from '../../axios'
function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId, setUrlId] = useState('')
useEffect(()=>{
        axios.get(props.url).then(response=>{

            setmovies(response.data.results)
        })
    },[])
    const opts = {
        height:'390',
        width:'100%',
        playerVars:{
            autoplay:0,
        }
    }
    const handleMovie = (id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    console.log(response.data);
if (response.data.results.length!=0){
    setUrlId(response.data.results[0])
}

})
    }
  return (
    <div className='row'>
     <h2>{props.title}</h2>
<div className="posters">
    {movies.map((obj)=>
        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${image_url+obj.backdrop_path}`} alt="poster" />

    )}
    

</div>
{urlId && <YouTube opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost