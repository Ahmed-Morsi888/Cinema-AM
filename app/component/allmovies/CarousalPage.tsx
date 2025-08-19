"use client"
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ClipLoader } from "react-spinners"
type propertise={
    baseurl:string,
    header:string,
    page?:number
}
function carousal({baseurl,header,page=1}:propertise) {
    const [allMovies, setAllMovies] = useState([])
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      function moves(){
        const options =  {headers: {
         accept: 'application/json',
     }}
      axios.get(`${baseurl}api_key=a5c13fc09b1950b338b046e79ea8e6b1&page=${page}`, options) 
       .then(response =>{
           setAllMovies(response.data.results)
         } 
     )
       .catch(error => console.error(error))
    } 

    useEffect(()=>{moves()},[])

    
    return (
      <>
         {allMovies.length > 0 ? ( 
          <div className="p-8 ">
            <h2 className="text-2xl font-bold p-4 text-white">{header}</h2>
            <div className="z-10">
              <Carousel responsive={responsive} infinite autoPlay={true}>
                {allMovies.map((movie) => (
                  <div key={movie.id} className="px-2">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title || "Movie poster"}
                        fill
                        loading="lazy"
                        className="rounded-xl object-cover"
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
         ) : (
          <div className="flex justify-center items-center h-[400px]">
            <ClipLoader color="white" loading={true} size={80} />
          </div>
        )} 
      </>
    )
}

export default carousal