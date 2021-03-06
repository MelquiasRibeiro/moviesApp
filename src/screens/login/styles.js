import styled from 'styled-components/native';
import {secundaryColor,primaryColor} from '../../styles/colors';

export const Container = styled.View`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:30px;
`;


export const Image = styled.Image`
    margin-top:100px;
    height:50px;
    resize-mode:contain;    
`;


export const Form = styled.View`
    margin-top:100px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    width:100%;

`;

export const Legend = styled.Text`
    font-size:16px;
    font-weight:bold;
    color:${secundaryColor};
    align-self:flex-start;
`;

export const Input = styled.TextInput`
    background:${secundaryColor};
    padding:8px;
    margin:16px;
    border:none;
    border-radius:4px;
    font-weight:bold;
    width:100%;

`; 

export const SubmmitButton = styled.TouchableOpacity`
    margin-top:48px;
    padding:8px 16px;
    background-color:${primaryColor};
    border-radius:4px;
`;

export const AccountOptions = styled.TouchableOpacity`
    margin:16px;
    padding:8px;
    display:flex;
    align-items:center;

`;
export const AccountOptionsText = styled.Text`
    color: ${secundaryColor};
    font-size: 12px;
    font-weight:bold;
    display:flex;
    align-items:center;
    justify-content:center;
`;