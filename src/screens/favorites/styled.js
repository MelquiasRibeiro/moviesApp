import styled from 'styled-components/native';
import { themeColor,secundaryColor,primaryColor,inactiveColor } from '../../styles/colors';


export const Container = styled.SafeAreaView`
    background-color:${themeColor};
    flex:1;
    padding:24px;
`;

export const Title = styled.Text`
    margin: 50px 0 0 0;
    padding-bottom:8px;
    width:100%;
    font-size:24px;
    font-weight:bold;
    align-self:flex-start;
    color:${secundaryColor};
    border-bottom-color:${inactiveColor};
    border-bottom-width:1px;
`;

export const RemoveButton = styled.TouchableOpacity`
    background-color:${primaryColor};
    padding:8px;
    align-self:flex-end;
    color:${secundaryColor};
    border-radius:4px;
    margin:0 16px 8px 0;
`;


