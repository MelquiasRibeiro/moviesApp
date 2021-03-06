import React from 'react';
import {Container,Title,RemoveButton} from './styled';
import {MoviesContainer,Movie,Rate,Name,Poster} from '../home/styles';
import {FontAwesome} from '@expo/vector-icons';



const Favorites = () => {

  const BaseUrlImage='https://image.tmdb.org/t/p/w500';


  const favorites=[
  {"id": 527774,
    "title": "Raya e o Último Dragão",
    "vote_average": 8.5,
    "poster_path": "/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
  },
  {"id": 527775,
  "title": "Raya e o Último Dragão",
  "vote_average": 8.5,
  "poster_path": "/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
  },
  {"id": 527776,
  "title": "Raya e o Último Dragão",
  "vote_average": 8.5,
  "poster_path": "/yXrb84zJidCefyhTWHwo4yCDvwz.jpg",
  }
  ]
  return (
      <Container>
        <Title>Seus filme favoritos</Title>

        <MoviesContainer>
        {
          favorites.map((film)=>(
            <Movie key={film.id}>
              <RemoveButton>
                <FontAwesome name="remove" size={16} color="#ffffff" />
              </RemoveButton>
              <Poster source={{uri: `${BaseUrlImage}${film.poster_path}`}}/>
              <Name>{film.title}</Name>
        </Movie>
          ))
        }
      
      </MoviesContainer>
      </Container>
    );
}

export default Favorites;