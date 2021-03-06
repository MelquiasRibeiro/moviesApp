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
import {api} from "../../services/api";


const Home = () => {
   const [type,setType]=useState('movie');
   const [data,setData]=useState([]);


   const BaseUrlImage='https://image.tmdb.org/t/p/w500';

     function handleGetData() {
       api.get(`trending/${type}/week?api_key=8d05659f30182cd2011ad0dd54e9f430&language=pt-BR`)
       .then((respose)=>{
         setData(respose.data.results)
         console.log(respose.data.results)

       }).catch( (err)=>{
         console.log(err)
       })
     }
  
     useEffect(() => {
       handleGetData()
     }, [type])

  return (
  <Container>
      <Title>Encontre um filme para ver hoje</Title>
      <TypeContainer>
        <TypeButton active={true} onPress={()=>setType('movie')} >
          <TextBitton active={true}>Filmes</TextBitton>
        </TypeButton>
        <TypeButton onPress={()=>setType('tv')}>
          <TextBitton>séries</TextBitton>
        </TypeButton>
        <TypeButton onPress={()=>setType('person')} >
          <TextBitton>famosos</TextBitton>
        </TypeButton>
      </TypeContainer>
      <Legend>Principais da semana</Legend>
      <MoviesContainer>
        {
          data.map((film)=>(
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
export default Home;