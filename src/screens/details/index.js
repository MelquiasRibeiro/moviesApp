import React from 'react';
import {MaterialIcons,Entypo,AntDesign} from '@expo/vector-icons';
import {
  Container,
  Title,
  Rate,
  Header,
  GoBackButton,
  Back,
  FavoriteButton,
  Info,
  Poster,
  NumberInfo,
  Date,
  Description,
} from './styles';
import { BaseUrlImage} from "../../services/api";

import { useNavigation } from '@react-navigation/native';

const Details = () => {
   



  const movie={
    "adult": false,
    "backdrop_path": "/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg",
    "genre_ids": [
      16,
      12,
      14,
      10751
    ],
    "id": 527774,
    "original_language": "en",
    "original_title": "Raya and the Last Dragon",
    "overview": "O reino encantado Kumandra é dividido em cinco regiões e sua população venerava os dragões mágicos que eram presentes no reino, porém quando uma força maligna ameaçou a Terra, os dragões se sacrificaram para salvar a humanidade. Agora, 500 anos depois, o mesmo mal voltou e cabe a uma guerreira solitária, Raya, rastrear o lendário último dragão para restaurar a terra fraturada e seu povo dividido.",
    "poster_path": "/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
    "release_date": "2021-03-03",
    "title": "Raya e o Último Dragão",
    "video": false,
    "vote_average": 8.5,
    "vote_count": 141,
    "popularity": 889.424,
    "media_type": "movie"
  }

  const navigation = useNavigation();

  function handleNavigateToDetails() {
    navigation.navigate('Home');
  }

  return (
  <Container>
    <Header>
     <GoBackButton onPress={handleNavigateToDetails}>
       <AntDesign name="left" size={18} color="#ffffff" />
       <Back>{' '}Voltar a Procurar</Back>
     </GoBackButton>
     <FavoriteButton>
       <MaterialIcons name="favorite" color="#e50914" size={20}/>
     </FavoriteButton>
    </Header>
      <Info>
        <Poster source={{uri:`${BaseUrlImage}${movie.backdrop_path}`}}/>
        <Title>{movie.title}</Title>
        <NumberInfo>
          <Rate>
            <Entypo name="star" size={16}  color='#f6a93b'/>{' '}
            {movie.vote_average}
            </Rate>
          <Date>Lançamento: {movie.release_date}</Date>
        </NumberInfo>
        <Description>
          {movie.overview}
        </Description>
      </Info>

  </Container>
  );
}
export default Details;