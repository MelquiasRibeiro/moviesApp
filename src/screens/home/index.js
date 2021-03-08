import React,{useState,useEffect} from 'react';
import {Entypo} from '@expo/vector-icons';
import {
  Container,
  Title,
  TypeContainer,
  TypeButton,
  TextBitton,
  MoviesContainer,
  Movie,
  Poster,
  Rate,
  Name,
  Legend,
} from './styles';
import {BaseUrlImage} from "../../services/api";
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import {loadMidia,setIsLoadingChars} from '../../store/ducks/movies';

const Home = (props) => {
   const [type,setType]=useState('movie');

   const navigation = useNavigation();

   useEffect(() => {
    props.setIsLoadingChars()
    props.loadMidia(type)
}, [type])

  const data=props.movies;
     
     function handleNavigateToDetails(film) {
      navigation.navigate('Details',film);
  }

  return (
  <Container>
      <Title>Encontre um filme para ver hoje</Title>
      <TypeContainer>
        <TypeButton active={true} onPress={()=>setType('movie')} >
          <TextBitton active={true}>Filmes</TextBitton>
        </TypeButton>
        <TypeButton onPress={()=>setType('tv')}>
          <TextBitton>Séries</TextBitton>
        </TypeButton>
      </TypeContainer>
      <Legend>Principais da semana</Legend>
      <MoviesContainer>
        {
          data.map((film)=>(
            <Movie key={film.id}onPress={()=>handleNavigateToDetails(film)} >
              <Poster source={{uri: `${BaseUrlImage}${film.poster_path}`}}/>
              <Rate>
                  <Entypo name="star" size={16}  color='#f6a93b'/>
                  {'  '} 
                  {`${film.vote_average}/10`}
              </Rate>
              <Name>{film.title?film.title:film.name}</Name>
          </Movie>
          ))
        }
      
      </MoviesContainer>
  </Container>
  );
}


const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setIsLoadingChars, loadMidia
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)

