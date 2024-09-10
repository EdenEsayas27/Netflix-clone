import React from 'react'
import requests from '../../Utils/requests'
import Rows from '../Rows/Rows'
function RowList() {
  return (
    <>
      <Rows
        title="NETFLIX ORIGINALS"
        fetchurl={requests.fetchNetflixOrginal}
        isLargeRow={true}
      />
      <Rows title="Trending Now" fetchurl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchurl={requests.fetchTopratedMovies} />
      <Rows title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchurl={requests.fetchRomanceMovies} />
      <Rows title="TV Shows" fetchurl={requests.fetchTvShow} />
      <Rows title="Documentaries" fetchurl={requests.fetchDocumentaries} />
    </>
  );
}

export default RowList
