import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar } from 'react-native';
import CardQuote from './components/card/card.component';

const notList = [
  { id: 1, quote: 'Não caia no golpe!' },
  { id: 2, quote: 'Não mande mensagem para o/a ex!' },
  { id: 3, quote: 'Não esqueça comida na AirFryer!' },
  { id: 4, quote: 'Não responda stories bêbado!' },
  { id: 5, quote: 'Não deixe a roupa lavada na máquina!' },
]

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#c64242"
 />
      <FlatList
        data={notList}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <CardQuote
            quote={item.quote}
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
