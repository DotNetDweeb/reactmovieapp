import React from "react";
import styled from "styled-components";


const MovieComponentContainer = styled.div`
display : flex;
background-color: #EDF5E1;
flex-direction : column;
padding: 10px;
width : 280px;
box-shadow: 0 3px 10px 0 #aaa;
cursor : pointer;
`;

const CoverImg= styled.img`
object-fit : cover;
height : 362px;
`;

const MovieName = styled.span`
font-size : 18px;
margin-top : 5px;  
font-weight : 500;
color:#05386B;
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
    return (
    <MovieComponentContainer>
      <CoverImg src="https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"/> 
      <MovieName>Guardians of the Galaxy</MovieName>
      <InfoColumn>
          <MovieInfo>Year : 2012</MovieInfo>
          <MovieInfo>Type : Movie</MovieInfo>
      </InfoColumn>
    </MovieComponentContainer>
    );
}

export default MovieComponent;