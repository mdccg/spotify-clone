import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import HouseSolidIcon from './../components/icons/HouseSolid';
import MagnifyingGlassSolidIcon from './../components/icons/MagnifyingGlassSolid';
import SwatchbookSolidIcon from './../components/icons/SwatchbookSolid';
import HomeScreen from './../screens/Home';
import SearchScreen from './../screens/Search';
import Theme from './../stylesheets/theme';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  header: () => <></>,
  tabBarBackground: () => (
    <LinearGradient
      colors={['transparent', '#000']}
      style={{ height: 48 }} />
  ),
  tabBarStyle: {
    paddingHorizontal: 32,
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
    height: 48,
  },
  tabBarActiveTintColor: Theme.colors.white,
  tabBarInactiveTintColor: Theme.colors.lightgray,
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <HouseSolidIcon fill={color} width={size} height={size} />
          )
        }} />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlassSolidIcon fill={color} width={size} height={size} />
          )
        }} />

      <Tab.Screen
        name="YourLibrary"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Sua Biblioteca',
          tabBarIcon: ({ color, size }) => (
            <SwatchbookSolidIcon fill={color} width={size} height={size} />
          )
        }} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;