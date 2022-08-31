import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import axios from "axios";
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  Test,
  BoardList,
  DetailBoard,
  Word,

} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    Test,
    BoardList,
    DetailBoard,
    Word,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

export default createAppContainer(Router);
