import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen
  },
  {
    initialRouteName: 'Home'
  }
);
export default createAppContainer(AppNavigator);

// http://expo.io/artifacts/8688a4c2-3768-49ef-8b08-e8a293981029
