import React from 'react';
import {Container,Title,RemoveButton,Empty} from './styled';
import {MoviesContainer,Movie,Name,Poster} from '../home/styles';
import {FontAwesome} from '@expo/vector-icons';
import { connect } from 'react-redux'
import { remove } from '../../store/ducks/favorites';
import { bindActionCreators } from "redux"

import {BaseUrlImage} from "../../services/api";


const Favorites = (props) => {

const {favorites} =props;

function removeFromFavorites(id) {
  props.remove(id)
}

  return (
      <Container>
        <Title>Seus filme favoritos</Title>

        <MoviesContainer>
        {
          favorites.length=== 0 ? <Empty>Você ainda não tem filmes favoritos :(</Empty>:
          favorites.map((film)=>(
            <Movie key={film.id}>
              <RemoveButton onPress={()=>removeFromFavorites(film.id)}>
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
const mapStateToProps = state => ({
  favorites: state.favorites.favorites

})


const mapDispatchToProps = dispatch => bindActionCreators({
  remove
}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
