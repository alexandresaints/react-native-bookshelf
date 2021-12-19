import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Navbar from './src/Components/Navbar'
import Book from './src/Screens/Book';
import Home from "./src/Screens/Home";
import CategoriesScreen from "./src/Screens/CategoriesScreen";

const Main = createNativeStackNavigator()

export default function App(){
    return(
        <>
        <NavigationContainer>
            <Main.Navigator>
                <Main.Screen name='Home' component={Home} options={{ headerTitle: (props) => <Navbar {...props} />, headerBackVisible: false }}/>
                <Main.Screen name='Book' component={Book} options={{ headerTitle: (props) => <Navbar {...props} />}}/>
                <Main.Screen name='Category' component={CategoriesScreen} options={{ headerTitle: (props) => <Navbar {...props} />}}/>
            </Main.Navigator>
        </NavigationContainer>
        </>
    )
}