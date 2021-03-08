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
import { connect } from 'react-redux'
import { remove,add } from '../../store/ducks/favorites';
import { bindActionCreators } from "redux"
import { useNavigation,useRoute } from '@react-navigation/native';

const Details = (props) => {
   

 const{favorites}= props;

 
  const route = useRoute();
  const navigation = useNavigation();
  const routeParams =route.params;
  
  const movie=routeParams


  const isFavorited= favorites.find((favorite)=> favorite.id === movie.id );

  function handleNavigateToDetails() {
    navigation.goBack();
  }

  function controlFavoriteList() {
    if(isFavorited){
      props.remove(movie.id)
    }
    else{
      props.add(movie)
    }
  }

  return (
  <Container>
    <Header>
     <GoBackButton onPress={handleNavigateToDetails}>
       <AntDesign name="left" size={18} color="#ffffff" />
       <Back>{' '}Voltar a Procurar</Back>
     </GoBackButton>
     <FavoriteButton onPress={controlFavoriteList} >
     { isFavorited !==undefined?
       <AntDesign name="heart" size={20} color="#e50914"/>
       :
       <AntDesign name="hearto" size={20} color="#e50914" />
     } 
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
const mapStateToProps = state => ({
  favorites: state.favorites.favorites

})


const mapDispatchToProps = dispatch => bindActionCreators({
  remove,
  add

}, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(Details)