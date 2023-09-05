


import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const Jogosemdestaque = [
  { id: '1', title: 'Harry Potter', description: 'Aventura mágica em Hogwarts' },
{ id: '2', title: '???', description: '???' },
  { id: '3', title: '??', description: '???' },
  // Adicione mais filmes em destaque aqui
];

const HomeScreen = ({ navigation }) => {
  const renderFilmeItem = ({ item }) => {
    return (
      <TouchableOpacity
       style={styles.filmeItem}
  //Onde você possui as "???", coloque o nome da tela que aparecerá
  //quando o primeiro botão for clicado
        onPress={() => navigation.navigate('???', { filme: item })}
      >
        <Text style={styles.filmeTitle}>{item.title}</Text>
        <Text style={styles.filmeDescription}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filmes em Destaque</Text>
      <FlatList
        data={Jogosemdestaque}
        renderItem={renderFilmeItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: 'black', // Fundo preto
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white', // Texto branco
  },
  flatListContent: {
    paddingBottom: 16,
  },
  filmeItem: {
    backgroundColor: 'red', // Fundo vermelho
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    elevation: 2,
  },
  filmeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Texto branco
  },
  filmeDescription: {
    fontSize: 16,
    color: 'white', // Texto branco
  },
});

export default HomeScreen;
