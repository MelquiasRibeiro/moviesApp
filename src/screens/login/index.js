import React,{useState} from 'react';
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
import { Feather } from '@expo/vector-icons';



const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('')


  const navigation = useNavigation();

  async function handleLogin() {
    console.log(email)
    console.log(password)
    navigation.navigate('Home');
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