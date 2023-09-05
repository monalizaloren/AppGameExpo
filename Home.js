import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const filmesEmDestaque = [
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
       
      </TouchableOpacity>
      
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filmes em Destaque</Text>
      <FlatList
        data={filmesEmDestaque}
        renderItem={renderFilmeItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filmeItem: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  filmeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  filmeDescription: {
    fontSize: 16,
  },
});

export default HomeScreen;
