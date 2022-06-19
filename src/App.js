import axios from 'axios';

import React  from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import MovieComponent from './components/MovieComponent';
const API_KEY="eeebf1f3";


const Container = styled.div `
display : flex;
flex-direction : column;
background-color :#5CD395;
`;

const Header = styled.div`
display : flex;
flex-direction: row;
justify-content : space-between;
color : #05386B;
font-weight : bold;
`;

const AppName = styled.div`
display : flex;
font-size : 25px;
flex-direction : row;
align-items : center;
`

const Searchbox = styled.div`
display : flex;
flex-direction : row;
padding : 10px 10px;
background-color : #F5F5F5;
border-radius : 6px;
width : 50%;
margin-left : 20px;
`;

const Searchicon = styled.img`
width : 20px;
height : 20px;
color : #05386B !important;
`;

const SearchInput = styled.input`
color : #05386B;
background-color : #F5F5F5;
font-size : 13px;
width : 1000%;
border : none;
outline : none;
margin-left : 10px;
`;


const MovieContainer = styled.div`
display : flex;
flex-direction : row;
flex-wrap : wrap;
padding : 30px;
justify-content: space-evenly;
`;

function App() {
  const [searchQuery, updateSearchQuery] = useState(); 
  const [timeOutId, updateTimeOutId] = useState();
  const [movieList, updateMovieList] = useState([]);

const fetchdata =async (searchString) =>
{
 const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
 );
 updateMovieList("check")
};


const searchHandler = (event) =>
{
  clearTimeout(timeOutId);
  updateSearchQuery(event.target.value);
  const timeout = setTimeout(() => fetchdata(event.target.value),500);
  updateTimeOutId(timeout);
}



  return (
    <Container>
      <Header>
      <AppName>
         Movying
      </AppName>
      <Searchbox>
        <Searchicon src='/search_icon.png'>
        </Searchicon>
        <SearchInput placeholder='Search for a movie'  value={searchQuery} onChange={searchHandler} />
      </Searchbox>
      </Header>

      <MovieContainer>
         {movieList?.length
         ? movieList.map(() => <MovieComponent />)
         : " No Movies Found" } 
      </MovieContainer>
  </Container>
  );
}

export default App;
