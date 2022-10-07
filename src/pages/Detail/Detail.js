import axios from "axios"
import { useEffect, useState } from "react"
import { BiPlayCircle } from 'react-icons/bi'
import { AiOutlineStar } from 'react-icons/ai'
import { useParams, useNavigate } from "react-router-dom"

const Detail = ()=>{

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    
    const params = useParams()
    const navigate = useNavigate()

    const URL = 'https://api.themoviedb.org/3/'
    const API_KEY ='604903f555635f1a1b0968cd4bde010e'

    const handleDetail = async() =>{
        setLoading(true)
        try {
            const res = await axios.get(`${URL}movie/${params.id}`,{
                params:{
                    api_key: API_KEY
                }
            })
            setMovie(res?.data)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const handleSearch = async () => {
        try {
            const res = await axios.get(`${URL}search/movie`,{
                params:{
                    api_key: API_KEY,
                    query: search
                }
            })
            setMovie(res.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleDetail()
    },[])

    const getPosterURL = (poster_path) =>{
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
    }

    return(
        <div className="bg-white">
            <div className="w-screen">
                {loading ? (
                    <p className="text-center text-black"> Loading... </p>
                ): (
                    <div id="item1" className="relative carousel-item w-full ">
                        <div className="absolute ml-5">
                            <h1 className="text-red-600 text-4xl font-extrabold font-sans cursor-pointer hover:text-red-900" 
                            onClick={() => navigate('/') } >Movielist</h1>
                        </div>
                        <div className=" absolute left-[37rem] top-1" onClick={()=>handleSearch()}>
                            <input type="text" placeholder="What do you want to watch?" 
                            className="block mr-40 w-full text-sm text-white placeholder-white bg-transparent rounded-2xl border 
                            border-red-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            value={search} onChange={(e) => {
                                e.preventDefault()
                                setSearch(e.target.value)
                            }} />
                            <div className="flex absolute inset-y-0  items-center right-2.5 cursor-pointer" 
                            onClick={() => {
                                if(search){
                                    navigate(`?title=${search}`)
                                }
                                if(!search){
                                    alert('harap masukan data')
                                    navigate('/')                           
                                }
                                else{
                                    navigate('/')
                                }
                                }}>
                                <svg aria-hidden="true" className="w-5 h-5 text-white dark:text-gray-400" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className=" absolute right-3 mt-1">
                            <button className="text-red-700 hover:text-white border 
                            border-red-700 hover:bg-red-800 font-medium rounded-3xl 
                            text-sm px-7 py-2.5 text-center mr-2 mb-2" onClick={() => navigate('/login')}>Login</button>
                            <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-7 " 
                            onClick={() => navigate('/register')}>Register</button>
                        </div>
                        <img src={getPosterURL(movie.backdrop_path)} alt="..." className=" w-screen h-screen opacity-[5]" />
                        <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                            <h1 className="text-7xl font-bold">{movie.title}</h1>
                            <div className=" flex flex-row gap-3 mt-5">
                                {movie?.genres?.map((item) => 
                                <p className="text-xl font-semibold">
                                    {item.name},
                                </p>)}
                            </div>
                            <p className="pt-12 text-xl">
                                {movie.overview}
                            </p>
                            <p className="flex flex-row mt-10">
                                <AiOutlineStar className="text-2xl text-yellow-400"/> {movie.vote_average}/10
                            </p>
                            <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-7 " > 
                                <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                            </button>
                        </div>
                    </div>   
                )}
            </div>
        </div>
    )
}

export default Detail