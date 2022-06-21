import React, { useState } from "react";
import styled from "styled-components";


const MovieComponentContainer = styled.div`
display : flex;
background-color: #EDF5E1;
flex-direction : column;
padding: 10px;
width : 262px;
box-shadow: 0 3px 10px 0 #aaa;
cursor : pointer;
`;

const CoverImg= styled.img`
object-fit : cover;
height : 262px;
`;

const MovieName = styled.span`
font-size : 18px;
margin-top : 5px;  
font-weight : 500;
color:#05386B;
margin: 15px 0;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`

const MovieInfo = styled.span`
font-size : 16px;
font-weight : 500;
color : #05386B;
white-space : no-wrap;
overflow : hidden;
text-transform : capitalize;
text-overflow : ellipsis;
`;

const InfoColumn = styled.div`
margin-top : 5px;  
display : flex;
flex-direction : row;
justify-content : space-between;
`

function MovieComponent(props){
  const{Title, Year, imdbId, Type, Poster} = props.movie;
    return (
    <MovieComponentContainer onClick={() => props.onMovieSelect(imdbId)}>
      <CoverImg src={Poster}/> 
      <MovieName>{Title}</MovieName>
      <InfoColumn>
          <MovieInfo>Year : {Year}</MovieInfo>
          <MovieInfo>Type : {Type}</MovieInfo>
      </InfoColumn>
    </MovieComponentContainer>
    );
}

export default MovieComponent;