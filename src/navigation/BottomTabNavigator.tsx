import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Theme from './../stylesheets/theme';
import HouseSolidIcon from './../components/icons/HouseSolid';
import MagnifyingGlassSolidIcon from './../components/icons/MagnifyingGlassSolid';
import SwatchbookSolidIcon from './../components/icons/SwatchbookSolid';
import HomeScreen from './../screens/Home';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  header: () => <></>,
  headerBackground: () => <></>,
  tabBarStyle: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0,
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
        component={HomeScreen}
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