import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import {Alert} from "react-native";

import {
  Container,
  Image,
  Legend,
  Input,
  Form,
  SubmmitButton,
  AccountOptions,
  AccountOptionsText
} from './styles';
import Logo from '../../assets/images/logo.png'
import { Feather } from '@expo/vector-icons';
import firebase from 'firebase';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')


  const navigation = useNavigation();

  async function handleLogin() {  
     firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
     navigation.navigate('Home');
    }).catch((err)=>{
      console.log(err)
      Alert.alert(
        "Ocorreu um erro",
        "Seus dados estão corretos?",
      );
    })
  }
  function handleNavigateToRegister() {
      navigation.navigate('Register');
  }

  return (
  <Container >
    <Image source={Logo}/>
    <Form>
      <Legend>Email</Legend>
      <Input 
      onChangeText={
        (Email) =>setEmail(Email)
                   }/>
      <Legend>Senha</Legend>
      <Input 
      autoCompleteType="off" 
      secureTextEntry 
      onChangeText={
        (Password) =>setPassword(Password)
                    }/>
      <SubmmitButton onPress={handleLogin} >
        <Legend>ENTRAR</Legend>
      </SubmmitButton>
      <AccountOptions onPress={handleNavigateToRegister}>
        <AccountOptionsText>
          Criar uma conta{'  '}
          <Feather name="align-right" size={12} />
        </AccountOptionsText>
      </AccountOptions>
    </Form>
  </Container>
  );
}

export default Login;