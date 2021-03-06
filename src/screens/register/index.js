import React,{useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')


  const navigation = useNavigation();

  async function handleRegister() {
    console.log(email)
    console.log(password)
    // await firebase
    // .auth()
    // .signInWithEmailAndPassword(email, password)
    // .then(handleNavigateToList)
    // .catch(error => {
    //   console.log(error)
    //   setLoading(false)
    //   setError(true)
    // });
  }
  function handleNavigateToLogin() {
      navigation.navigate('Login');
  }

  return (
  <Container >
    <Image source={Logo}/>
    <Form>
      <Legend>Nome</Legend>
      <Input 
      onChangeText={
        (Name) =>setName(Name)
                   }/>
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
      <SubmmitButton onPress={handleRegister} >
        <Legend>Cadastrar</Legend>
      </SubmmitButton>
      <AccountOptions onPress={handleNavigateToLogin}>
        <AccountOptionsText>
          Ja tenho cadastro{'  '}
          <AntDesign name="arrowleft" size={12}/>
        </AccountOptionsText>
      </AccountOptions>
    </Form>
  </Container>
  )
}

export default Register;