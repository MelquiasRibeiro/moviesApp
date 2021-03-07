import styled from 'styled-components/native';
import { themeColor,secundaryColor,primaryColor,inactiveColor } from '../../styles/colors';

export const Container = styled.SafeAreaView`
    background-color:${themeColor};
    flex:1;
    padding:24px;
`;
export const Title =styled.Text`
    font-size:18px;
    font-weight:bold;
    color: ${inactiveColor};
    margin-top:36px;
`;

export const Header = styled.View`
    margin-top:12px;
    display:flex;
    flex-direction:row;
    width:100%;
`;

export const SearchInput =styled.TextInput`
    background-color:${secundaryColor};
    font-size:16px;
    padding:8px;
    border-radius:4px;
    width:85%;

`;

export const Empty = styled.Image`
    margin-top:150px;
    height:100px;
    resize-mode:contain;
    align-self:center;    
`;

export const SearchButton = styled.TouchableOpacity`
    background-color:${primaryColor};
    font-size:16px;
    padding:8px 16px;
    border-radius:4px;
    margin-left:16px;
    display:flex;
    align-items:center;
    justify-content:center;

`;