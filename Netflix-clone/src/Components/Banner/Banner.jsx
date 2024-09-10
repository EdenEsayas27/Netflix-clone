import { useEffect, useState } from "react";
import requests from "../../Utils/requests";
import axios from "../../Utils/axios";
import './Banner.css'

function Banner() {
  const [movies, setMovies] = useState(null);
  


useEffect(() => {
  (async () => {
    try {
      //console.log("Fetching data from:", requests.fetchNetflixOrginal);
      const request = await axios.get(requests.fetchNetflixOrginal);
      //console.log("Full Response:", request.data);
     // console.log("Results:", request.data.results);

      if (request.data.results && request.data.results.length > 0) {
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } else {
        console.error("No results found in the response.");
      }
    } catch (error) {
      console.error("Error occurred while fetching movies:", error);
    }
  })();
}, []);

   function truncate(str, n) {
     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
   }
 return (
   <>
     <div
       className="banner"
       style={{
         backgroundSize: "cover",
         backgroundImage: `url('https://image.tmdb.org/t/p/original${movies?.backdrop_path}')`,
         backgroundPosition: "center",
         backgroundRepeat: "no-repeat",
       }}
     >
       <div className="banner_contents">
         <h1 className="banner_title">
           {movies?.title || movies?.name || movies?.original_name}
         </h1>
         <div className="banner_buttons">
           <button className="banner_button play">play</button>
           <button className="banner_button">My List</button>
         </div>
         <h1 className="banner_discribiton">
           {truncate(movies?.overview, 150)}
         </h1>
       </div>
       <div className="banner_fadebottom"></div>
     </div>
   </>
 );
}

export default Banner;
