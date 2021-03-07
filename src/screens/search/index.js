import React,{useState,} from 'react';
import {Container,Header,SearchInput,Title,Empty,SearchButton } from './styled';
import {MoviesContainer,Movie,Rate,Poster,Name} from '../home/styles'
import {Entypo,FontAwesome} from '@expo/vector-icons';
import search from '../../assets/images/search.png'
import {api} from '../../services/api'; 



const Search = () => {

  const [movie,setMovie]=useState('');
  const [results,setResults] = useState([]);
  
  const BaseUrlImage='https://image.tmdb.org/t/p/w500';

  function handleGetData() {
    api.get(`/search/movie?api_key=8d05659f30182cd2011ad0dd54e9f430&language=pt-BR&page=1&include_adult=true&query=${movie}`)
    .then((respose)=>{
      setResults(respose.data.results)
      console.log(respose.data.results)

    }).catch( (err)=>{
      console.log(err)
    })
  }


  return (
  <Container >
    <Title>Busque por um filme</Title>
    <Header>
      <SearchInput onChangeText={
        (movie) =>setMovie(movie)
                   }/>
      <SearchButton onPress={handleGetData}>
        <FontAwesome name="search" size={16} color="#FFFFFF" />
      </SearchButton>
    </Header>
      <MoviesContainer>
          { results.length===0?
            (<Empty source={search}/>) :
            results.map((film)=>(
              <Movie key={film.id}>
                <Poster source={{uri: `${BaseUrlImage}${film.poster_path}`}}/>
                <Rate>
                    <Entypo name="star" size={16}  color='#f6a93b'/>
                    {'  '} 
                    {`${film.vote_average}/10`}
                </Rate>
                <Name>{film.title}</Name>
              </Movie>
            ))
          }
      </MoviesContainer>    
  </Container>
  );
}

export default Search;