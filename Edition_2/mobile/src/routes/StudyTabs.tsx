import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return(
    <Navigator 
      tabBarOptions={{
        style: {
          elevation: 0,
          //como se fosse box-shadow
          shadowOpacity: 0,
          //tirar sombra IOS
          height: 64,
        },

        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },

        iconStyle: {
          flex: 0,
          //tira a capacidade de ocupar o máximo da pagina
          width: 20,
          height: 20,
        },

        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },

        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',

        inactiveTintColor: '#c1bccc', //cor do texto inativo
        activeTintColor: '#32264d', //cor do texto ativo

      }}
    >

      <Screen 
        name="TeacherList" 
        component={TeacherList} 
        options={{
          tabBarLabel: 'Proffys', //Nome que vai ter na aba
          tabBarIcon: ({ color, size, focused }) => {
            return(
              <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color}/>
            );
          }
        }}
      />

      <Screen 
        name="Favorites" 
        component={Favorites} 
        options={{
          tabBarLabel: 'Favoritos', //Nome que vai ter na aba
          tabBarIcon: ({ color, size, focused }) => {
            return(
              <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color}/>
            );
          }
        }}
      />
    </Navigator>
  );
}

export default StudyTabs;