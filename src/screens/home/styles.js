import styled from 'styled-components/native';
import { themeColor,secundaryColor,primaryColor,inactiveColor } from '../../styles/colors';


export const Container = styled.SafeAreaView`
    background-color:${themeColor};
    flex:1;
    padding:24px;
`;

export const Title = styled.Text`
    margin: 50px 0 0 0;
    font-size:24px;
    font-weight:bold;
    align-self:flex-start;
    color:${secundaryColor};
    width:200px;
`;

export const TypeContainer = styled.View`
    display:flex;
    flex-direction:row;
    margin:32px 0;
    justify-content: space-between;
`;

export const TypeButton = styled.TouchableOpacity`

    border-Bottom-Color:  ${(props) => (props.active ? primaryColor : themeColor)};
    border-Bottom-Width: 4px;
    padding:4px;
`;

export const TextBitton = styled.Text`
    color: ${(props) => (props.active ? secundaryColor : inactiveColor)};
    font-weight:bold;
    font-size:16px;
`;


export const MoviesContainer = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        paddingTop: 16,
    },
}))`

`;
export const Movie = styled.TouchableOpacity`
    margin:16px 0px;
    display:flex;
    align-items:center;

`;

export const Poster = styled.Image`
    resize-mode:contain;    
    width:250px;
    height:250px;
    margin-bottom:8px;
`;

export const Rate =styled.Text`
    color:${secundaryColor};
    margin:0 0 4px 0px;
    align-self:center;
`;

export const  Name = styled.Text`
    color:${secundaryColor};
    font-weight:bold;
    font-size:18px;
`;


export const Legend  =styled.Text`
   color:${inactiveColor};
    font-weight:bold;
    font-size:18px;
`; 