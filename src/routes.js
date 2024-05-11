import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

import Dogs from './pages/Dogs';
import Donate from './pages/Donate';
import Home from './pages/Home';
import CustomTabBarIcon from './components/CustomTabBarIcon';

export default function Routes(){
  return (
    <Tab.Navigator
      initialParams={{ initialScreen: 'Home' }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#091C1A',
        tabBarInactiveTintColor: '#A1D683',
        tabBarStyle:{
          backgroundColor: '#091C1A',
          height: '11%'
        }
      })}
    > 
      <Tab.Screen
        name="Donate"
        component={Donate}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarIcon focused={focused}>
              <FontAwesome5 name="hand-holding-heart" size={size} color={color} />
            </CustomTabBarIcon>
          )
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarIcon focused={focused}>
              <Feather name="home" size={size} color={color} />
            </CustomTabBarIcon>
          )
        }}
      />
      <Tab.Screen
        name="Dogs"
        component={Dogs}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ size, color, focused }) => (
            <CustomTabBarIcon focused={focused}>
              <MaterialCommunityIcons name="dog" size={size} color={color} />
            </CustomTabBarIcon>
          )
        }}
      />
    </Tab.Navigator>
  )
}