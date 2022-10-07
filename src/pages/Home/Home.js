import { useEffect, useState } from "react"
import { BiPlayCircle, BiRightArrowAlt } from 'react-icons/bi'
import { useNavigate } from "react-router-dom"
import axios from "axios"




function Home(){
    const [movie, setMovie] = useState([])
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const URL = 'https://api.themoviedb.org/3/'
    const API_KEY ='604903f555635f1a1b0968cd4bde010e'
    const MOVIE_URL = URL + 'movie/popular'
    const SEARCH_URL = URL + 'search/movie'
    const page = '1'

    const handleGetPopularMovie = async() =>{
        setLoading(true)
        try {
            const res = await axios.get(`${MOVIE_URL}`,{
                params:{
                    api_key: API_KEY,
                    page: page
                }
            })
            setMovie(res.data.results)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }
    
    const handleSearch = async () =>{
        try {
            const res = await axios.get(`${SEARCH_URL}`,{
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

    const handleDetail = async() =>{
        setLoading(true)
        try {
            const res = await axios.get(`${URL}movie/453395`,{
                params:{
                    api_key: API_KEY
                }
            })
            setDetail(res?.data)
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() =>{
        handleGetPopularMovie()
        handleDetail()
    },[])

    const getPosterURL = (poster_path) =>{
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
    }
    
    return(
        <div className="bg-white">
            <div className="carousel w-full h-screen">
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
                        <div className="flex absolute inset-y-0 items-center right-2.5 cursor-pointer" 
                        onClick={() => {
                            if(search){
                                navigate(`?title=${search}`)
                            }
                            if(!search){
                                alert('harap masukan data')
                                handleGetPopularMovie()                            
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
                    <img src="img/doctor-strange.jpg" alt="..." className=" w-full" />
                    <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                        <h1 className="text-7xl font-bold">{detail.title}</h1>
                        <p className="mt-5 text-2xl">
                            {detail.overview}
                        </p>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-5 " > 
                            <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                        </button>
                    </div>
                    <div className="absolute z-30 flex justify-center w-full py-2 gap-1 bottom-5">
                        <a href="#item1" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item2" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item3" type="button" className="btn btn-xs rounded-full"> </a> 
                    </div>
                </div> 
                <div id="item2" className="relative carousel-item w-full">
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
                                handleGetPopularMovie()                            
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
                    <div className="absolute right-3 mt-1">
                        <button className="text-red-700 hover:text-white border border-red-700 
                        hover:bg-red-800 font-medium rounded-3xl text-sm px-7 py-2.5 text-center mr-2 mb-2">Login</button>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-7 ">Register</button>
                    </div>
                    <img src="img/jujutsu.jpg" alt="..." className="w-full" />
                    <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                        <h1 className="text-7xl font-bold">Jujutsu Kaisen 0</h1>
                        <p className="mt-5 text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-5 " > 
                            <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                        </button>
                    </div>
                    <div className="absolute z-30 flex justify-center w-full py-2 gap-1 bottom-5">
                        <a href="#item1" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item2" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item3" type="button" className="btn btn-xs rounded-full"> </a> 
                    </div>
                </div> 
                <div id="item3" className="relative carousel-item w-full">
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
                                handleGetPopularMovie()                            
                            }else{
                                navigate('/')
                            }
                            }}>
                            <svg aria-hidden="true" className="w-5 h-5 text-white dark:text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="absolute right-3 mt-1">
                        <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 font-medium rounded-3xl text-sm px-7 py-2.5 text-center mr-2 mb-2">Login</button>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-7 ">Register</button>
                    </div>
                    <img src="img/spiderman.jpg" alt="..." className="w-full" />
                    <div className="absolute text-white text-left font-sans left-5 top-44 pr-[47rem]">
                        <h1 className="text-7xl font-bold">Spider-Man: No Way Home</h1>
                        <p className="mt-5 text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p>
                        <button className="btn btn-ghost text-white bg-red-700 font-medium rounded-3xl px-12 mt-5 " > 
                            <BiPlayCircle className="mr-2 text-xl"/>Watch Trailer
                        </button>
                    </div>
                    <div className="absolute z-30 flex justify-center w-full py-2 gap-1 bottom-5">
                        <a href="#item1" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item2" type="button" className="btn btn-xs rounded-full"> </a> 
                        <a href="#item3" type="button" className="btn btn-xs rounded-full"> </a> 
                    </div>
                </div> 
            </div>
            {search ? (
                <div className="py-5 pl-5">
                    <p className="font-semibold text-3xl text-black">Search Result "{search}"</p>
                </div>
            ) : (
                <div className="py-5 pl-5">
                    <p className="font-semibold text-3xl text-black">Popular Movie</p>
                </div>
            )}
            <div className="flex justify-end gap-3 pr-5 ">
                <p className="text-red-600 cursor-pointer hover:text-red-900" onClick={() => navigate('/seeallmovie')}>
                    See All Movie
                    <BiRightArrowAlt className="text-red-600 inline text-lg"/>
                </p>
            </div>
            <div className="grid grid-cols-5 gap-y-4 gap-x-4 ml-7 mt-7">
            {loading ? (
                <p className="text-center"> Loading... </p>
            ):(
                movie?.map((item) => (
                    <>
                        <div className="card w-64 bg-transparent shadow-xl">
                            <figure className="pt-10"  key={item.id}>
                                <img src={getPosterURL(item.poster_path)} alt="poster" className="rounded-xl cursor-pointer" 
                                onClick={() => navigate(`/detail/${item.id}`)} />
                            </figure>
                         </div>
                    </>
                ))
            )}
            </div>
            
        </div>
    )
}


export default Home