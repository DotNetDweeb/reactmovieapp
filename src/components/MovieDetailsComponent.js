import React from "react";
import styled from "styled-components"

const Container = styled.div `
display : flex;
flex-direction : row;
padding : 20px 30px;
justify-content : center;
background-color :#5CD395;
border-bottom : 1px solid lightgray;
`;


const CoverImg= styled.img`
object-fit : cover;
height : 252px;
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
overflow : hidden;
text-transform : capitalize;
text-overflow : ellipsis;
& span{
    opacity : 0.5;
}
`;

const InfoColumn = styled.div`
margin : 20px;  
display : flex;
flex-direction : column;
justify-content : space-between;

`


function MovieDetailsComponent(props) {
    return (
    <Container> 
        <CoverImg src="https://m.media-amazon.com/images/M/MV5BN2ZmZGM3YTktOTk0Ni00Mjc4LThjYzEtYmExZGJiZjBlOTg3XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg" /> 
        <InfoColumn>
            <MovieName>
                Movie : Batman
            </MovieName>
            <MovieInfo>Year : <span>2022</span></MovieInfo>
            <MovieInfo>IMDB : <span>9.5 </span></MovieInfo>

        </InfoColumn>
     </Container>
    );
}

export default MovieDetailsComponent;