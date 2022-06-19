import React  from 'react';
import styled from 'styled-components'
import MovieComponent from './components/MovieComponent';



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
  return (
    <Container>
      <Header>
      <AppName>
         Movying
      </AppName>
      <Searchbox>
        <Searchicon src='/search_icon.png'>
        </Searchicon>
        <SearchInput placeholder='Search for a movie' />

      </Searchbox>
      </Header>

      <MovieContainer>
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
        <MovieComponent />
      </MovieContainer>
  </Container>
  );
}

export default App;
