import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';
import firebase from './services/firebase';
import { useList } from "react-firebase-hooks/database";

export default function App() {

  const [notList, setNotList] = useState([])
  const [cards, loading, error] = useList(firebase.getAll())

  console.log(cards)

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#c64242"
       />
      <FlatList
        data={cards}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <CardQuote
            key={item.val().id}
            quote={item.val().quote}
            author={item.val().author}
            profileImg={item.val().profile}
            likes={item.val().likes}
            likedUser={item.val().likedUser}
          />
        }
      >

      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
