import React from 'react';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'
import { View } from 'react-native';

export default function App() {
  return (
    <View>
    <Header headertext={'Albums!'}/>
    <AlbumList />
    </View>
  )
}