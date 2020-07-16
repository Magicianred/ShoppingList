import React, {useState} from 'react'
import Header from './components/Header'
import {View, FlatList, Text, StyleSheet} from 'react-native'
import { v4 as uuidv4 } from 'uuid'

const App =()=>{

  const [items, setItems] =useState([
    { id: uuidv4(), text: 'milk' },
    { id: uuidv4(), text: 'eggs' },
    { id: uuidv4(), text: 'bread' },
    { id: uuidv4(), text: 'juice' }
  ])

  return(
    <View style ={styles.container}>
        <Header/>
        <FlatList data={items} renderItem ={({item})=> (
          <Text>{item.text}</Text>
          )}/>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    paddingTop:60,
  }
})

export default App