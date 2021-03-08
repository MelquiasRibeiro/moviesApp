import styled from 'styled-components/native';
import { themeColor,secundaryColor,primaryColor,inactiveColor } from '../../styles/colors';


export const Container = styled.SafeAreaView`
    background-color:${themeColor};
    flex:1;
    padding:24px;
`;

export const Header  = styled.View`
    color:${secundaryColor};
    margin:36px 0;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const GoBackButton  = styled.TouchableOpacity`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

`;

export const Back  = styled.Text`
color:${secundaryColor};
font-weight:bold;
font-size:18px;
`;

export const Poster  = styled.Image`
height:200px;
resize-mode:contain;    
border-radius:16px;
`;


export const Title  = styled.Text`
color:${secundaryColor};
align-self:center;
margin-top:8px;
font-weight:bold;
font-size:24px;
`;

export const Rate  = styled.Text`
color:${secundaryColor};
`;

export const FavoriteButton  = styled.TouchableOpacity``;

export const Info  = styled.ScrollView`
    margin-top:32px;
`;

export const NumberInfo  = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding:16px 0;
`;

export const Date  = styled.Text`
color:${secundaryColor};
`;

export const Description  = styled.Text`
color:${secundaryColor};
margin-top:16px;

`;
