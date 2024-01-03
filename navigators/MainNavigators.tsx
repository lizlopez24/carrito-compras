import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BienvenidaScreen from "../screens/BienvenidaScreen";
import RegistroProductosScreen from '../screens/RegistroProductosScreen';
import ListaProductosScreen from '../screens/ListaProductosScreen';
import IntegrantesScreen from '../screens/IntegrantesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Registro" component={RegistroProductosScreen} options={{
        tabBarIcon:()=>(
            <MaterialIcons name="store" size={24} color={"black"}/>
        )
      }}/>
      <Tab.Screen name="Lista" component={ListaProductosScreen} options={{
        tabBarIcon:()=>(
            <MaterialIcons name="list" size={24} color={"black"}/>
        )
    }}/>
      <Tab.Screen name="Integrantes" component={IntegrantesScreen} options={{
        tabBarIcon:()=>(
            <MaterialIcons name="people-outline" size={24} color={"black"}/>
        )
    }}/>
    </Tab.Navigator>
  );
}
const Stack=createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Bienvenida" component={BienvenidaScreen} />
            <Stack.Screen name="Tab" component={MyTabs} />
        </Stack.Navigator>
    )
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}